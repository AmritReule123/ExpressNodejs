const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express is working 🎉");
});

app.listen(3000, () => console.log("i ama runnign a code in  3000"));

  