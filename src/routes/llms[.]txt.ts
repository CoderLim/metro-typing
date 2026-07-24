import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale } from '@/paraglide/runtime.js';
import { getLocalPosts, mergePosts } from '@/content/posts';

const STATIC_PAGES: { path: string; title: string; description: string }[] = [
  {
    path: '',
    title: 'Home',
    description: 'Landing page with playable Metro Typing embed',
  },
  {
    path: '/how-to-play',
    title: 'How to play',
    description: 'Full Metro Typing guide: modes, settings, and flow',
  },
  {
    path: '/tips',
    title: 'Tips',
    description: 'How to improve accuracy and personal records',
  },
  {
    path: '/supported-lines',
    title: 'Supported lines',
    description: 'Regions and railway lines you can practice',
  },
  {
    path: '/faq',
    title: 'FAQ',
    description: 'Free play, login, mobile, apps, and site scope',
  },
  {
    path: '/about',
    title: 'About',
    description: 'Independent guide and play page for Metro Typing',
  },
  { path: '/blog', title: 'Blog', description: 'Blog posts and articles' },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Contact the site operator',
  },
];

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: async () => {
        const { app_url, app_name, app_description } = envConfigs;

        let posts = getLocalPosts(baseLocale);
        try {
          const { listPublishedArticles } =
            await import('@/modules/posts/service');
          const rows = await listPublishedArticles().catch(() => []);
          const dbPosts = rows.map((row) => ({
            slug: row.slug,
            title: row.title || row.slug,
            description: row.description || '',
            createdAt: new Date(row.createdAt).toISOString(),
            source: 'db' as const,
          }));
          posts = mergePosts(dbPosts, posts);
        } catch {
          // Database unreachable — local posts still listed.
        }

        const lines: string[] = [
          `# ${app_name}`,
          '',
          `> ${app_description}`,
          '',
          '## Pages',
          '',
          ...STATIC_PAGES.map(
            (p) => `- [${p.title}](${app_url}${p.path}): ${p.description}`
          ),
        ];

        if (posts.length > 0) {
          lines.push('', '## Blog Posts', '');
          for (const post of posts) {
            lines.push(
              `- [${post.title}](${app_url}/blog/${post.slug}): ${post.description}`
            );
          }
        }

        lines.push('');

        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
