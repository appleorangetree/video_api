require("dotenv").config();


const express  = require("express");
const morgan   = require("morgan");
const cors     = require("cors");
const helmet   = require("helmet");

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());



server.patch("/", (req,res) => {
    res.status(200).send("<h1>it works!</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(3000, function(){
    console.log('Server ecoute a la address : http://localhost:3000');
});