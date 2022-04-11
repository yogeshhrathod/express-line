import { Router } from 'express';

const userRouters = Router();
userRouters.get('/', (req, res) => {
  res.send(`UPTIME ->`);
});

export default userRouters;
