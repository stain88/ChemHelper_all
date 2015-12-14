var express  = require('express'),
    router   = express.Router();

var elementsController = require('../controllers/elementsController.js');
var factsController = require('../controllers/factsController.js');

router.route('/elements')
  .get(elementsController.getElements)
  .post(elementsController.addElement);

router.route('/elements/:id')
  .get(elementsController.getElement)
  .put(elementsController.updateElement)
  .patch(elementsController.updateElement)
  .delete(elementsController.deleteElement);

router.route('/facts')
  .get(factsController.factsIndex)
  .post(factsController.factCreate);

router.route('/facts/:id')
  .get(factsController.factShow)
  .put(factsController.factUpdate)
  .patch(factsController.factUpdate)
  .delete(factsController.factDelete);

module.exports = router;