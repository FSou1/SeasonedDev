const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');

puppeteer.use(
  RecaptchaPlugin({
    provider: { id: '2captcha', token: '6fef2c73a3fe89c12946df5a46508f22' }
  })
);

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  let page = await browser.newPage();

  await page.goto('https://tinyurl.com/2y4h87yd');

  const { solved, error } = await page.solveRecaptchas();
  if(solved) {
    console.log('✔️ The captcha has been solved');
  }
})();