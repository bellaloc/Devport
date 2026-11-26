const { chromium } = require("playwright");
const assert = require("node:assert/strict");

const sizes = [
  [320, 568, true], [375, 667, true], [390, 844, true],
  [768, 1024, true], [844, 390, true], [1024, 768, false],
  [1440, 900, false],
];

async function check() {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [width, height, touch] of sizes) {
      const context = await browser.newContext({
        viewport: { width, height }, hasTouch: touch,
        isMobile: touch, deviceScaleFactor: 1, reducedMotion: "reduce",
      });
      try {
        const page = await context.newPage();
        await page.goto(process.env.PORTFOLIO_URL || "http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
        const portraits = page.locator('img[alt="Christa Lococo"]');
        assert.equal(await portraits.count(), 2, "Both original portrait elements must exist");
        for (const portrait of await portraits.all()) {
          await portrait.scrollIntoViewIfNeeded();
          await portrait.evaluate(img => img.decode());
          assert(await portrait.evaluate(img => img.naturalWidth > 0), "Portrait failed to load");
        }
        await page.locator("#portfolio").scrollIntoViewIfNeeded();
        await page.getByRole("button", { name: /View details for/ }).first().click();
        const dialog = page.getByRole("dialog");
        await dialog.waitFor({ state: "visible" });
        assert(await dialog.evaluate(el => !el.inert && el.getAttribute("aria-modal") === "true"), "Project dialog should be active");
        await page.getByRole("button", { name: "Close project details" }).click();
        await page.waitForFunction(() => document.querySelector('[role="dialog"]')?.inert === true);
        const dimensions = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
        assert(dimensions.content <= dimensions.viewport + 2, "Unexpected horizontal document overflow");
        console.log("PASS " + width + "x" + height + (touch ? " touch" : " desktop"));
      } finally { await context.close(); }
    }
  } finally { await browser.close(); }
}
check().catch(error => { console.error(error); process.exitCode = 1; });
