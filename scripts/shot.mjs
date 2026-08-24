/*
 * Screenshot verification loop:
 *   node scripts/shot.mjs <url> <out.png> [width] [height]
 * Renders the page in headless Chromium and saves a PNG to compare
 * against the Figma export (get_screenshot).
 */
import { chromium } from "playwright";

const [url, out, w = "1312", h = "889"] = process.argv.slice(2);
if (!url || !out) {
  console.error("usage: node scripts/shot.mjs <url> <out.png> [width] [height]");
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(w), height: Number(h) },
  deviceScaleFactor: 1,
});
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: out });
await browser.close();
console.log(`saved ${out} @ ${w}x${h}`);
