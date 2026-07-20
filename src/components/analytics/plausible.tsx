// Plausible-compatible tracker (Plausible cloud/self-hosted, PageView, etc.).
// Rendered as a native <script> so the tag lands in the SSR HTML directly
// and is visible in View Source / to crawlers.
export function Plausible({
  domain,
  src = 'https://plausible.io/js/script.js',
}: {
  domain?: string;
  src?: string;
}) {
  // Classic snippet: <script defer data-domain="…" src="…/script.js">
  if (!domain || !src) return null;
  return <script defer data-domain={domain} src={src} />;
}
