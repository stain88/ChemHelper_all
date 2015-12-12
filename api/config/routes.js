var express  = require('express'),
    router   = express.Router();

var elementsController = require('../controllers/elementsController.js');

router.route('/elements')
  .get(elementsController.getElements)
  .post(elementsController.addElement);

router.route('/elements/:id')
  .get(elementsController.getElement)
  .put(elementsController.updateElement)
  .patch(elementsController.updateElement)
  .delete(elementsController.deleteElement);

module.exports = router;