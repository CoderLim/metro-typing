import { Link } from '@/core/i18n/navigation';
import { getLocale } from '@/paraglide/runtime.js';

const COPY: Record<
  string,
  {
    title: string;
    description: string;
    koreaName: string;
    koreaDescription: string;
    koreaCta: string;
    koreaTitle: string;
    japanName: string;
    japanDescription: string;
    japanCta: string;
    japanTitle: string;
  }
> = {
  ko: {
    title: '지원 국가별 Metro Typing',
    description:
      '현재 한국과 일본의 실제 역명을 이용한 타이핑 게임을 지원합니다. 연습하고 싶은 국가를 선택하세요.',
    koreaName: '한국 Metro Typing',
    koreaDescription:
      '한국 지하철과 도시철도 노선을 따라 한글 또는 영문 역명을 입력합니다.',
    koreaCta: '한국판 플레이',
    koreaTitle: '한국 Metro Typing 플레이 페이지로 이동',
    japanName: '일본 전철 타이핑',
    japanDescription:
      '일본 전국 602개 노선과 8,783개 역을 로마자 또는 가나로 입력합니다.',
    japanCta: '일본판 플레이',
    japanTitle: '일본 전철 타이핑 플레이 페이지로 이동',
  },
  en: {
    title: 'Metro Typing by Country',
    description:
      'Choose from the countries currently supported and practice with real station names, routes, and local input systems.',
    koreaName: 'Korea Metro Typing',
    koreaDescription:
      'Type Korean or English station names across Korean subway and urban rail routes.',
    koreaCta: 'Play Korea version',
    koreaTitle: 'Open the Korea Metro Typing page',
    japanName: 'Japan Train Typing',
    japanDescription:
      'Type in romaji or kana across 602 railway lines and 8,783 real Japanese stations.',
    japanCta: 'Play Japan version',
    japanTitle: 'Open the Japan Train Typing page',
  },
  zh: {
    title: '按国家选择 Metro Typing',
    description:
      '目前支持韩国和日本版本。选择国家后，可使用当地真实线路、车站名称和对应输入方式练习打字。',
    koreaName: '韩国 Metro Typing',
    koreaDescription:
      '沿韩国地铁与城市轨道线路，输入韩文或英文车站名称。',
    koreaCta: '玩韩国版',
    koreaTitle: '打开韩国 Metro Typing 页面',
    japanName: '日本电车打字',
    japanDescription:
      '使用罗马字或假名，挑战日本602条线路和8,783个真实车站。',
    japanCta: '玩日本版',
    japanTitle: '打开日本电车打字页面',
  },
  ja: {
    title: '国別のMetro Typing',
    description:
      '現在は韓国版と日本版に対応しています。実在する路線・駅名と各言語の入力方式で練習できます。',
    koreaName: '韓国 Metro Typing',
    koreaDescription:
      '韓国の地下鉄・都市鉄道路線で、ハングルまたは英語の駅名を入力します。',
    koreaCta: '韓国版をプレイ',
    koreaTitle: '韓国Metro Typingのページを開く',
    japanName: '日本の電車でタイピング',
    japanDescription:
      '全国602路線・8,783駅を、ローマ字入力またはかな入力で進みます。',
    japanCta: '日本版をプレイ',
    japanTitle: '日本の電車でタイピングページを開く',
  },
};

export function SupportedCountries() {
  const locale = getLocale();
  const copy = COPY[locale] ?? COPY.en;
  const countries = [
    {
      href: '/',
      flag: '🇰🇷',
      name: copy.koreaName,
      description: copy.koreaDescription,
      cta: copy.koreaCta,
      title: copy.koreaTitle,
    },
    {
      href: '/japan-metro-typing',
      flag: '🇯🇵',
      name: copy.japanName,
      description: copy.japanDescription,
      cta: copy.japanCta,
      title: copy.japanTitle,
    },
  ];

  return (
    <section
      id="countries"
      className="border-border bg-muted/15 border-t px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="supported-countries-title"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2
            id="supported-countries-title"
            className="font-serif text-2xl tracking-tight sm:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-7 sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {countries.map((country) => (
            <article
              key={country.href}
              className="border-border bg-background rounded-2xl border p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {country.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-7">
                    {country.description}
                  </p>
                </div>
              </div>
              <Link
                href={country.href}
                title={country.title}
                className="text-primary mt-6 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
              >
                {country.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
