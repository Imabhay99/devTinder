const express = require("express");
app = express();
app.get("/User", (req, res) => {
  res.send({
    firstName: "Abhay",
    lastName: "Mishra",
    age: 22,
    city: "Bangalore",
  });
});
app.use("/hello", (req, res) => {
  res.send("Hello World hoo! This is my first nodejs project");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
