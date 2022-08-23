import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

socket.on("message", (message) => {
  console.log(message);
});

socket.on("private message", ({ message, from }) => {
  console.log(message);
  console.log(from);
});

const sendMessage = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
  socket.emit("private message", { to: username, message, from: socket.id });
};

export default function Home() {
  return (
    <>
      <form onSubmit={sendMessage}>
        Enter Username
        <br />
        <input type="text" name="username" />
        <br />
        Enter message
        <br />
        <input type="text" name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
