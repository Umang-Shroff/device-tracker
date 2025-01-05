const express = require("express");
const cors = require("cors");
require("dotenv").config();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketio(server);


const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket){
    socket.on("send-location", function(data){
        io.emit("receive-location", {id: socket.id, ...data});
    })
    console.log("Socket connected")
})

app.get("/", (req, res) => {
    console.log("Rendering index.ejs");
    res.render("index");
});

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})