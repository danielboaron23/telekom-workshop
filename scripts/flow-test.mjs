/* End-to-end navigation test for the live flow. */
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:3311";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1312, height: 889 } });
const results = [];
const check = (name, ok) => results.push(`${ok ? "PASS" : "FAIL"} ${name}`);

// 1. dashboard search → Enter → find-customer
await page.goto(base + "/", { waitUntil: "networkidle" });
await page.getByPlaceholder(/press ‘Enter’ for search/).fill("sarah");
await page.getByPlaceholder(/press ‘Enter’ for search/).press("Enter");
await page.waitForURL("**/find-customer");
check("dashboard search Enter → /find-customer", page.url().endsWith("/find-customer"));

// 2. row hover turns pink
const row = page.locator("button", { hasText: "Sai Kumar" }).first();
await row.hover();
const bg = await row.evaluate((el) => getComputedStyle(el).backgroundColor);
check(`row hover bg is pink (${bg})`, bg === "rgb(254, 242, 243)");

// 3. back arrow → dashboard
await page.getByRole("button", { name: "Back" }).click();
await page.waitForURL(base + "/");
check("back arrow → dashboard", page.url() === base + "/");

// 4. tab click: Agent Dashboard from find-customer
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Agent Dashboard" }).click();
await page.waitForURL(base + "/");
check("Agent Dashboard tab → dashboard", page.url() === base + "/");

// 5. close Find Customer tab
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Close Find Customer" }).click();
await page.waitForURL(base + "/");
check("close tab × → dashboard", page.url() === base + "/");

// 6. Home button from find-customer
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Home" }).click();
await page.waitForURL(base + "/");
check("Home button → dashboard", page.url() === base + "/");

// 7. customer row click → customer summary
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.locator("button", { hasText: "Sai Kumar" }).first().click();
await page.waitForURL("**/customers/sai-kumar");
check("row click → /customers/sai-kumar", page.url().endsWith("/customers/sai-kumar"));

// 8. close Sai Kumar tab → back to find-customer
await page.getByRole("button", { name: "Close Sai Kumar" }).click();
await page.waitForURL("**/find-customer");
check("close customer tab → /find-customer", page.url().endsWith("/find-customer"));

// 9. from customer page, Find Customer tab navigates back
await page.goto(base + "/customers/sai-kumar", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Find Customer" }).click();
await page.waitForURL("**/find-customer");
check("Find Customer tab from customer page", page.url().endsWith("/find-customer"));

// 10. from customer page, Agent Dashboard tab → home
await page.goto(base + "/customers/sai-kumar", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Agent Dashboard" }).click();
await page.waitForURL(base + "/");
check("Agent Dashboard tab from customer page", page.url() === base + "/");

console.log(results.join("\n"));
await browser.close();
process.exit(results.some((r) => r.startsWith("FAIL")) ? 1 : 0);
