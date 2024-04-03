const mongoose = require("mongoose");

// Set SSL options based on your requirements
const sslOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: false // Disable SSL
};

mongoose.connect(process.env.MONGO_URL, sslOptions);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
