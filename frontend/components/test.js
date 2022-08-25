import { io } from "socket.io-client";
import { useState } from "react";
const socket = io("http://localhost:4000", { autoConnect: false });

function Test() {
  const [isLogged, setLog] = useState(false);
  const username = "None";

  socket.on("message", (message) => {
    console.log(message);
  });

  socket.on("private message", ({ message, from }) => {
    console.log(message);
    console.log(from);
  });

  const sendMessage = (event) => {
    event.preventDefault();
    const to = event.target.to.value;
    const message = event.target.message.value;
    socket.emit("private message", { to, message, from: username });
  };

  const login = (event) => {
    event.preventDefault();
    username = event.target.username.value;
    console.log(username);
    socket.auth = { username };
    socket.connect();
    setLog(true);
  };

  return (
    <>
      {!isLogged ? (
        <form onSubmit={login}>
          Enter Username
          <br />
          <input type="text" name="username" />
          <br />
          <button type="submit">Send</button>
        </form>
      ) : (
        <form onSubmit={sendMessage}>
          To :
          <br />
          <input type="text" name="to" />
          <br />
          Enter message
          <br />
          <input type="text" name="message" />
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
}

export default Test;
