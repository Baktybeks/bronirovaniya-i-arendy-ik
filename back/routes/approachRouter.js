const Router = require('express');
const router = new Router();
const approachController = require('../controllers/approachController');

router.post('/', approachController.create);
router.get('/', approachController.getAll);
router.delete('/:id', approachController.deleteOne);

module.exports = router;
