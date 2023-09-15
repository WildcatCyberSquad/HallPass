const express = require("express");
const { google } = require("googleapis");

const app = express();
app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1fa-1ZGBhr37gdlNaeabzcggc4nE3PKwWzyCi9Zz6s68";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });

  res.send(getRows.data);
});

app.listen(1337, (req, res) => console.log("1337"));

//
//
//
//
// const { GoogleSpreadsheet } = require("google-spreadsheet");
// const { promisify } = require("util");
// const creds = require("../credentials.json");
// async function AccessSpreadsheet() {
//   const doc = new GoogleSpreadsheet(
//     "1fa-1ZGBhr37gdlNaeabzcggc4nE3PKwWzyCi9Zz6s68",
//     {
//       apiKey: "",
//       token: "",
//     }
//   );
//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();
//   const sheet = info.worksheets[0];
//   console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
// }
// AccessSpreadsheet();
// // module.export = AccessSpreadsheet;
