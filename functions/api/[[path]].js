import worker from "../../cloudflare/worker.js";

// Cloudflare Pages Functions adapter: forwards /api/* requests to the shared
// NOKHBA Worker handler while keeping all static site assets outside Functions.
export async function onRequest(context) {
  return worker.fetch(context.request, context.env);
}
