import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import {
  getLocale,
  locales,
  localizeUrl,
  type Locale,
} from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { GameEmbed } from '@/blocks/game-embed';
import { Header } from '@/blocks/header';
import { SeoContent } from '@/blocks/seo-content';

const OG_LOCALE: Record<string, string> = {
  ko: 'ko_KR',
  en: 'en_US',
};

function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <GameEmbed />
      <main>
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['common.metadata.title']({}, { locale }),
      description: m['common.metadata.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) => {
    const locale = (loaderData?.locale ?? 'ko') as Locale;
    const appUrl = envConfigs.app_url;
    const canonical = localizeUrl(`${appUrl}/`, { locale }).href;
    return {
      meta: [
        { title: loaderData?.title ?? envConfigs.app_name },
        {
          name: 'description',
          content: loaderData?.description ?? envConfigs.app_description,
        },
        {
          property: 'og:title',
          content: loaderData?.title ?? envConfigs.app_name,
        },
        {
          property: 'og:description',
          content: loaderData?.description ?? envConfigs.app_description,
        },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:locale',
          content: OG_LOCALE[locale] ?? 'ko_KR',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [
        { rel: 'canonical', href: canonical },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: localizeUrl(`${appUrl}/`, { locale: loc }).href,
        })),
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: localizeUrl(`${appUrl}/`, { locale: 'ko' }).href,
        },
      ],
    };
  },
  component: HomePage,
});
