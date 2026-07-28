import { createFileRoute, notFound } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import {
  getLineGuide,
  getLineGuideSummaries,
} from '@/content/seo-guides';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import { SeoGuidePage } from '@/components/seo-guide-page';

export const Route = createFileRoute('/(pages)/lines/$line')({
  loader: ({ params }) => {
    const locale = getLocale();
    const guide = getLineGuide(params.line, locale);
    if (!guide) throw notFound();

    const related = getLineGuideSummaries(locale)
      .filter((item) => item.slug !== guide.slug)
      .slice(0, 4);

    return { guide, related, locale };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { guide, locale } = loaderData;
    const canonical = localizeUrl(
      `${envConfigs.app_url}/lines/${guide.slug}`,
      { locale }
    ).href;

    return {
      meta: [
        { title: guide.title },
        { name: 'description', content: guide.description },
        { property: 'og:title', content: guide.title },
        { property: 'og:description', content: guide.description },
        { property: 'og:type', content: 'article' },
      ],
      links: [{ rel: 'canonical', href: canonical }],
    };
  },
  component: LineGuidePage,
});

function LineGuidePage() {
  const { guide, related, locale } = Route.useLoaderData();
  const korean = locale === 'ko';

  return (
    <SeoGuidePage
      guide={guide}
      related={related}
      relatedBaseHref="/lines"
      backHref="/supported-lines"
      backLabel={korean ? '지원 노선 전체 보기' : 'View all supported lines'}
      locale={locale}
    />
  );
}
