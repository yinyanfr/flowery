const SerialPort = require('serialport')

const port = new SerialPort(
    process.env.ARDUINO_PORT, {
        baudRate: 9600
    }
)

module.exports = port
