import * as express from 'express';

// import sub-routers

const router = express.Router();

// mount express paths, any addition middleware can be added as well.
// ex. router.use('/pathway', middleware_function, sub-router);

router.get('/', (req, res) => {
  res.send('Birds home page');
});

// Export the router
export default router;
