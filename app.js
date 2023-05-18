const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto("https://www.bcv.org.ve/", {
    waitUntil: "domcontentloaded",
  });

  const dolarValue = await page.$eval("#dolar", (el) => el.innerText);

  console.log(`El valor del dólar es: ${dolarValue}`);

  await browser.close();
})();
