import type { BlogPostMeta } from './types';

export const BLOG_POST_SLUGS = [
  'china-metro-typing',
  'beginner-first-line',
  'route-quiz-guide',
  'hangul-vs-english-input',
  'line-2-loop-challenge',
  'hangul-typing-rhythm',
  'seoul-subway-line-memory',
] as const;

export const BLOG_POST_LOCALES = ['ko', 'en', 'zh', 'ja'] as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  authorName?: string;
  authorImage?: string;
  source: 'local' | 'db';
};

const postMetaModules = import.meta.glob('/src/content/posts/*.mdx', {
  eager: true,
  import: 'meta',
}) as Record<string, BlogPostMeta>;

for (const slug of BLOG_POST_SLUGS) {
  for (const locale of BLOG_POST_LOCALES) {
    const modulePath = `/src/content/posts/${slug}.${locale}.mdx`;
    if (!postMetaModules[modulePath]) {
      throw new Error(`[blog] Missing localized article: ${modulePath}`);
    }
  }
}

function localPostToItem(slug: string, meta: BlogPostMeta): BlogPost {
  return {
    slug,
    title: meta.title,
    description: meta.description,
    image: meta.image,
    createdAt: new Date(meta.created_at).toISOString(),
    authorName: meta.author_name,
    authorImage: meta.author_image,
    source: 'local',
  };
}

export function getLocalPostSummaries(locale: string): BlogPost[] {
  return BLOG_POST_SLUGS.map((slug) => {
    const meta =
      postMetaModules[`/src/content/posts/${slug}.${locale}.mdx`] ?? null;
    return meta ? localPostToItem(slug, meta) : null;
  }).filter((post): post is BlogPost => post !== null);
}

export function mergePosts(
  dbPosts: BlogPost[],
  localPosts: BlogPost[],
  options: { limit?: number } = {}
): BlogPost[] {
  const dbSlugs = new Set(dbPosts.map((post) => post.slug));
  const merged = [
    ...dbPosts,
    ...localPosts.filter((post) => !dbSlugs.has(post.slug)),
  ].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return options.limit ? merged.slice(0, options.limit) : merged;
}

const DATE_LOCALE: Record<string, string> = {
  ko: 'ko-KR',
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
};

export function formatPostDate(dateIso: string, locale: string): string {
  const dateLocale = DATE_LOCALE[locale] ?? 'en-US';
  return new Intl.DateTimeFormat(dateLocale, {
    year: 'numeric',
    month: locale === 'en' ? 'short' : 'long',
    day: 'numeric',
  }).format(new Date(dateIso));
}
