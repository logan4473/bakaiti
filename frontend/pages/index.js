import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

socket.on("message", (message) => {
  console.log(message);
});

export default function Home() {
  return <h1>Frontend</h1>;
}
