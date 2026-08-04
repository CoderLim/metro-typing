import { createFileRoute } from '@tanstack/react-router';

import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { JapanGameEmbed, JAPAN_GAME_URL } from '@/blocks/japan-game-embed';
import { JapanSeoContent } from '@/blocks/japan-seo-content';
import { CountryGameSelector } from '@/components/country-game-selector';
import { envConfigs } from '@/config';
import { getJapanMetroPageCopy } from '@/content/japan-metro-page';
import { localeSeoLinks } from '@/core/i18n/seo';
import { getLocale, type Locale } from '@/paraglide/runtime.js';

const OG_LOCALE: Record<string, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  zh: 'zh_CN',
  ja: 'ja_JP',
};

function buildStructuredData(
  locale: string,
  canonical: string,
  copy: ReturnType<typeof getJapanMetroPageCopy>
) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: copy.h1,
      description: copy.metaDescription,
      url: canonical,
      sameAs: JAPAN_GAME_URL,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and a modern web browser',
      inLanguage: locale,
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: copy.howToTitle,
      description: copy.howToIntro,
      totalTime: 'PT5M',
      step: copy.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: copy.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: copy.breadcrumbHome,
          item: envConfigs.app_url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: copy.breadcrumbCurrent,
          item: canonical,
        },
      ],
    },
  ];
}

function JapanMetroTypingPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <CountryGameSelector active="japan" />
      <JapanGameEmbed />
      <main>
        <JapanSeoContent />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/japan-metro-typing')({
  loader: () => {
    const locale = getLocale();
    const copy = getJapanMetroPageCopy(locale);
    return { locale, copy };
  },
  head: ({ loaderData }) => {
    const locale = (loaderData?.locale ?? 'ja') as Locale;
    const copy = loaderData?.copy ?? getJapanMetroPageCopy(locale);
    const { canonical, links } = localeSeoLinks(
      '/japan-metro-typing',
      locale
    );
    const ogImage = `${envConfigs.app_url}/logo.png`;
    const structuredData = buildStructuredData(locale, canonical, copy);

    return {
      meta: [
        { title: copy.metaTitle },
        { name: 'description', content: copy.metaDescription },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: copy.metaTitle },
        { property: 'og:description', content: copy.metaDescription },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: OG_LOCALE[locale] ?? 'ja_JP' },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '64' },
        { property: 'og:image:height', content: '64' },
        { property: 'og:image:alt', content: copy.ogImageAlt },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: copy.metaTitle },
        { name: 'twitter:description', content: copy.metaDescription },
        { name: 'twitter:image', content: ogImage },
      ],
      links: [
        ...links,
        { rel: 'preconnect', href: 'https://densyatyping.com' },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        },
      ],
    };
  },
  component: JapanMetroTypingPage,
});
