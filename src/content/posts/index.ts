import type { ComponentType } from 'react';

/**
 * Local blog posts written as MDX files in this directory.
 * File naming: `<slug>.<locale>.mdx`.
 * Register every local post slug here — it drives loading and the sitemap.
 *
 * This module is isomorphic (safe in client bundles). Database posts are
 * fetched through the server functions in ./server.ts and merged with the
 * local posts via the pure helpers below.
 */
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

export type BlogPostMeta = {
  title: string;
  description: string;
  created_at: string;
  author_name?: string;
  author_image?: string;
  image?: string;
};

type PostModule = {
  default: ComponentType;
  meta: BlogPostMeta;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  /** ISO date string — serializable across loader/server-fn boundaries */
  createdAt: string;
  authorName?: string;
  authorImage?: string;
  source: 'local' | 'db';
};

export type BlogPostDetail = BlogPost & {
  /** Raw markdown — set for database posts */
  content?: string;
};

// Eagerly bundle the local MDX posts (small markdown files), mirroring the
// static-pages pattern. Keys are absolute from the project root.
const postModules = import.meta.glob<PostModule>('/src/content/posts/*.mdx', {
  eager: true,
});

/**
 * Load only the requested language. A translated blog must never silently
 * render Korean or English content under a /zh or /ja canonical URL.
 */
export function loadLocalPost(slug: string, locale: string): PostModule | null {
  if (!BLOG_POST_SLUGS.includes(slug as (typeof BLOG_POST_SLUGS)[number])) {
    return null;
  }

  return postModules[`/src/content/posts/${slug}.${locale}.mdx`] ?? null;
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

export function getLocalPosts(locale: string): BlogPost[] {
  return BLOG_POST_SLUGS.map((slug) => ({
    slug: slug as string,
    mod: loadLocalPost(slug, locale),
  }))
    .filter((m): m is { slug: string; mod: PostModule } => m.mod !== null)
    .map(({ slug, mod }) => localPostToItem(slug, mod.meta));
}

/**
 * Merge database posts with local MDX posts, deduped by slug
 * (database wins), newest first.
 */
export function mergePosts(
  dbPosts: BlogPost[],
  localPosts: BlogPost[],
  options: { limit?: number } = {}
): BlogPost[] {
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const merged = [
    ...dbPosts,
    ...localPosts.filter((p) => !dbSlugs.has(p.slug)),
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
