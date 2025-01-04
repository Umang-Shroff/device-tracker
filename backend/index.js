const express = require("express");
const cors = require("cors");
require("dotenv").config();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

const server = http.createServer(app);

const io = socketio(server);

const app = express();
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

io.on("connetion", function(socket){
    socket.on("send-location", function(data){
        io.emit("receive-location", {id: socket.id, ...data});
    })
    console.log("Socket connected")
})

app.get("/", (req,res)=>{
    res.render("index");
})

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})