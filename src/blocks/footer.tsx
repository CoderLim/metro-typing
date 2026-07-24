import { m } from '@/paraglide/messages.js';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.explore'](),
      links: [
        { label: m['landing.nav.play'](), href: '/#play' },
        { label: m['landing.nav.about'](), href: '/#about' },
        { label: m['landing.nav.howto'](), href: '/#howto' },
        { label: m['landing.nav.tips'](), href: '/#tips' },
        { label: m['landing.nav.faq'](), href: '/#faq' },
        {
          label: m['landing.footer.chrome_extension'](),
          href: 'https://chromewebstore.google.com/detail/metro-typing-launcher/amfhlibeegkheaikcojjlhihkpggfhbc',
        },
        {
          label: m['landing.footer.game_739'](),
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
  ];

  return (
    <SiteFooter
      tagline={m['landing.footer.tagline']()}
      columns={columns}
      socials={[]}
    />
  );
}
