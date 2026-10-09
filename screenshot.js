const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://sih-frontend-hazel.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
