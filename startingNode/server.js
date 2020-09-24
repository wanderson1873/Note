const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// Tamplate engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

// root main
server.get("/", function(req, res) {
    return res.send("Hello, word!")
})

server.listen(5000, function() {
    console.log("server is running!")
})
