// Google AdSense account verification meta. React 19 hoists <meta> into
// <head>, so it is visible to the AdSense crawler in View Source.
export function AdsAccountMeta({ code }: { code: string }) {
  if (!code) return null;
  return <meta name="google-adsense-account" content={code} />;
}

// The standard AdSense tag also deploys Google Privacy & Messaging after a
// European regulations message is published in AdSense. Keep the tag sitewide
// so consent can be collected before Google advertising or analytics features
// are used. Control actual ad placement with ad units and AdSense page
// exclusions; do not place ad units inside legal pages or the embedded game UI.
export function AdsLoader({ code }: { code: string }) {
  if (!code) return null;
  return (
    <script
      id="adsbygoogle-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${code}`}
      crossOrigin="anonymous"
    />
  );
}
