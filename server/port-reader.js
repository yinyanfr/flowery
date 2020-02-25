const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

const portReader = (onData) => {
    const port = new SerialPort(
        process.env.ARDUINO_PORT, {
            baudRate: 9600
        }
    )
    
    const parser = new Readline()
    port.pipe(parser)
    
    parser.on('data', onData)
}

module.exports = portReader
