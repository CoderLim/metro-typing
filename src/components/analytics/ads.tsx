// Google AdSense account verification meta. React 19 hoists <meta> into
// <head>, so it is visible to the AdSense crawler in View Source.
export function AdsAccountMeta({ code }: { code: string }) {
  if (!code) return null;
  return <meta name="google-adsense-account" content={code} />;
}

// Google AdSense loader. Keep this scoped to content pages where ads may be
// allowed; do not inject it sitewide or it can auto-serve on iframe/legal pages.
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
