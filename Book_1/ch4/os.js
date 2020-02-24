var os = require('os')

console.log(os.hostname()) // os hostname
console.log(os.type()) // os name
console.log(os.platform()) // platform
console.log(os.arch()) // os' arichtecture
console.log(os.release()) // os' virsion
console.log(os.uptime()) // os' uptime
console.log(os.loadavg()) // load average
console.log(os.totalmem()) // total-mem size
console.log(os.freemem()) // free-mem size
console.log(os.cpus()) // cpu
console.log(os.networkInterfaces()) // network interface