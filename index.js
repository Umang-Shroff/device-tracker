const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.listen(`${PORT}`, (req,res)=>{
    console.log(`Server running on port ${PORT}`);
})