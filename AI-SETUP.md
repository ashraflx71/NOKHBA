# NOKHBA AI Administration — Foundation

This work is isolated on branch `ai-admin-foundation`. It does not change the production branch or the live NOKHBA site.

## Current scope
- Private administration UI draft under `/admin/`.
- D1 schema draft for products, AI tasks, and audit logs.
- Cloudflare Worker configuration template.
- No product is automatically published; human approval remains required.

## Security requirements before deployment
1. Create a Cloudflare Access self-hosted application for the exact admin hostname/path.
2. Permit only the owner's verified email identity. Do not rely on an unlisted URL or a JavaScript password prompt.
3. Protect the Worker/API route with Cloudflare Access and validate the Access JWT in the Worker.
4. Create a NEW D1 database, inspect the schema, then apply `cloudflare/schema.sql`.
5. Configure provider credentials only as Worker secrets. Never commit API keys or place them in frontend JavaScript.
6. Deploy and test on a preview/staging hostname first. Do not route production traffic until the owner approves.

## Free-first operating policy
Use Cloudflare's currently available free allowances where eligible, with usage limits and budget alerts. Free tiers and quotas can change; verify the account's current limits before enabling scheduled jobs or AI calls.

## Important limitations
- The dashboard is a UI foundation, not a functioning AI service yet.
- Product discovery, price verification, AI writing, and scheduling require authorized data sources, backend endpoints, and provider configuration.
- Amazon/Noon/Jumia data must be obtained through permitted feeds/APIs or carefully approved sources. Do not scrape restricted pages or invent stock, ratings, discounts, or prices.
- All AI-generated product changes remain drafts until manually approved.
- This branch must not be connected to the live Cloudflare Pages production deployment until Access protection and backend verification are complete.
