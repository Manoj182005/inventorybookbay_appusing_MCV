const express = require(express);

const server = express();

server.get("/",(req, res) =>{
    return res.send("Welcome to the server")
})
server.listen(3400)
