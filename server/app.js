require("dotenv").config()

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const portReader = require("./port-reader")

const getLevel = line => {
    let match = line.match(/((?<!ADC)[0-9])+/g)
    if(match && match.length){
        return parseInt(match[0])
    }
    return 0
}

portReader(line => {
    io.sockets.emit("adc", getLevel(line))
})

http.listen(12345)
