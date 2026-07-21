import { Github } from 'lucide-react';

import { m } from '@/paraglide/messages.js';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

const GITHUB_URL = 'https://github.com/CoderLim/metro-typing/';

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
        { label: m['landing.footer.blog'](), href: '/blog' },
      ],
    },
    {
      title: m['landing.footer.legal'](),
      links: [
        { label: m['landing.footer.about'](), href: '/about' },
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
      socials={[
        {
          icon: Github,
          href: GITHUB_URL,
          label: m['landing.footer.github'](),
        },
      ]}
    />
  );
}
