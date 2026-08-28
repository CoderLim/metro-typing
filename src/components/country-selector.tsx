import { Check, ChevronDown } from 'lucide-react';

import { usePathname } from '@/core/i18n/navigation';
import { getLocale } from '@/paraglide/runtime.js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const COPY: Record<
  string,
  {
    switchCountry: string;
    koreaTitle: string;
    japanTitle: string;
  }
> = {
  ko: {
    switchCountry: '플레이 국가 변경',
    koreaTitle: '한국 Metro Typing으로 이동',
    japanTitle: '일본 전철 타이핑으로 이동',
  },
  en: {
    switchCountry: 'Switch game country',
    koreaTitle: 'Open Korea Metro Typing',
    japanTitle: 'Open Japan Train Typing',
  },
  zh: {
    switchCountry: '切换游戏国家',
    koreaTitle: '打开韩国 Metro Typing',
    japanTitle: '打开日本电车打字',
  },
  ja: {
    switchCountry: 'プレイする国を切り替える',
    koreaTitle: '韓国のMetro Typingを開く',
    japanTitle: '日本の電車でタイピングを開く',
  },
};

function localizedCountryHref(locale: string, path: string) {
  if (locale === 'ko') return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function CountrySelector() {
  const locale = getLocale();
  const pathname = usePathname();
  const copy = COPY[locale] ?? COPY.en;
  const activeCountry = pathname.includes('/japan-metro-typing')
    ? 'japan'
    : 'korea';

  const countries = [
    {
      id: 'korea' as const,
      href: localizedCountryHref(locale, '/'),
      flag: '🇰🇷',
      label: '한국',
      title: copy.koreaTitle,
    },
    {
      id: 'japan' as const,
      href: localizedCountryHref(locale, '/japan-metro-typing'),
      flag: '🇯🇵',
      label: '日本',
      title: copy.japanTitle,
    },
  ];
  const active = countries.find((country) => country.id === activeCountry)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title={copy.switchCountry}
        aria-label={copy.switchCountry}
        className="text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors outline-none"
      >
        <span aria-hidden="true">{active.flag}</span>
        <span className="max-sm:sr-only">{active.label}</span>
        <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {countries.map((country) => (
          <a
            key={country.id}
            href={country.href}
            title={country.title}
            role="menuitem"
            aria-current={country.id === activeCountry ? 'page' : undefined}
            className="focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors outline-none"
          >
            <span aria-hidden="true">{country.flag}</span>
            <span className="flex-1">{country.label}</span>
            {country.id === activeCountry ? (
              <Check className="size-3.5" aria-hidden="true" />
            ) : null}
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
