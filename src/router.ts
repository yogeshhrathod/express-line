import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Birds home page');
});

// Export the router
export default router;
