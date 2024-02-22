var mongoose = require("mongoose");
const initCounter = require("./initCountData");
function mongooseConnection() {
  mongoose
    .connect(process.env.MONGO_ATLS_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () =>{
     console.log("Connected to DB!");
     initCounter();
    });
}
module.exports = mongooseConnection;
