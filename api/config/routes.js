var express  = require('express'),
    router   = express.Router();

var elementsController = require('../controllers/elementsController.js');

router.route('/elements')
  .get(elementsController.elementsIndex)
  .post(elementsController.addElement);

router.route('/elements/:id')
  .get(elementsController.elementsShow)
  .put(elementsController.elementsUpdate)
  .patch(elementsController.elementsUpdate)
  .delete(elementsController.elementsDelete);

module.exports = router;