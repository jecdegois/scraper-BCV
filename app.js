const express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app2 = express();
app2.use(express.json());

async function app() {
  try {
    const resp = await axios.get("https://www.bcv.org.ve/", {
      httpsAgent: agent,
    });


    const $ = cheerio.load(resp.data);
    const dolarValue = $("#dolar strong").text().trim();


    app2.get('/', (req,res) => {
      res.json({
        dolarValue
      })
    })

    app2.listen(8080, () => {
      console.log(`servidor corriendo en el puerto ${8080}`);
    });


    console.log({ dolarValue });
  } catch (error) {
    console.log(error);
  }
}

app();
