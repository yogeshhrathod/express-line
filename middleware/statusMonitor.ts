import { Logger } from '../config/Logger';
import { Application } from 'express';
import * as expressStatusMonitor from 'express-status-monitor';

class StatusMonitor {
  public mount(_express: Application): Application {
    Logger.info("Booting the 'StatusMonitor' middleware...");

    // Define your status monitor config
    const monitorOptions: object = {
      path: '/status-monitor',
      spans: [
        {
          interval: 1, // Every second
          retention: 60, // Keep 60 data-points in memory
        },
        {
          interval: 5,
          retention: 60,
        },
        {
          interval: 15,
          retention: 60,
        },
      ],
      chartVisibility: {
        mem: true,
        rps: true,
        cpu: true,
        load: true,
        statusCodes: true,
        responseTime: true,
      },
      healthChecks: [
        {
          protocol: 'http',
          host: 'localhost',
          path: `/`,
          port: '3000',
        },
      ],
    };

    // Loads the express status monitor middleware
    _express.use(expressStatusMonitor(monitorOptions));

    return _express;
  }
}

export default new StatusMonitor();
