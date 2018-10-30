var config  = require("./../config/config");
var fs  = require("fs");
var winston  = require("winston");
var DailyRotateFile  = require("winston-daily-rotate-file");

const dir = 'logs/';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let transport = new (winston.transports.DailyRotateFile)({
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: config.ENV === 'development' ? 'debug' : 'info',
    filename: dir + '/app.log', json: true
});

let logger = winston.createLogger({
    transports: [
        transport
    ],
    exitOnError: false
});


module.exports = logger;


