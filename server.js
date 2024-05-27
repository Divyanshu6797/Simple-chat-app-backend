const app = require("express")();

const server = require("http").createServer(app);

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


const io = require("socket.io")(server, {
   
    cors: {
        origin: "*",
        credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
       
       
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
    
  console.log("listening on port 5000");
});
