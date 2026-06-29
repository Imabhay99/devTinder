const express = require("express");
const { adminAuth } = require("./middlewares/auth");
app = express();
app.get("/User", adminAuth, (req, res) => {
  res.send({
    firstName: "Abhay",
    lastName: "Mishra",
    age: 22,
    city: "Bangalore",
  });
});
app.use("/hello", adminAuth, (req, res) => {
  res.send("Hello World hoo! This is my first nodejs project");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
