const express = require("express");
const User = require("./models/User");
const connectDB = require("./config/database");

const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Abhay",
    lastName: "Mishra",
    emailId: "abhay@gmail.com",
    password: "123456",
    age: 22,
    gender: "Male",
  });
  await user.save();
  console.log("User saved:", user);
  res.status(201).json({ message: "User created successfully" });
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
