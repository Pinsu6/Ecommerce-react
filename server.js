const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
//database config
connectDB();
//middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoute);

//rest api

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
