const Readline = require('@serialport/parser-readline')

const port = require("./port")

const portReader = (onData) => {
    
    const parser = new Readline()
    port.pipe(parser)
    
    parser.on('data', onData)
}

module.exports = portReader
