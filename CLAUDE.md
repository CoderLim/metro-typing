@AGENTS.md

## Cloudflare Deploy (user directive 2026-08-18)

- "部署 cf" means: run `pnpm run cf:deploy` **immediately, without asking for confirmation**. The user has pre-authorized production deploys for this project.
- Worker `metro-typing` → custom domain `https://metrotyping.org`. No D1/database binding - static SEO landing + game embed.
- Skip the deploy-cloudflare skill's Phase 6 confirmation; all other preflight (build sanity check) still applies. If the build fails, stop and report.
