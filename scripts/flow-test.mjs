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

// 7. customer row click → that customer's summary
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.locator("button", { hasText: "Sai Kumar" }).first().click();
await page.waitForURL("**/customers/sai-kumar");
check("row click → /customers/sai-kumar", page.url().endsWith("/customers/sai-kumar"));

// 8. close Sai Kumar tab → back to find-customer
await page.getByRole("button", { name: "Close Sai Kumar" }).click();
await page.waitForURL("**/find-customer");
check("close customer tab → /find-customer", page.url().endsWith("/find-customer"));

// 8b. a different row opens a different person with their own data
await page.locator("button", { hasText: "Chen Wei Ling" }).first().click();
await page.waitForURL("**/customers/chen-wei-ling");
const headerName = await page.locator("p.font-segoe").first().textContent();
const balance = await page.locator("text=$215.00").first().isVisible();
const email = await page.locator("text=weiling.chen@gmail.com").first().isVisible();
check(`row click → Chen Wei Ling page (header "${headerName}")`, headerName === "Chen Wei Ling");
check("Chen's own balance ($215.00) shown", balance);
check("Chen's own email shown", email);
await page.getByRole("button", { name: "Close Chen Wei Ling" }).click();
await page.waitForURL("**/find-customer");
check("close Chen tab → /find-customer", page.url().endsWith("/find-customer"));

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

// 11. dashboard quick action → catalog (Order Flow tab)
await page.goto(base + "/", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Browse Catalog" }).click();
await page.waitForURL("**/catalog");
check("quick action → /catalog", page.url().endsWith("/catalog"));

// 12. category tab switch filters offers
await page.getByRole("button", { name: "Mobile", exact: true }).click();
const resultsText = await page.locator("text=/\\d+ Results/").first().textContent();
const cardCount = await page.locator("text=Postpaid").count();
check(`Mobile tab filters (\"${resultsText}\", ${cardCount} cards)`, resultsText === "4 Results" && cardCount === 4);
await page.getByRole("button", { name: "Top offers" }).click();
check("Top offers tab restores 8 cards", (await page.locator("text=Postpaid").count()) === 8);

// 13. close Order Flow tab → customer page
await page.getByRole("button", { name: "Close Order Flow" }).click();
await page.waitForURL("**/customers/sai-kumar");
check("close Order Flow → /customers/sai-kumar", page.url().endsWith("/customers/sai-kumar"));

// 14. find-customer Shop button → catalog
await page.goto(base + "/find-customer", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Shop", exact: true }).click();
await page.waitForURL("**/catalog");
check("Shop button → /catalog", page.url().endsWith("/catalog"));

// 15. catalog Select → offer configuration
await page.goto(base + "/catalog", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Select" }).first().click();
await page.waitForURL("**/offer");
check("catalog Select → /offer", page.url().endsWith("/offer"));

// 16. wizard: plan Continue collapses plan with summary, opens add-ons
await page.getByRole("button", { name: "24 months" }).click();
await page.getByRole("button", { name: "Continue", exact: true }).click();
check("plan summary shows chosen commitment", await page.locator("text=Commitment: 24 months").isVisible());
check("add-ons opened", await page.locator("text=Category name can be long").isVisible());

// 17. add-on select toggles to Remove, appears in summary after Continue
await page.getByRole("button", { name: "Select", exact: true }).first().click();
check("add-on Select → Remove", (await page.getByRole("button", { name: "Remove" }).count()) === 2);
await page.getByRole("button", { name: "Continue", exact: true }).click();
check("number section opened", await page.locator("text=Request a new number").isVisible());

// 18. pick a number chip
await page.getByRole("button", { name: "(777) 777 7777" }).click();
const chipClass = await page.getByRole("button", { name: "(777) 777 7777" }).getAttribute("class");
check("number chip selects", (chipClass ?? "").includes("border-2"));

// 19. offer back arrow → catalog, close tab → customer
await page.getByRole("button", { name: "Back" }).click();
await page.waitForURL("**/catalog");
check("offer back → /catalog", page.url().endsWith("/catalog"));
await page.goto(base + "/offer", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Close Order Flow" }).click();
await page.waitForURL("**/customers/sai-kumar");
check("close Order Flow (offer) → customer", page.url().endsWith("/customers/sai-kumar"));

console.log(results.join("\n"));
await browser.close();
process.exit(results.some((r) => r.startsWith("FAIL")) ? 1 : 0);
