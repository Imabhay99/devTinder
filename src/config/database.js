const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://abhaymishra9945_db_user:X6iCtUICMnHZwhYr@cluster0.6ihmmtz.mongodb.net/DevTinder?retryWrites=true&w=majority&appName=Cluster0",
  );
};

connectDB()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
