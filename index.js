const express = require("express");
const app = express();
const port = 3001;

app.get("/api/v1", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
