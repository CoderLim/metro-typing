import { m } from '@/paraglide/messages.js';

const GAME_SRC = 'https://metrotyping.kr/';

/**
 * Crops the embedded site's own chrome (title bar, donate banner, promo bar).
 * clip-path in globals.css keeps the shifted iframe from painting under our header.
 */
export function GameEmbed() {
  return (
    <section
      id="play"
      className="relative isolate z-0 h-[calc(100dvh-3.5rem)] min-h-[min(36rem,100dvh-3.5rem)] w-full max-w-[100vw] overflow-hidden bg-neutral-950 [contain:paint]"
      aria-label={m['landing.game.title']()}
    >
      <iframe
        src={GAME_SRC}
        title={m['landing.game.iframe_title']()}
        className="game-embed-frame absolute left-0 w-full border-0"
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
