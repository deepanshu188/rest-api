const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000;
const {
  getMessage,
  setMessage,
  getJson,
} = require("../controllers/messageControler.js");

app.get("/", (req, res) => {
  getMessage(req, res);
});

app.get("/api/json", jsonParser, (req, res) => {
  getJson(req, res);
});

app.post("/api/adduser", jsonParser, (req, res) => {
  setMessage(req, res);
});

app.listen(port, () => console.log(`server is running on port ${port}...`));
