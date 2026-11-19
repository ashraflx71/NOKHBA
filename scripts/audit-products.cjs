#!/usr/bin/env node
"use strict";

/*
 * NOKHBA daily product data audit.
 * This does not scrape stores or change prices. It checks the published
 * product records for fields and direct-store URL formats before review.
 */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const window = {};
const sandbox = {
  window,
  console: { log() {}, warn() {}, error() {} },
  URL,
  Intl,
  Number,
  String,
  Array,
  Object,
  Set,
  Map
};

for (const file of ["products.js", "products-multi.js"]) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    console.error("MISSING FILE:", file);
    process.exit(1);
  }
  vm.runInNewContext(fs.readFileSync(fullPath, "utf8"), sandbox, {
    filename: file,
    timeout: 5000
  });
}

const sources = [
  window.AMAZON_PRODUCTS,
  window.NOKHBA_PRODUCTS,
  window.NOKHBA_EXTRA_PRODUCTS
].filter(Array.isArray);

const seenArrays = new Set();
const products = [];
for (const source of sources) {
  if (seenArrays.has(source)) continue;
  seenArrays.add(source);
  products.push(...source.filter(p => p && typeof p === "object"));
}

const approved = products.filter(p =>
  ["approved", "verified", "active", "published", "ready"].includes(
    String(p.status || "").trim().toLowerCase()
  )
);

const hostAllowed = (value, store) => {
  if (typeof value !== "string" || !value.trim()) return false;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password) return false;
    const host = url.hostname.toLowerCase();
    if (store === "amazon") {
      return host === "amazon.eg" || host.endsWith(".amazon.eg") ||
        host === "amzn.to" || host === "amzn.eu";
    }
    if (store === "noon") return host === "noon.com" || host.endsWith(".noon.com");
    if (store === "jumia") return host === "jumia.com.eg" || host.endsWith(".jumia.com.eg");
    return false;
  } catch {
    return false;
  }
};

const issues = [];
let missingPrice = 0;
let validImages = 0;
let validLinks = 0;

for (const p of approved) {
  const label = String(p.name || p.id || "(unnamed product)");
  if (!String(p.name || "").trim()) issues.push(label + ": missing product name");

  const image = p.image || p.imageUrl || p.img || p.thumbnail;
  if (typeof image === "string" && /^https:\/\//i.test(image)) {
    validImages++;
  } else {
    issues.push(label + ": missing or non-HTTPS image URL");
  }

  const candidates = [
    ["amazon", p.amazonUrl], ["amazon", p.amazonLink], ["amazon", p.amazonURL],
    ["noon", p.noonUrl], ["noon", p.noonLink], ["noon", p.noonURL],
    ["jumia", p.jumiaUrl], ["jumia", p.jumiaLink], ["jumia", p.jumiaURL]
  ];
  if (p.url && p.store) candidates.push([String(p.store).toLowerCase(), p.url]);

  const hasValidLink = candidates.some(([store, url]) => hostAllowed(url, store));
  if (hasValidLink) validLinks++;
  else issues.push(label + ": no valid direct link for a supported store");

  if (p.price === null || p.price === undefined || p.price === "") {
    missingPrice++;
  } else if (!Number.isFinite(Number(String(p.price).replace(/,/g, ""))) ||
             Number(String(p.price).replace(/,/g, "")) <= 0) {
    issues.push(label + ": invalid price value");
  }
}

console.log("NOKHBA DAILY AUDIT");
console.log("Total records:", products.length);
console.log("Approved records:", approved.length);
console.log("Records with HTTPS image URLs:", validImages);
console.log("Records with valid direct store links:", validLinks);
console.log("Records without a listed price:", missingPrice);
console.log("Data issues:", issues.length);
for (const issue of issues) console.log("- " + issue);

if (approved.length === 0) {
  console.error("Audit failed: no approved products were loaded.");
  process.exit(1);
}
if (issues.length > 0) {
  console.error("Audit completed with issues; review the report above.");
  process.exit(1);
}
console.log("Audit passed. No product records were changed.");
