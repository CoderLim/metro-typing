import { Check, ChevronDown } from 'lucide-react';

import { usePathname } from '@/core/i18n/navigation';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const COPY: Record<
  string,
  {
    switchCountry: string;
    korea: string;
    japan: string;
    koreaTitle: string;
    japanTitle: string;
  }
> = {
  ko: {
    switchCountry: '플레이 국가 변경',
    korea: '한국',
    japan: '일본',
    koreaTitle: '한국 Metro Typing으로 이동',
    japanTitle: '일본 전철 타이핑으로 이동',
  },
  en: {
    switchCountry: 'Switch game country',
    korea: 'Korea',
    japan: 'Japan',
    koreaTitle: 'Open Korea Metro Typing',
    japanTitle: 'Open Japan Train Typing',
  },
  zh: {
    switchCountry: '切换游戏国家',
    korea: '韩国',
    japan: '日本',
    koreaTitle: '打开韩国 Metro Typing',
    japanTitle: '打开日本电车打字',
  },
  ja: {
    switchCountry: 'プレイする国を切り替える',
    korea: '韓国',
    japan: '日本',
    koreaTitle: '韓国のMetro Typingを開く',
    japanTitle: '日本の電車でタイピングを開く',
  },
};

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
      href: '/',
      flag: '🇰🇷',
      label: copy.korea,
      title: copy.koreaTitle,
    },
    {
      id: 'japan' as const,
      href: '/japan-metro-typing',
      flag: '🇯🇵',
      label: copy.japan,
      title: copy.japanTitle,
    },
  ];
  const active = countries.find((country) => country.id === activeCountry)!;

  function handleCountryChange(href: string) {
    const target = localizeUrl(href, { locale }).href;
    window.location.assign(target);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title={copy.switchCountry}
        aria-label={copy.switchCountry}
        className="text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors outline-none"
      >
        <span aria-hidden="true">{active.flag}</span>
        <span>{active.label}</span>
        <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.id}
            title={country.title}
            onClick={() => handleCountryChange(country.href)}
            className="flex cursor-pointer items-center gap-2"
          >
            <span aria-hidden="true">{country.flag}</span>
            <span className="flex-1">{country.label}</span>
            {country.id === activeCountry ? (
              <Check className="size-3.5" aria-hidden="true" />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
