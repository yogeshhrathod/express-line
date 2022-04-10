import * as express from 'express';

import router from './router';
import { Logger, APILogger } from './config/Logger';

const app = express();
const port = 3000;

app.use(APILogger);

app.use('/v1', router);

app.get('/', (req, res) => {
  res.send(`UPTIME -> ${(Date.now() - serverStart) / 1000} seconds`);
});

const serverStart: number = Date.now();

app.listen(port, () => {
  Logger.info(`Server is running on port ${port}.✔`);
});
