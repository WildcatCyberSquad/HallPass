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

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:C",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["Mr Jones", "2:04", "2:10"]],
    },
  });

  res.send(getRows.data);
});

app.listen(5050, (req, res) => console.log("5050"));
