const scan = (address, port) => new Promise((resolve, reject) => {
    console.log(`${address}:${port}`)
    fetch(`${address}:${port}`)
        .then(response => {
            if(response === 200){
                resolve(address)
            }
        })
        .catch(err => {
            resolve(null)
        })
})

const list0 = []
const list1 = []

for(let i = 0; i < 256; i++){
    list0[i] = "192.168.0."+i
    list1[i] = "192.168.1."+i
}

const iplist = [
    ...list0,
    ...list1
]

const lanscan = (port) => {
    return Promise.all(iplist.map(e => (
        scan(e, port)
    )))
}

export default lanscan
