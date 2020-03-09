require("dotenv").config()

const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const write = require("./port-write")

app.post("/control", async (req, res) => {
    const {msg} = req.body
    await write(msg[0])
    res.send("ok")
})


app.listen(12345)
