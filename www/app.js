const { app } = require("../server");
const config = require("../config");
const mongoose = require("mongoose");

//conection a mongoDB:
mongoose.connect(config.mongoUri);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.on("open", () => {
  console.log("Database connected");
});

app.listen(config.port, () => {
  console.log("app running");
});
