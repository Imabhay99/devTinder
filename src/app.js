const express = require("express");
app = express();
app.use("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
