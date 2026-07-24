import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import { LocaleSelector } from '@/components/locale-selector';

export function Header() {
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/#about', label: m['landing.nav.about']() },
    { href: '/#howto', label: m['landing.nav.howto']() },
    { href: '/#tips', label: m['landing.nav.tips']() },
    { href: '/blog', label: m['landing.nav.blog'](), route: true },
    { href: '/#faq', label: m['landing.nav.faq']() },
    {
      href: 'https://73-9.org',
      label: m['landing.nav.game_739'](),
      external: true,
      featured: true,
    },
  ];

  return (
    <header className="border-border bg-background/90 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Metro Typing"
            className="size-8 rounded-md"
            width={32}
            height={32}
          />
          <span className="text-sm font-semibold tracking-tight">
            {envConfigs.app_name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  link.featured
                    ? 'nav-cta-739'
                    : 'text-muted-foreground hover:text-foreground text-sm transition-colors'
                )}
              >
                {link.featured ? (
                  <img
                    src="/imgs/73-9-logo.png"
                    alt=""
                    className="nav-cta-739-logo"
                    width={18}
                    height={18}
                  />
                ) : null}
                {link.label}
                {link.featured ? (
                  <span className="nav-cta-739-badge">
                    {m['landing.nav.game_739_badge']()}
                  </span>
                ) : null}
              </a>
            ) : link.route ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSelector />
        </div>
      </div>
    </header>
  );
}
