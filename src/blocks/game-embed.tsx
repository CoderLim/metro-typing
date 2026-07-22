import { m } from '@/paraglide/messages.js';

const GAME_SRC = 'https://metrotyping.kr/';

export function GameEmbed() {
  return (
    <section
      id="play"
      className="relative h-[calc(100dvh-3.5rem)] w-full overflow-hidden bg-neutral-950"
      aria-label={m['landing.game.title']()}
    >
      <iframe
        src={GAME_SRC}
        title={m['landing.game.iframe_title']()}
        className="absolute inset-0 h-full w-full border-0"
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pt-16 pb-6">
        <a
          href="#about"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <span aria-hidden="true" className="animate-bounce">
            ↓
          </span>
          {m['landing.game.scroll_hint']()}
        </a>
      </div>
    </section>
  );
}
