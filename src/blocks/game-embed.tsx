import { tDynamic } from '@/core/i18n/dynamic';
import { NATIONS, type NationCode } from '@/config/nations';
import { m } from '@/paraglide/messages.js';

type GameEmbedProps = {
  nation: NationCode;
};

export function GameEmbed({ nation }: GameEmbedProps) {
  const config = NATIONS[nation];

  return (
    <section
      id="play"
      className="relative h-[calc(100dvh-3.5rem)] w-full overflow-hidden bg-neutral-950"
      aria-label={m['landing.game.title']()}
    >
      <iframe
        key={nation}
        src={config.src}
        title={tDynamic(`landing.game.iframe_title_${nation}`)}
        className="absolute inset-0 h-full w-full border-0"
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
