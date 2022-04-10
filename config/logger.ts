import * as winston from "winston";
import * as expressWinston from "express-winston"

export default expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) { return false; }
})