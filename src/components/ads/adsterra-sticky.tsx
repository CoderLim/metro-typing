import { useEffect } from 'react';

import { usePathname } from '@/core/i18n/navigation';
import { shouldShowAdsterraSticky } from '@/components/ads/adsterra-config';
import { useAdsterraConfig } from '@/components/ads/adsterra-provider';

const SCRIPT_ATTR = 'data-adsterra-sticky';

/**
 * Bottom sticky / social-bar style unit. Only mounts on allowlisted content
 * paths (blog, guides, MDX) — never on game pages. Controlled by the same
 * `adsterra_enabled` kill switch as banner slots.
 */
export function AdsterraSticky() {
  const config = useAdsterraConfig();
  const pathname = usePathname();
  const src = config.stickyScriptSrc;
  const active = config.enabled && !!src && shouldShowAdsterraSticky(pathname);

  useEffect(() => {
    if (!active) {
      document.querySelectorAll(`script[${SCRIPT_ATTR}]`).forEach((node) => {
        node.remove();
      });
      return;
    }

    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = src.startsWith('//') ? `https:${src}` : src;
    script.setAttribute(SCRIPT_ATTR, '1');
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [active, src]);

  return null;
}
