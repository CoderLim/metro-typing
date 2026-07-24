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
    </section>
  );
}
