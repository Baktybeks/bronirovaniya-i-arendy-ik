const Router = require('express');
const router = new Router();
const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.create);
router.get('/', serviceController.getAll);
router.delete('/:id', serviceController.deleteOne);

module.exports = router;
