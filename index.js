require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const apiPrefix = process.env.API_PREFIX;

app.get(apiPrefix, (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
