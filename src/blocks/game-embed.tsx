import { m } from '@/paraglide/messages.js';

const GAME_SRC = 'https://metrotyping.kr/';

/**
 * Crops the embedded site's own chrome (title bar with donate/login/settings
 * + donation banner). Measured ~120px desktop / ~100px mobile — use the
 * larger value so both are fully covered.
 */
const IFRAME_TOP_CROP = '7.5rem'; // 120px

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
        className="absolute left-0 w-full border-0"
        style={{
          top: `calc(-1 * ${IFRAME_TOP_CROP})`,
          height: `calc(100% + ${IFRAME_TOP_CROP})`,
        }}
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
