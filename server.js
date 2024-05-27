const app = require("express")();

const server = require("http").createServer(app);

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Origin ": "*",
}
const io = require("socket.io")(server, {
   
    cors: {
        origin: "*",
       
       
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

server.listen(5000, (req,res) => {
    res.json("listening on port")
  console.log("listening on port 5000");
});
