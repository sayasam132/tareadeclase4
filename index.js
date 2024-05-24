const express = require ('express')

const server = express();

server.use(express.static('public'));

function hello (req, res){
    res.send("hello world")
    server.get("/", hello)
}

server.get("/", hello)
server.listen(3000, ()=>{
    console.log("server running")
})