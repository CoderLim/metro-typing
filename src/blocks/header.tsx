import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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

const menuLabels: Record<string, { open: string; close: string }> = {
  ko: { open: '메뉴 열기', close: '메뉴 닫기' },
  en: { open: 'Open menu', close: 'Close menu' },
  zh: { open: '打开菜单', close: '关闭菜单' },
  ja: { open: 'メニューを開く', close: 'メニューを閉じる' },
};

type NavLink = {
  href: string;
  label: string;
  route?: boolean;
};

function isNavActive(pathname: string, href: string) {
  if (href === '/#play') return pathname === '/';
  if (href === '/supported-lines') {
    return pathname === '/supported-lines' || pathname.startsWith('/lines/');
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItems({
  navLinks,
  pathname,
  linkClassName,
  onNavigate,
}: {
  navLinks: NavLink[];
  pathname: string;
  linkClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {navLinks.map((link) => {
        const active = isNavActive(pathname, link.href);
        const className = cn(
          linkClassName,
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
              onClick={onNavigate}
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
            onClick={onNavigate}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks: NavLink[] = [
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
  const menuLabel = menuLabels[locale] || menuLabels.en;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="border-border bg-background/95 fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2"
            aria-label={envConfigs.app_name}
          >
            <img
              src="/logo.png"
              alt=""
              className="size-8 shrink-0 rounded-md"
              width={32}
              height={32}
            />
            <span className="truncate text-sm font-semibold tracking-tight max-sm:max-w-36 sm:max-w-none">
              {envConfigs.app_name}
            </span>
          </Link>

          <nav
            aria-label={navLabel}
            data-nosnippet
            className="hidden items-center gap-5 md:flex"
          >
            <NavItems
              navLinks={navLinks}
              pathname={pathname}
              linkClassName="text-sm transition-colors"
            />
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 md:flex">
              <CountrySelector />
              <LocaleSelector />
            </div>

            <button
              type="button"
              className="text-foreground hover:bg-accent inline-flex size-10 items-center justify-center rounded-md transition-colors md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? menuLabel.close : menuLabel.open}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Reserve space for the fixed header bar */}
      <div className="h-14 shrink-0" aria-hidden="true" />

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-black/40 md:hidden"
            aria-label={menuLabel.close}
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-nav"
            className="border-border bg-background fixed inset-x-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b shadow-lg md:hidden"
          >
            <nav
              aria-label={navLabel}
              className="flex flex-col gap-1 px-4 pt-2 pb-4"
              data-nosnippet
            >
              <NavItems
                navLinks={navLinks}
                pathname={pathname}
                linkClassName="rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                onNavigate={() => setMobileOpen(false)}
              />
            </nav>
            <div className="border-border flex items-center gap-2 border-t px-4 pt-3 pb-4">
              <CountrySelector />
              <LocaleSelector />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
