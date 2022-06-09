const browser = require('./browser');
const parser = require('ebay-parser')

const fetchItems = async (url) => {
  const html = await browser.getHtml(url);
  if (!html) {
    console.warn('HTML is undefined or empty');
    return [];
  }

  const items = parser.parse_items(html);

  return items;
}

module.exports = {
  fetchItems
};