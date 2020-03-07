require("dotenv").config()

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const write = require("./port-write")

io.on("connection", socket => {
    socket.on("control", msg => {
        write(msg[0])
    })
})

app.get("/", (req, res) => {
    res.send("hello")
})

http.listen(12345)
