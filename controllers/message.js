module.exports.socketConnection = (socket) => {
  console.log("user connected", socket.id);
  socket.emit("message", `Working : ${socket.id}`);
  socket.on("private message", ({ to, message, from }) => {
    socket.to(to).emit("private message", { message, from });
  });
};
