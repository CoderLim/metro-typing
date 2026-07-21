import { createFileRoute, redirect } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { isNationCode, type NationCode } from '@/config/nations';
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
  zh: 'zh_CN',
  ja: 'ja_JP',
};

function nationMeta(nation: Exclude<NationCode, 'kr'>, locale: Locale) {
  if (nation === 'cn') {
    return {
      title: m['landing.game.meta_title_cn']({}, { locale }),
      description: m['landing.game.meta_description_cn']({}, { locale }),
    };
  }
  return {
    title: m['landing.game.meta_title_jp']({}, { locale }),
    description: m['landing.game.meta_description_jp']({}, { locale }),
  };
}

function NationPage() {
  const { nation } = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <GameEmbed nation={nation} />
      <main>
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/nation/$nation')({
  beforeLoad: ({ params }) => {
    if (!isNationCode(params.nation) || params.nation === 'kr') {
      throw redirect({ to: '/' });
    }
  },
  loader: ({ params }) => {
    const locale = getLocale();
    const nation = params.nation as Exclude<NationCode, 'kr'>;
    const meta = nationMeta(nation, locale);
    return { locale, nation, ...meta };
  },
  head: ({ loaderData }) => {
    const locale = (loaderData?.locale ?? 'ko') as Locale;
    const nation = loaderData?.nation ?? 'cn';
    const appUrl = envConfigs.app_url;
    const path = `/nation/${nation}`;
    const canonical = localizeUrl(`${appUrl}${path}`, { locale }).href;
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
          href: localizeUrl(`${appUrl}${path}`, { locale: loc }).href,
        })),
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: localizeUrl(`${appUrl}${path}`, { locale: 'ko' }).href,
        },
      ],
    };
  },
  component: NationPage,
});
