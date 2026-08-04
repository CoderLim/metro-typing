/// <reference types="vite/client" />
import { useEffect, useState, type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  type ErrorComponentProps,
} from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { ThemeProvider } from 'next-themes';

import { envConfigs } from '@/config';
import { getQueryClient } from '@/lib/query-client';
import { getLocale } from '@/paraglide/runtime.js';
import { AdsAccountMeta, AdsLoader } from '@/components/analytics/ads';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { Plausible } from '@/components/analytics/plausible';
import { CustomerService } from '@/components/customer-service';
import { GoogleOneTap } from '@/components/google-one-tap';
import { SandboxPreviewBridge } from '@/components/sandbox-preview-bridge';
import { Toaster } from '@/components/ui/sonner';

import '@fontsource-variable/inter';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/libre-baskerville/400-italic.css';
import '@/styles/globals.css';

const ANALYTICS_CONFIG_KEYS = [
  'google_analytics_id',
  'plausible_domain',
  'plausible_src',
  'adsense_code',
  'crisp_enabled',
  'crisp_website_id',
  'tawk_enabled',
  'tawk_property_id',
  'tawk_widget_id',
] as const;

const INITIAL_ANALYTICS_TIMEOUT_MS = 75;
const ANALYTICS_CACHE_TTL_MS = 60 * 60 * 1000;

type AnalyticsConfig = {
  gaId: string;
  plausibleDomain: string;
  plausibleSrc: string;
  adsenseCode: string;
  crispWebsiteId: string;
  tawkPropertyId: string;
  tawkWidgetId: string;
};

function normalizeAnalytics(configs: Record<string, string>): AnalyticsConfig {
  return {
    gaId: configs.google_analytics_id?.trim() || '',
    plausibleDomain: configs.plausible_domain?.trim() || '',
    plausibleSrc: configs.plausible_src?.trim() || '',
    adsenseCode: configs.adsense_code?.trim() || '',
    crispWebsiteId:
      configs.crisp_enabled === 'true'
        ? configs.crisp_website_id?.trim() || ''
        : '',
    tawkPropertyId:
      configs.tawk_enabled === 'true'
        ? configs.tawk_property_id?.trim() || ''
        : '',
    tawkWidgetId:
      configs.tawk_enabled === 'true'
        ? configs.tawk_widget_id?.trim() || ''
        : '',
  };
}

const envAnalytics = normalizeAnalytics(
  envConfigs as unknown as Record<string, string>
);
let cachedAnalytics: AnalyticsConfig | null = null;
let cachedAnalyticsAt = 0;

// Query only the runtime integration keys instead of SELECT * FROM config.
// Warm instances serve a one-hour in-memory cache. The initial root loader is
// also time-bounded; a slower cold-start query finishes after hydration and
// updates the integrations without delaying first paint.
const getAnalyticsConfigs = createServerFn().handler(async () => {
  const now = Date.now();
  if (
    cachedAnalytics &&
    now - cachedAnalyticsAt < ANALYTICS_CACHE_TTL_MS
  ) {
    return cachedAnalytics;
  }

  const merged: Record<string, string> = {
    ...(envConfigs as unknown as Record<string, string>),
  };

  try {
    if (envConfigs.database_url || envConfigs.database_provider === 'd1') {
      const [{ inArray }, { db }, { config }] = await Promise.all([
        import('drizzle-orm'),
        import('@/core/db'),
        import('@/config/db/schema'),
      ]);
      const rows = await db()
        .select({ name: config.name, value: config.value })
        .from(config)
        .where(inArray(config.name, [...ANALYTICS_CONFIG_KEYS]));

      for (const row of rows) {
        if (row.name && row.value !== null && row.value !== undefined) {
          merged[row.name] = row.value;
        }
      }
    }
  } catch {
    // Database-backed analytics are optional; environment values still work.
  }

  const next = normalizeAnalytics(merged);
  cachedAnalytics = next;
  cachedAnalyticsAt = now;
  return next;
});

async function loadInitialAnalytics(): Promise<AnalyticsConfig> {
  return Promise.race([
    getAnalyticsConfigs(),
    new Promise<AnalyticsConfig>((resolve) => {
      setTimeout(() => resolve(envAnalytics), INITIAL_ANALYTICS_TIMEOUT_MS);
    }),
  ]);
}

export const Route = createRootRoute({
  loader: loadInitialAnalytics,
  head: () => {
    // Page-specific hreflang/canonical live on each route's head() via
    // localeSeoLinks() — do not emit homepage alternates here or every
    // URL will claim to be a locale variant of "/".
    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: envConfigs.app_name },
        { name: 'description', content: envConfigs.app_description },
      ],
      links: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        {
          rel: 'icon',
          href: '/favicon-32.png',
          type: 'image/png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/favicon.png',
          type: 'image/png',
          sizes: '64x64',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
      ],
    };
  },
  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootComponent() {
  const initialAnalytics = Route.useLoaderData() ?? envAnalytics;
  const [analytics, setAnalytics] =
    useState<AnalyticsConfig>(initialAnalytics);

  useEffect(() => {
    let active = true;
    getAnalyticsConfigs()
      .then((next) => {
        if (active) setAnalytics(next);
      })
      .catch(() => {
        // Environment values from the initial render remain active.
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <QueryClientProvider client={getQueryClient()}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Outlet />
        <SandboxPreviewBridge />
        <Toaster position="top-center" richColors />
        <GoogleOneTap />
        {analytics.adsenseCode ? (
          <>
            <AdsAccountMeta code={analytics.adsenseCode} />
            <AdsLoader code={analytics.adsenseCode} />
          </>
        ) : null}
        {analytics.gaId ? (
          <GoogleAnalytics measurementId={analytics.gaId} />
        ) : null}
        {analytics.plausibleDomain || analytics.plausibleSrc ? (
          <Plausible
            domain={analytics.plausibleDomain}
            src={analytics.plausibleSrc || undefined}
          />
        ) : null}
        <CustomerService
          crispWebsiteId={analytics.crispWebsiteId || undefined}
          tawkPropertyId={analytics.tawkPropertyId || undefined}
          tawkWidgetId={analytics.tawkWidgetId || undefined}
        />
      </ThemeProvider>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <a href="/" className="text-sm underline underline-offset-4">
        Back to home
      </a>
    </div>
  );
}

function RootError({ error, reset }: ErrorComponentProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Oops</h1>
      <p className="text-muted-foreground">
        Something went wrong. Please try again.
      </p>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="bg-muted mt-2 max-w-lg overflow-auto rounded p-4 text-xs">
          {error.message}
        </pre>
      )}
      <button
        type="button"
        onClick={reset}
        className="text-sm underline underline-offset-4"
      >
        Try again
      </button>
    </div>
  );
}
