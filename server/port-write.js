const port = require("./port")

const write = (msg) => new Promise((resolve, reject) => {
    port.write(msg, err => {
        if(err){
            reject(err)
        }
        else{
            resolve()
        }
    })
})

module.exports = write
