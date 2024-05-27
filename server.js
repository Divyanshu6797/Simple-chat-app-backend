const app = require("express")();

const server = require("http").createServer(app);

const cors = require('cors');
const corsOptions ={
  origin: 'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


const io = require("socket.io")(server, {
   
    cors: {
      origin: ['http://localhost:3000', 'https://simple-chat-app-frontend-neon.vercel.app/'],
      allowedHeaders: ["Access-Control-Allow-Origin"],
      credentials: true
       
       
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
