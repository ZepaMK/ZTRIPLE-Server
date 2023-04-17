const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { cors: ["http://10.52.1.87:8080"] };
const io = require("socket.io")(httpServer, options);

// Connection established
io.on("connection", (socket) => {
  console.log(`${new Date().toLocaleString()}: Connected to id: ${socket.id}`);

  // Play vod
  socket.on("play-vod", (vodId) => {
    console.log(
      `${new Date().toLocaleString()}: Route to vod with id ${vodId}`
    );
    socket.broadcast.emit("get-vod", vodId);
  });

  // Pause
  socket.on("pause", (callback) => {
    console.log(`${new Date().toLocaleString()}: Pause`);
    socket.broadcast.emit("pause");
    callback();
  });

  // Play
  socket.on("play", (callback) => {
    console.log(`${new Date().toLocaleString()}: Play`);
    socket.broadcast.emit("play");
    callback();
  });

  // Fast forward
  socket.on("fast-forward", () => {
    console.log(`${new Date().toLocaleString()}: Fast-forward`);
    socket.broadcast.emit("fast-forward");
  });

  // Rewind
  socket.on("rewind", () => {
    console.log(`${new Date().toLocaleString()}: Rewind`);
    socket.broadcast.emit("rewind");
  });

  // Seek
  socket.on("seek", (seconds) => {
    console.log(`${new Date().toLocaleString()}: Seeked to ${seconds} seconds`);
    socket.broadcast.emit("seek", seconds);
  });
});

// Run server on IP-adress machine
httpServer.listen(3000, "10.52.1.87", () => {
  console.log("SERVER IS RUNNING");
});
