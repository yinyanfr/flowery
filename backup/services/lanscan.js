import { NetworkInfo } from 'react-native-network-info'
import SubnetmaskModule from 'get-subnet-mask'
import net from 'react-native-tcp'
const sip = require('shift8-ip-func')
const ipaddr = require('ipaddr.js')

const network_promise = new Promise((resolve, reject) => {
    NetworkInfo.getIPAddress().then(ip => {
        const local_ip = ip
        NetworkInfo.getBroadcast().then(address => {
            const local_broadcast = address
            SubnetmaskModule.getSubnet((sb) => {
                const local_netmask = sb
                const subconv = ipaddr.IPv4.parse(local_netmask).prefixLengthFromSubnetMask()
                const firstHost = ipaddr.IPv4.networkAddressFromCIDR(local_ip + "/" + subconv)
                const lastHost = ipaddr.IPv4.broadcastAddressFromCIDR(local_ip + "/" + subconv)
                const firstHostHex = sip.convertIPtoHex(firstHost)
                const lastHostHex = sip.convertIPtoHex(lastHost)
                const ipRange = sip.getIPRange(firstHostHex, lastHostHex)
                
                resolve({
                    local_ip: local_ip,
                    local_broadcast: local_broadcast,
                    local_netmask: local_netmask,
                    subnet_conv: subconv,
                    first_host: firstHost,
                    last_host: lastHost,
                    first_host_hex: firstHostHex,
                    last_host_hex: lastHostHex,
                    ip_range: ipRange
                })
            })
        })
    })
})

// Function to scan hosts
const scanHost = (hostIP, hostPort) => {
    return new Promise((resolve, reject) => {
        const client = net.createConnection({
            host: hostIP,
            port: hostPort
        })

        client.setTimeout(2000)

        client.on('connect', function () {
            var scan_result = {
                ip: hostIP,
                port: hostPort
            }
            console.log(scan_result)
            resolve(scan_result)
        })

        client.on('timeout', function () {
            client.destroy()
        })
    })
}

const lanscan = (portRange) => {
    return network_promise.then((response) => {
        const scanResult = []
        for (let i = 0; i < response["ip_range"].length; i++) {
            for (let j = 0; j < portRange.length; j++) {
                scanResult.push(scanHost(response["ip_range"][i], portRange[j]))
            }
        }
        return Promise.all(scanResult)
    })
}

export default lanscan
