const express = require("express");
const mongoose = require("mongoose");

require("./config/database");

const app = express();
// const dns = require("dns");

// dns.setServers(["1.1.1.1", "8.8.8.8"]);

// app.use(express.json());
// async function startServer() {
//   try {
//     console.log("Connecting to MongoDB...");

//     await mongoose.connect(
//       "mongodb+srv://abhaymishra9945_db_user:X6iCtUICMnHZwhYr@cluster0.6ihmmtz.mongodb.net/DevTinder?retryWrites=true&w=majority&appName=Cluster0",
//     );

//     console.log("✅ MongoDB Connected");

//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//   }
// }

// startServer();
// // JLa5faPL1fipZrYc    mongodb+srv://abhaymishra9945_db_user:JLa5faPL1fipZrYc@cluster0.6ihmmtz.mongodb.net/?appName=Cluster0
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
