import { createFileRoute } from '@tanstack/react-router';

import { localeSeoLinks } from '@/core/i18n/seo';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, type Locale } from '@/paraglide/runtime.js';
import { Blog } from '@/blocks/blog';
import { Footer } from '@/blocks/footer';
import { GameEmbed } from '@/blocks/game-embed';
import { Header } from '@/blocks/header';
import { SeoContent } from '@/blocks/seo-content';
import { SupportedCountries } from '@/blocks/supported-countries';
import { KOREAN_HOME_FAQS } from '@/content/home-seo.ko';
import {
  getLocalPostSummaries,
  mergePosts,
} from '@/content/posts/catalog';

const GAME_URL = 'https://metrotyping.kr/';

const OG_LOCALE: Record<string, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  zh: 'zh_CN',
  ja: 'ja_JP',
};

const HOME_BLOG_LIMIT = 3;
const KO_HOME_TITLE =
  '메트로 타이핑 · 메트로타이핑 - 서울 지하철 역 이름 타자 연습';
const KO_HOME_DESCRIPTION =
  '메트로 타이핑(메트로타이핑)은 지하철역 이름을 입력하며 노선을 완주하는 게임입니다. 서울 지하철 노선도 타이핑과 지하철 타자 연습을 브라우저에서 바로 즐기고 기록에 도전해 보세요.';

function buildStructuredData(
  locale: Locale,
  canonical: string,
  title: string,
  description: string
) {
  const faq =
    locale === 'ko'
      ? KOREAN_HOME_FAQS
      : [
          {
            question: m['landing.seo.faq.q1']({}, { locale }),
            answer: m['landing.seo.faq.a1']({}, { locale }),
          },
          {
            question: m['landing.seo.faq.q2']({}, { locale }),
            answer: m['landing.seo.faq.a2']({}, { locale }),
          },
          {
            question: m['landing.seo.faq.q3']({}, { locale }),
            answer: m['landing.seo.faq.a3']({}, { locale }),
          },
          {
            question: m['landing.seo.faq.q4']({}, { locale }),
            answer: m['landing.seo.faq.a4']({}, { locale }),
          },
          {
            question: m['landing.seo.faq.q5']({}, { locale }),
            answer: m['landing.seo.faq.a5']({}, { locale }),
          },
        ];

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title,
      description,
      url: canonical,
      sameAs: GAME_URL,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and a modern web browser',
      inLanguage: locale,
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];
}

function HomePage() {
  const { posts } = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <GameEmbed />
      <main>
        <SeoContent />
        <Blog posts={posts} />
        <SupportedCountries />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    const posts = mergePosts([], getLocalPostSummaries(locale), {
      limit: HOME_BLOG_LIMIT,
    });
    const title =
      locale === 'ko'
        ? KO_HOME_TITLE
        : m['common.metadata.title']({}, { locale });
    const description =
      locale === 'ko'
        ? KO_HOME_DESCRIPTION
        : m['common.metadata.description']({}, { locale });

    return {
      locale,
      posts,
      title,
      description,
    };
  },
  head: ({ loaderData }) => {
    const locale = (loaderData?.locale ?? 'ko') as Locale;
    const title = loaderData?.title ?? envConfigs.app_name;
    const description =
      loaderData?.description ?? envConfigs.app_description;
    const { canonical, links } = localeSeoLinks('/', locale);
    const ogImage = `${envConfigs.app_url}/imgs/screenshots/playing.png`;
    const structuredData = buildStructuredData(
      locale,
      canonical,
      title,
      description
    );

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
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
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
      ],
      links: [
        ...links,
        { rel: 'preconnect', href: GAME_URL },
        { rel: 'dns-prefetch', href: GAME_URL },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        },
      ],
    };
  },
  component: HomePage,
});
