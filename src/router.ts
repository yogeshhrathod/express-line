import * as express from 'express';
import userRouters from './users/controller';

const router = express.Router();

router.use('/user', userRouters);
router.get('/', (req, res) => {
  res.send('working');
});

export default router;
