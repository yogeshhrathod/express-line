import * as express from 'express';

import { Logger, APILogger } from './config/Logger';
import router from './src/router';

import * as expressStatusMonitor from 'express-status-monitor';
import statusMonitor from './middleware/statusMonitor';

const app = express();
const port = 3000;

app.use(APILogger);

app.use('/v1', router);

statusMonitor.mount(app);

app.get('/', (req, res) => {
  res.send(`UPTIME -> ${(Date.now() - serverStart) / 1000} seconds`);
});

const serverStart: number = Date.now();

app.listen(port, () => {
  Logger.info(`Server is running on port ${port}.✔`);
});
