const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function app() {
  try {
    const resp = await axios.get("https://www.bcv.org.ve/", {
      httpsAgent: agent,
    });


    const $ = cheerio.load(resp.data);
    const dolarValue = $("#dolar strong").text().trim();
    console.log({ dolarValue });
  } catch (error) {
    console.log(error);
  }
}

app();
