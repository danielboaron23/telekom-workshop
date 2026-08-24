/* Smoke-test every Storybook story: renders without an error overlay. */
import { chromium } from "playwright";

const index = await (await fetch("http://localhost:6006/index.json")).json();
const ids = Object.values(index.entries).filter((e) => e.type === "story").map((e) => e.id);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1340, height: 900 } });
let failed = 0;
for (const id of ids) {
  await p.goto(`http://localhost:6006/iframe.html?id=${id}&viewMode=story`, { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(700);
  const ok = await p.evaluate(() => {
    const root = document.getElementById("storybook-root");
    const err = document.querySelector(".sb-show-errordisplay") !== null;
    return !err && !!root && root.childElementCount > 0;
  });
  if (!ok) { failed++; console.log("FAIL", id); }
}
console.log(`${ids.length - failed}/${ids.length} stories render OK`);
await b.close();
process.exit(failed ? 1 : 0);
