const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods : ["GET", "POST"]
       
      }
});

io.on("connection", (socket) => {
  console.log("this is socket :", socket);
  console.log("a user connected");
  socket.on("chat", (payload) => {
    console.log("this is payload :", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
