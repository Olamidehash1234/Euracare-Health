// (run: node scripts/check-seo.js) — optional script you can create locally
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const title = await page.title();
  const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
  const keywords = await page.$eval('meta[name="keywords"]', el => el.getAttribute('content'));
  console.log({ title, description, keywords });
  await browser.close();
})();
