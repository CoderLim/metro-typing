import type { ComponentType } from 'react';

import {
  BLOG_POST_SLUGS,
  type BlogPost,
} from './catalog';
import type { BlogPostMeta } from './types';

export {
  BLOG_POST_LOCALES,
  BLOG_POST_SLUGS,
  formatPostDate,
  getLocalPostSummaries as getLocalPosts,
  mergePosts,
} from './catalog';
export type { BlogPost } from './catalog';
export type { BlogPostMeta } from './types';

type PostModule = {
  default: ComponentType;
  meta: BlogPostMeta;
};

export type BlogPostDetail = BlogPost & {
  /** Raw markdown — set for database posts */
  content?: string;
};

// Full compiled MDX modules are only imported by article/detail code. Landing
// pages use the metadata-only catalog so article bodies stay out of the
// critical route bundle.
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
