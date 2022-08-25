module.exports.socketConnection = (socket) => {
  const username = socket.handshake.auth.username;
  console.log(`user ${username} connected with socket id : ${socket.id} `);
  socket.emit("message", `Working : ${socket.id}`);
  socket.on("private message", ({ to, message, from }) => {
    socket.to(to).emit("private message", { message, from });
  });
};
