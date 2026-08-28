import { useEffect, useRef } from 'react';

import { usePathname } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';
import type { AdsterraSlotId } from '@/components/ads/adsterra-config';
import { useAdsterraConfig } from '@/components/ads/adsterra-provider';
import { shouldPauseAdRequests } from '@/components/analytics/ads';

/** Serialize sync banner loads — official iFrame Sync reads global `atOptions`. */
let bannerLoadQueue: Promise<void> = Promise.resolve();

function injectOfficialBanner(
  container: HTMLElement,
  unit: { key: string; width: number; height: number },
  invokeHost: string
): Promise<void> {
  const atOptions = {
    key: unit.key,
    format: 'iframe',
    height: unit.height,
    width: unit.width,
    params: {},
  };

  const optionsScript = document.createElement('script');
  optionsScript.type = 'text/javascript';
  optionsScript.text = `atOptions = ${JSON.stringify(atOptions)};`;

  const invokeScript = document.createElement('script');
  invokeScript.type = 'text/javascript';
  invokeScript.src = `https://${invokeHost}/${unit.key}/invoke.js`;

  container.replaceChildren(optionsScript);

  return new Promise((resolve, reject) => {
    invokeScript.addEventListener('load', () => resolve(), { once: true });
    invokeScript.addEventListener(
      'error',
      () => reject(new Error('Adsterra invoke.js failed to load')),
      { once: true }
    );
    container.appendChild(invokeScript);
  });
}

/**
 * Banner placement — Adsterra dashboard snippet only:
 * `atOptions` + `https://{host}/{key}/invoke.js`.
 */
export function AdsterraSlot({
  slot,
  className,
}: {
  slot: AdsterraSlotId;
  className?: string;
}) {
  const config = useAdsterraConfig();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const unit = config.slots[slot];
  const paused = shouldPauseAdRequests(pathname);
  const active = config.enabled && !!unit?.key && !paused;

  useEffect(() => {
    const container = containerRef.current;
    if (!active || !unit || !container) return;

    let cancelled = false;

    const task = bannerLoadQueue.then(() => {
      if (cancelled) return;
      return injectOfficialBanner(container, unit, config.invokeHost);
    });
    bannerLoadQueue = task.catch(() => undefined);

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [active, unit, config.invokeHost, slot]);

  if (!active || !unit) return null;

  return (
    <aside
      className={cn(
        'flex w-full justify-center overflow-hidden py-4',
        className
      )}
      data-ad-network="adsterra"
      data-ad-slot={slot}
      aria-label="Advertisement"
    >
      <div
        ref={containerRef}
        className="flex max-w-full items-center justify-center [&_iframe]:max-w-full"
        style={{ width: unit.width, minHeight: unit.height }}
      />
    </aside>
  );
}
