import { useLayoutEffect } from 'react';

import { usePathname } from '@/core/i18n/navigation';

// Legal / contact pages should load the AdSense script (verification + CMP)
// but must not request Auto ads. Mirror these paths in AdSense page exclusions.
export const AD_REQUEST_PAUSED_PATHS = [
  '/privacy-policy',
  '/terms-of-service',
  '/contact',
] as const;

export function shouldPauseAdRequests(pathname: string): boolean {
  return AD_REQUEST_PAUSED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

// Stable selector for AdSense "Excluded areas" (in-page Auto ads). Keep this
// id on the homepage game frame so the dashboard exclusion stays valid.
export const ADS_EXCLUDED_AREA_SELECTOR = '#play';

// Google AdSense account verification meta. React 19 hoists <meta> into
// <head>, so it is visible to the AdSense crawler in View Source.
export function AdsAccountMeta({ code }: { code: string }) {
  if (!code) return null;
  return <meta name="google-adsense-account" content={code} />;
}

type AdsbygoogleQueue = Array<unknown> & {
  pauseAdRequests?: number;
};

function setAdRequestPause(paused: boolean) {
  const root = window as Window & { adsbygoogle?: AdsbygoogleQueue };
  const queue = root.adsbygoogle || (root.adsbygoogle = [] as AdsbygoogleQueue);
  queue.pauseAdRequests = paused ? 1 : 0;
}

// The standard AdSense tag also deploys Google Privacy & Messaging after a
// European regulations message is published in AdSense. Keep the tag sitewide
// so consent can be collected before Google advertising or analytics features
// are used. Pause ad requests on legal/contact pages; also configure matching
// page exclusions and a `#play` excluded area in the AdSense UI.
export function AdsLoader({ code }: { code: string }) {
  const pathname = usePathname();
  const pauseAdRequests = shouldPauseAdRequests(pathname);

  useLayoutEffect(() => {
    if (!code) return;
    setAdRequestPause(pauseAdRequests);
  }, [code, pauseAdRequests]);

  if (!code) return null;

  return (
    <>
      {pauseAdRequests ? (
        <script id="adsbygoogle-pause" src="/adsense-pause-requests.js" />
      ) : null}
      <script
        id="adsbygoogle-loader"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${code}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
