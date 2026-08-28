import { getLocale } from '@/paraglide/runtime.js';

export const JAPAN_GAME_URL = 'https://densyatyping.com/';

const LABELS: Record<string, { section: string; iframe: string }> = {
  ko: {
    section: '일본 전철 타이핑 게임',
    iframe: '전국 역명으로 플레이하는 일본 전철 타이핑',
  },
  en: {
    section: 'Japan Train Typing game',
    iframe: 'Japan Train Typing with real station names',
  },
  zh: {
    section: '日本电车打字游戏',
    iframe: '使用日本真实车站名称的电车打字游戏',
  },
  ja: {
    section: '日本の電車でタイピング',
    iframe: '全国の実在駅名で遊ぶ電車でタイピング',
  },
};

export function JapanGameEmbed() {
  const locale = getLocale();
  const labels = LABELS[locale] ?? LABELS.en;

  return (
    <section
      id="play"
      className="relative h-[calc(100dvh-3.5rem)] min-h-[min(36rem,100dvh-3.5rem)] w-full max-w-[100vw] overflow-hidden bg-neutral-950"
      aria-label={labels.section}
    >
      <iframe
        src={JAPAN_GAME_URL}
        title={labels.iframe}
        className="absolute inset-0 h-full w-full border-0"
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
