const Router = require('express');
const router = new Router();
const approachRouter = require('./approachRouter');
const reviewRouter = require('./reviewRouter');
const serviceRouter = require('./serviceRouter');
const applicationRouter = require('./applicationRouter');
const userRouter = require('./userRouter');

router.use('/approach', approachRouter);
router.use('/review', reviewRouter);
router.use('/service', serviceRouter);
router.use('/application', applicationRouter);
router.use('/user', userRouter);


module.exports = router;
