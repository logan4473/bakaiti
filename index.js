const express = require("express");

require("dotenv").config();

const app = express();
const port = 4000;

app.use("/", require("./routers"));

app.listen(process.env.PORT || port, () => {
  console.log(`App is running on port ${process.env.PORT || port}`);
});
