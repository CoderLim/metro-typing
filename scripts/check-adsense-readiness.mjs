import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

const checks = [
  {
    name: 'AdSense loader is not injected from the root shell',
    pass: () => !read('src/routes/__root.tsx').includes('<Ads code='),
  },
  {
    name: 'Root shell keeps AdSense account verification meta without sitewide loader',
    pass: () =>
      read('src/routes/__root.tsx').includes('AdsAccountMeta') &&
      read('src/routes/__root.tsx').includes('AdsLoader') &&
      read('src/routes/__root.tsx').includes('isAdContentPage'),
  },
  {
    name: 'AdSense loader is limited to blog article detail pages',
    pass: () =>
      read('src/routes/__root.tsx').includes('blog\\/[^/]+') &&
      !read('src/routes/__root.tsx').includes('blog(?:\\/|$)'),
  },
  {
    name: 'About and contact routes exist',
    pass: () =>
      exists('src/routes/(pages)/about.tsx') &&
      exists('src/routes/(pages)/contact.tsx'),
  },
  {
    name: 'Sitemap lists public trust pages',
    pass: () => {
      const sitemap = read('src/routes/sitemap[.]xml.ts');
      return sitemap.includes("'/about'") && sitemap.includes("'/contact'");
    },
  },
  {
    name: 'Privacy policy discloses Google ad cookies and personalized ad controls',
    pass: () => {
      const privacy = [
        read('src/content/pages/privacy-policy.en.mdx'),
        read('src/content/pages/privacy-policy.ko.mdx'),
        read('src/content/pages/privacy-policy.zh.mdx'),
      ].join('\n');
      return [
        'Google AdSense',
        'cookies',
        'IP addresses',
        'personalized ads',
        'EEA',
      ].every((term) => privacy.includes(term));
    },
  },
  {
    name: 'Local blog content is Metro Typing specific, not template material',
    pass: () => {
      const posts = [
        read('src/content/posts/index.ts'),
        ...fs
          .readdirSync(path.join(root, 'src/content/posts'))
          .filter((file) => file.endsWith('.mdx'))
          .map((file) => read(`src/content/posts/${file}`)),
      ].join('\n');
      return (
        posts.includes('Metro Typing') &&
        posts.includes('hangul-typing-rhythm') &&
        !posts.includes('ShipAny') &&
        !posts.includes('headless SaaS')
      );
    },
  },
];

const failures = checks.filter((check) => !check.pass());

for (const check of checks) {
  console.log(`${failures.includes(check) ? 'FAIL' : 'PASS'} ${check.name}`);
}

if (failures.length > 0) {
  process.exitCode = 1;
}
