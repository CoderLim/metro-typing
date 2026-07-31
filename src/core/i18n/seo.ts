import { envConfigs } from '@/config';
import {
  baseLocale,
  locales,
  localizeUrl,
  type Locale,
} from '@/paraglide/runtime.js';

type SeoLink = {
  rel: 'canonical' | 'alternate';
  href: string;
  hrefLang?: string;
};

/**
 * Canonical + hreflang alternates for a locale-free path.
 * Pass paths like `/`, `/about`, `/blog/slug`, `/lines/line-1`.
 */
export function localeSeoLinks(
  path: string,
  locale: string
): {
  canonical: string;
  links: SeoLink[];
} {
  const normalized =
    !path || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  const absolute =
    normalized === '/'
      ? `${envConfigs.app_url}/`
      : `${envConfigs.app_url}${normalized}`;

  const urlFor = (loc: string) =>
    localizeUrl(absolute, { locale: loc as Locale }).href;

  return {
    canonical: urlFor(locale),
    links: [
      { rel: 'canonical', href: urlFor(locale) },
      ...locales.map((loc) => ({
        rel: 'alternate' as const,
        hrefLang: loc,
        href: urlFor(loc),
      })),
      {
        rel: 'alternate',
        hrefLang: 'x-default',
        href: urlFor(baseLocale),
      },
    ],
  };
}
