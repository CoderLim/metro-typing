import { Link, usePathname } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { CountrySelector } from '@/components/country-selector';
import { LocaleSelector } from '@/components/locale-selector';

const navLabels: Record<string, string> = {
  ko: '주요 탐색',
  en: 'Primary navigation',
  zh: '主要导航',
  ja: 'メインナビゲーション',
};

function isNavActive(pathname: string, href: string) {
  if (href === '/#play') return pathname === '/';
  if (href === '/supported-lines') {
    return pathname === '/supported-lines' || pathname.startsWith('/lines/');
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/how-to-play', label: m['landing.nav.howto'](), route: true },
    { href: '/tips', label: m['landing.nav.tips'](), route: true },
    { href: '/supported-lines', label: m['landing.nav.lines'](), route: true },
    { href: '/blog', label: m['landing.nav.blog'](), route: true },
    { href: '/about', label: m['landing.nav.about'](), route: true },
    { href: '/faq', label: m['landing.nav.faq'](), route: true },
  ];
  const locale = getLocale();
  const navLabel = navLabels[locale] || navLabels.en;

  return (
    <header className="border-border bg-background/90 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={envConfigs.app_name}
        >
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

        <nav
          aria-label={navLabel}
          data-nosnippet
          className="hidden items-center gap-5 md:flex"
        >
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href);
            const className = cn(
              'text-sm transition-colors',
              active
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            );

            if (link.route) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={className}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className={className}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <CountrySelector />
          <LocaleSelector />
        </div>
      </div>
    </header>
  );
}
