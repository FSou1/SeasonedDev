const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  let page = await browser.newPage();

  await page.goto('https://tinyurl.com/2y4h87yd');
})();