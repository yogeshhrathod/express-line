import * as express from "express";
import * as logging from "./config/logger"
import * as winston from "winston";
import * as expressWinston from "express-winston"

const app = express();
const port = 3000
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
    //   winston.format.colorize(),
      winston.format.json()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
  }));
  app.get('/', (req, res) => {
      res.send("Hello World!");
  });
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
