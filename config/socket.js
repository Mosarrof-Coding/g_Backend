const { Server } = require("socket.io");
const socketSetup = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["https://mcoding889.netlify.app", "http://localhost:3000"],
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = socketSetup;
