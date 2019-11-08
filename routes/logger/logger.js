let fs = require('fs');
const requestLog = "./logs/requests.log";
const orderLog = "./logs/orders.log";

function logRequest(route, time, status) {
    fs.appendFile(`${requestLog}`, `${route},${time},${status}\n`, (err) => {
        if(err) {
            throw err;
        }
    });
}

function logOrder(item, quantity) {
    fs.appendFile(`${orderLog}`, `${item},${quantity}\n`, (err) => {
        if(err) {
            throw err;
        }
    });
}

function printLog(callback) {
    fs.readFile(`${requestLog}`, (err, data) => {
        if(err) {
            throw err;
        }

        callback(data.toString());
    });
}

module.exports = { logRequest, logOrder, printLog };
