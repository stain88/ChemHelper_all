var express  = require('express'),
    router   = express.Router();

var elementsController  = require('../controllers/elementsController.js'),
    factsController     = require('../controllers/factsController.js'),
    usersController     = require('../controllers/usersController.js'),
    authController      = require('../controllers/authenticationsController.js');

router.post('/auth/facebook', authController.fblogin);
router.post('/auth/github', authController.githublogin);

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

router.route('/users')
  .get(usersController.getUsers);

router.route('/users/:id')
  .get(usersController.getUser)
  .put(usersController.userUpdate)
  .patch(usersController.userUpdate);

module.exports = router;