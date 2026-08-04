import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { PrivacyChoicesButton } from '@/components/privacy-choices-button';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

const COUNTRY_COPY: Record<
  string,
  {
    title: string;
    korea: string;
    japan: string;
  }
> = {
  ko: {
    title: '지원 국가',
    korea: '🇰🇷 한국 Metro Typing',
    japan: '🇯🇵 일본 전철 타이핑',
  },
  en: {
    title: 'Supported Countries',
    korea: '🇰🇷 Korea Metro Typing',
    japan: '🇯🇵 Japan Train Typing',
  },
  zh: {
    title: '支持的国家',
    korea: '🇰🇷 韩国 Metro Typing',
    japan: '🇯🇵 日本电车打字',
  },
  ja: {
    title: '対応している国',
    korea: '🇰🇷 韓国 Metro Typing',
    japan: '🇯🇵 日本の電車でタイピング',
  },
};

export function Footer() {
  const locale = getLocale();
  const countryCopy = COUNTRY_COPY[locale] ?? COUNTRY_COPY.en;

  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.explore'](),
      links: [
        { label: m['landing.nav.play'](), href: '/#play' },
        { label: m['landing.nav.howto'](), href: '/how-to-play' },
        { label: m['landing.nav.tips'](), href: '/tips' },
        { label: m['landing.nav.lines'](), href: '/supported-lines' },
        { label: m['landing.nav.faq'](), href: '/faq' },
        {
          label: m['landing.footer.chrome_extension'](),
          href: 'https://chromewebstore.google.com/detail/metro-typing-launcher/amfhlibeegkheaikcojjlhihkpggfhbc',
        },
        {
          label: '73-9 game',
          href: 'https://73-9.org',
        },
      ],
    },
    {
      title: m['landing.footer.legal'](),
      links: [
        { label: m['landing.nav.about'](), href: '/about' },
        { label: m['landing.footer.contact'](), href: '/contact' },
        { label: m['landing.footer.privacy'](), href: '/privacy-policy' },
        { label: m['landing.footer.terms'](), href: '/terms-of-service' },
      ],
    },
    {
      title: countryCopy.title,
      links: [
        { label: countryCopy.korea, href: '/' },
        { label: countryCopy.japan, href: '/japan-metro-typing' },
      ],
    },
  ];

  return (
    <SiteFooter
      tagline={m['landing.footer.tagline']()}
      columns={columns}
      socials={[]}
      extra={<PrivacyChoicesButton />}
    />
  );
}
