const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

require("dotenv").config();
require("./config/mongodb");

const app = express();
const port = 4000;
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());
app.use("/", require("./routers"));
io.on("connection", require("./routers/message").connection);

server.listen(process.env.PORT || port, () => {
  console.log(`App is running on port ${process.env.PORT || port}`);
});
