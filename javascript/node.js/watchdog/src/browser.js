const puppeteer = require('puppeteer-extra');

const getHtml = async (url, waitForCallback) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--start-maximized',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080});

  try {
    await page.goto(url);

    const html = await page.evaluate(() => document.documentElement.outerHTML);

    if(waitForCallback) {
      await waitForCallback(page);
    }

    return html;
  }
  catch (err) {
    console.log('An error occurred while getting HTML', err);
  }
  finally {
    await page.browser().close();
  }
}

module.exports = {
  getHtml
};