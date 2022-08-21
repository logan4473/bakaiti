module.exports.connection = (socket) => {
  console.log("user connected", socket.id);
  socket.emit("message", `Working : ${socket.id}`);
};
