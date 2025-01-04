const express = require("express");
const cors = require("cors");
require("dotenv").config();
const socketio = require("socketio");
const http = require("http");

const server = http.createServer(app);

const io = socketio(server);

const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})