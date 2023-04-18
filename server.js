const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { cors: ["http://192.168.178.120:8080"] };
const io = require("socket.io")(httpServer, options);

// Connection established
io.on("connection", (socket) => {
  console.log(`${new Date().toLocaleString()}: Connected to id: ${socket.id}`);

  // Join room
  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(
      `${new Date().toLocaleString()}: User: ${socket.id} joined room: ${room}`
    );
  });

  // Disconnect client 1
  socket.on("disconnect", () => {
    console.log(
      `${new Date().toLocaleString()}: User: ${socket.id} disconnected`
    );
  });

  // Disconnect client 2
  socket.on("disconnect_2", (room) => {
    socket.to(room).emit("disconnect_2");
  });

  // Play vod
  socket.on("play-vod", (vodId, room) => {
    console.log(
      `${new Date().toLocaleString()}: Route to vod with id ${vodId}`
    );
    socket.to(room).emit("get-vod", vodId);
  });

  // Pause
  socket.on("pause", (room, callback) => {
    console.log(`${new Date().toLocaleString()}: Pause`);
    socket.to(room).emit("pause");
    callback();
  });

  // Play
  socket.on("play", (room, callback) => {
    console.log(`${new Date().toLocaleString()}: Play`);
    socket.to(room).emit("play");
    callback();
  });

  // Fast forward
  socket.on("fast-forward", (room) => {
    console.log(`${new Date().toLocaleString()}: Fast-forward`);
    socket.to(room).emit("fast-forward");
  });

  // Rewind
  socket.on("rewind", (room) => {
    console.log(`${new Date().toLocaleString()}: Rewind`);
    socket.to(room).emit("rewind");
  });

  // Seek
  socket.on("seek", (seconds, room) => {
    console.log(`${new Date().toLocaleString()}: Seeked to ${seconds} seconds`);
    socket.to(room).emit("seek", seconds);
  });
});

// Run server on IP-adress machine
httpServer.listen(3000, "192.168.178.120", () => {
  console.log("SERVER IS RUNNING");
});
