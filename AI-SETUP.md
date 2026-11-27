# NOKHBA AI Administration — Foundation

This work is isolated on branch `ai-admin-foundation`. It does not change the production branch or the live NOKHBA site.

## Current scope
- Private administration UI draft under `/admin/`.
- D1 schema for products, AI tasks, and audit logs.
- Pages Functions adapter at `functions/api/[[path]].js` forwards `/api/*` to `cloudflare/worker.js`.
- `_routes.json` limits Function invocations to `/api/*`, leaving static assets outside Functions.
- Cloudflare Worker configuration template.
- No product is automatically published; human approval remains required.

## Implemented backend scope
- `GET /api/health`, `GET /api/products`, and `GET /api/tasks` require a valid Cloudflare Access JWT.
- `POST /api/ai/draft` uses the Pages Workers AI binding `AI` to create an Arabic product-description draft from facts supplied by the administrator. It records the task and audit event in D1.
- AI output remains a draft. No endpoint publishes a product to the live catalogue.
- The model selected in code is `@cf/meta/llama-3.1-8b-instruct`.

## Required Cloudflare setup before testing
1. Create a Cloudflare Access self-hosted application protecting the admin hostname paths `/admin*` and `/api/*`. Permit only the owner's verified email identity.
2. For the **Preview environment only**, add Variables: `ACCESS_TEAM_DOMAIN` (for example `https://your-team.cloudflareaccess.com`), `ACCESS_AUD` (the Access application's AUD tag), and `ADMIN_EMAIL` (the exact verified email address allowed to administer NOKHBA). The Worker independently checks the signed Access JWT email against `ADMIN_EMAIL`; the Access application policy must also allow only this owner identity. Protect the preview hostname with Access before testing.
3. Create a NEW, separate D1 database for testing. Apply `cloudflare/schema.sql` to that new database only, then bind it to the Pages project's **Preview environment** with variable name `DB`. Do not bind a database to Production yet.
4. Confirm the Workers AI binding named `AI` exists in the **Preview environment**. Redeploy the preview after changing bindings. AI model calls may incur usage charges; test sparingly.
5. Test on the branch's preview URL first. Do not change Production bindings, connect production traffic, or merge to `main` until Access, D1, and AI are verified and the owner approves.
6. Never commit API keys or put secrets in browser JavaScript. The current Workers AI binding does not require a manually pasted API key.

## Free-first operating policy
Use Cloudflare's currently available free allowances where eligible, with usage limits and budget alerts. Free tiers and quotas can change; verify the account's current limits before enabling scheduled jobs or AI calls.

## Important limitations
- The dashboard is a UI foundation, not a functioning AI service yet.
- Product discovery, price verification, AI writing, and scheduling require authorized data sources, backend endpoints, and provider configuration.
- Amazon/Noon/Jumia data must be obtained through permitted feeds/APIs or carefully approved sources. Do not scrape restricted pages or invent stock, ratings, discounts, or prices.
- All AI-generated product changes remain drafts until manually approved.
- This branch must not be connected to the live Cloudflare Pages production deployment until Access protection and backend verification are complete.
