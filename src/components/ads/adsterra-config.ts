import { shouldPauseAdRequests } from '@/components/analytics/ads';

export const ADSTERRA_SLOT_IDS = [
  'below-game',
  'content-top',
  'content-end',
] as const;

export type AdsterraSlotId = (typeof ADSTERRA_SLOT_IDS)[number];

export type AdsterraUnit = {
  key: string;
  width: number;
  height: number;
};

export type AdsterraConfig = {
  /** Master kill switch — when false, every Adsterra component renders nothing. */
  enabled: boolean;
  /** Host used in `//{host}/{key}/invoke.js` (no protocol). */
  invokeHost: string;
  slots: Record<AdsterraSlotId, AdsterraUnit | null>;
  /** Full sticky/social-bar script URL from the Adsterra dashboard. */
  stickyScriptSrc: string;
  /** Publisher account id for /ads.txt (`adsterra.com, {id}, DIRECT`). */
  publisherId: string;
};

export const DEFAULT_ADSTERRA_INVOKE_HOST = 'www.highrevenueformat.com';

const SLOT_DEFAULTS: Record<AdsterraSlotId, { width: number; height: number }> =
  {
    'below-game': { width: 728, height: 90 },
    'content-top': { width: 728, height: 90 },
    'content-end': { width: 300, height: 250 },
  };

const SLOT_CONFIG_KEYS: Record<
  AdsterraSlotId,
  { key: string; width: string; height: string }
> = {
  'below-game': {
    key: 'adsterra_below_game_key',
    width: 'adsterra_below_game_width',
    height: 'adsterra_below_game_height',
  },
  'content-top': {
    key: 'adsterra_content_top_key',
    width: 'adsterra_content_top_width',
    height: 'adsterra_content_top_height',
  },
  'content-end': {
    key: 'adsterra_content_end_key',
    width: 'adsterra_content_end_width',
    height: 'adsterra_content_end_height',
  },
};

export const ADSTERRA_CONFIG_KEYS = [
  'adsterra_enabled',
  'adsterra_invoke_host',
  'adsterra_publisher_id',
  'adsterra_sticky_script_src',
  ...Object.values(SLOT_CONFIG_KEYS).flatMap((s) => [s.key, s.width, s.height]),
] as const;

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const n = Number.parseInt(value?.trim() || '', 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function parseUnit(
  configs: Record<string, string>,
  slot: AdsterraSlotId
): AdsterraUnit | null {
  const keys = SLOT_CONFIG_KEYS[slot];
  const key = configs[keys.key]?.trim() || '';
  if (!key) return null;
  const defaults = SLOT_DEFAULTS[slot];
  return {
    key,
    width: parsePositiveInt(configs[keys.width], defaults.width),
    height: parsePositiveInt(configs[keys.height], defaults.height),
  };
}

export function normalizeAdsterraConfig(
  configs: Record<string, string>
): AdsterraConfig {
  const enabled = configs.adsterra_enabled === 'true';
  const invokeHost =
    configs.adsterra_invoke_host?.trim() || DEFAULT_ADSTERRA_INVOKE_HOST;

  return {
    enabled,
    invokeHost: invokeHost.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    publisherId: configs.adsterra_publisher_id?.trim() || '',
    stickyScriptSrc: configs.adsterra_sticky_script_src?.trim() || '',
    slots: {
      'below-game': parseUnit(configs, 'below-game'),
      'content-top': parseUnit(configs, 'content-top'),
      'content-end': parseUnit(configs, 'content-end'),
    },
  };
}

/** Paths where bottom sticky is allowed (blog / guides / MDX content). */
export function shouldShowAdsterraSticky(pathname: string): boolean {
  if (shouldPauseAdRequests(pathname)) return false;

  if (
    pathname === '/' ||
    pathname === '/japan-metro-typing' ||
    pathname === '/subway-map-typing'
  ) {
    return false;
  }

  if (pathname === '/blog' || pathname.startsWith('/blog/')) return true;
  if (pathname.startsWith('/lines/') || pathname.startsWith('/practice/')) {
    return true;
  }

  const contentPages = [
    '/how-to-play',
    '/tips',
    '/supported-lines',
    '/about',
    '/faq',
  ];
  return contentPages.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}
