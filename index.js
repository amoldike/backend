require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const conn = require("./db");

// -----------------------db connection--------------------------

conn.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDB Connected");
  }
});

// --------------------------------------------------------------
app.use("/users", require("./routes/users"));
// --------------------------------------------------------------

app.listen(PORT, () => {
  console.log("Server is Started on port : " + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});
