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
    name: 'Root shell injects AdSense account meta and sitewide loader',
    pass: () =>
      read('src/routes/__root.tsx').includes('AdsAccountMeta') &&
      read('src/routes/__root.tsx').includes('AdsLoader'),
  },
  {
    name: 'Legal/contact paths pause Auto ad requests in code',
    pass: () => {
      const ads = read('src/components/analytics/ads.tsx');
      return (
        ads.includes('AD_REQUEST_PAUSED_PATHS') &&
        ads.includes('/privacy-policy') &&
        ads.includes('/terms-of-service') &&
        ads.includes('/contact') &&
        ads.includes('pauseAdRequests') &&
        exists('public/adsense-pause-requests.js')
      );
    },
  },
  {
    name: 'Homepage game frame keeps #play for AdSense excluded areas',
    pass: () =>
      read('src/blocks/game-embed.tsx').includes('id="play"') &&
      read('src/components/analytics/ads.tsx').includes('#play'),
  },
  {
    name: 'About and contact routes exist',
    pass: () =>
      exists('src/routes/(pages)/about.tsx') &&
      exists('src/routes/(pages)/contact.tsx'),
  },
  {
    name: 'About page discloses publisher domain and contact email',
    pass: () => {
      const about = [
        read('src/content/pages/about.en.mdx'),
        read('src/content/pages/about.ko.mdx'),
        read('src/content/pages/about.zh.mdx'),
      ].join('\n');
      return (
        about.includes('metrotyping.org') &&
        about.includes('contact@metrotyping.org') &&
        about.includes('73-9.org')
      );
    },
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
  {
    name: 'Compliance doc lists CMP, page exclusions, and #play area exclusion',
    pass: () => {
      const doc = read('docs/adsense-compliance.md');
      return (
        doc.includes('European regulations') &&
        doc.includes('Page exclusions') &&
        doc.includes('#play') &&
        doc.includes('pauseAdRequests')
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
