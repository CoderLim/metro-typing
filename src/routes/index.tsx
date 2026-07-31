import { createFileRoute } from '@tanstack/react-router';

import { localeSeoLinks } from '@/core/i18n/seo';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, type Locale } from '@/paraglide/runtime.js';
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
    const { canonical, links } = localeSeoLinks('/', locale);
    const ogImage = `${envConfigs.app_url}/imgs/screenshots/playing.png`;
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
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1280' },
        { property: 'og:image:height', content: '800' },
        { property: 'og:image:alt', content: 'Metro Typing gameplay' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: ogImage },
      ],
      links,
    };
  },
  component: HomePage,
});
