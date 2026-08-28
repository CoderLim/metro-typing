import { createFileRoute, notFound } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft, Calendar } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { localeSeoLinks } from '@/core/i18n/seo';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { AdsterraSlot } from '@/components/ads';
import { MarkdownContent } from '@/components/markdown-content';
import { mdxComponents } from '@/components/mdx-components';
import { formatPostDate, loadLocalPost } from '@/content/posts';
import { getBlogPostFn } from '@/content/posts/server';

function absoluteUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    return new URL(value, envConfigs.app_url).href;
  } catch {
    return undefined;
  }
}

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const locale = getLocale();
    const post = await getBlogPostFn({
      data: { slug: params.slug, locale },
    });
    if (!post) throw notFound();
    return { locale, post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { locale, post } = loaderData;
    const { canonical, links } = localeSeoLinks(`/blog/${post.slug}`, locale);
    const title = `${post.title} | ${envConfigs.app_name}`;
    const image = absoluteUrl(post.image);
    const authorName = post.authorName || envConfigs.app_name;
    const structuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        ...(image ? { image: [image] } : {}),
        datePublished: post.createdAt,
        author: {
          '@type': 'Person',
          name: authorName,
          ...(post.authorImage ? { image: absoluteUrl(post.authorImage) } : {}),
        },
        publisher: {
          '@type': 'Organization',
          name: envConfigs.app_name,
          logo: {
            '@type': 'ImageObject',
            url: `${envConfigs.app_url}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
        inLanguage: locale,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: envConfigs.app_name,
            item: envConfigs.app_url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: m['landing.blog.title']({}, { locale }),
            item: new URL('/blog', envConfigs.app_url).href,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ];

    return {
      meta: [
        { title },
        { name: 'description', content: post.description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: post.description },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'article' },
        { property: 'article:published_time', content: post.createdAt },
        ...(image
          ? [
              { property: 'og:image', content: image },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' },
              { property: 'og:image:alt', content: post.title },
            ]
          : []),
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: post.description },
        ...(image ? [{ name: 'twitter:image', content: image }] : []),
      ],
      links,
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { locale, post } = Route.useLoaderData();

  // Local posts render their bundled MDX component; database posts render
  // raw markdown through MarkdownContent.
  const LocalContent =
    post.source === 'local' ? loadLocalPost(post.slug, locale)?.default : null;

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-6 py-12 md:px-8 md:py-16">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4" />
            {m['blog.back_to_blog']()}
          </Link>

          <header className="border-border mt-8 mb-6 border-b pb-6">
            <h1 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-muted-foreground mt-3">{post.description}</p>
            )}
            <div className="text-muted-foreground mt-4 flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatPostDate(post.createdAt, locale)}
              </span>
              {(post.authorName || post.authorImage) && (
                <span className="inline-flex items-center gap-2">
                  {post.authorImage && (
                    <img
                      src={post.authorImage}
                      alt={post.authorName || ''}
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                      className="size-5 rounded-full object-cover"
                    />
                  )}
                  {post.authorName}
                </span>
              )}
            </div>
          </header>

          <AdsterraSlot slot="content-top" />

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="(min-width: 768px) 768px, calc(100vw - 48px)"
              className="border-border mb-8 aspect-[1200/630] w-full rounded-2xl border object-cover"
            />
          )}

          {LocalContent ? (
            <div className="text-foreground/90 text-[15px] leading-7">
              <MDXProvider components={mdxComponents}>
                <LocalContent />
              </MDXProvider>
            </div>
          ) : (
            <MarkdownContent content={post.content || ''} />
          )}

          <AdsterraSlot slot="content-end" />
        </article>
      </main>
      <Footer />
    </div>
  );
}
