import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';
import { getLocale } from '@/paraglide/runtime.js';

type Country = 'korea' | 'japan';

const COPY: Record<
  string,
  {
    label: string;
    navLabel: string;
    korea: string;
    japan: string;
    koreaTitle: string;
    japanTitle: string;
  }
> = {
  ko: {
    label: '플레이할 국가',
    navLabel: '국가별 Metro Typing 선택',
    korea: '한국',
    japan: '일본',
    koreaTitle: '한국 Metro Typing 플레이',
    japanTitle: '일본 전철 타이핑 플레이',
  },
  en: {
    label: 'Choose a country',
    navLabel: 'Choose a Metro Typing country',
    korea: 'Korea',
    japan: 'Japan',
    koreaTitle: 'Play Korea Metro Typing',
    japanTitle: 'Play Japan Train Typing',
  },
  zh: {
    label: '选择国家',
    navLabel: '选择不同国家的 Metro Typing',
    korea: '韩国',
    japan: '日本',
    koreaTitle: '玩韩国 Metro Typing',
    japanTitle: '玩日本电车打字游戏',
  },
  ja: {
    label: '国を選ぶ',
    navLabel: '国別のMetro Typingを選ぶ',
    korea: '韓国',
    japan: '日本',
    koreaTitle: '韓国のMetro Typingをプレイ',
    japanTitle: '日本の電車でタイピングをプレイ',
  },
};

export function CountryGameSelector({ active }: { active: Country }) {
  const locale = getLocale();
  const copy = COPY[locale] ?? COPY.en;

  const items = [
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

  return (
    <section className="border-border bg-background border-b" data-nosnippet>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <p className="text-muted-foreground hidden text-sm font-medium sm:block">
          {copy.label}
        </p>
        <nav
          aria-label={copy.navLabel}
          className="bg-muted/60 mx-auto flex rounded-full p-1 sm:mx-0"
        >
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                title={item.title}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex min-w-28 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span aria-hidden="true">{item.flag}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
