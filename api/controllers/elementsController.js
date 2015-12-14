var Element = require('../models/element');

function getElements(req, res) {
  Element.find(function(err, elements) {
    if (err) res.json({message: 'could not find any elements'});

    res.json({elements: elements});
  });
};

function addElement(req, res) {
  var element = new Element(req.body);
  element.save(function(err) {
    if (err) res.json({message: 'could not add element: ' + err});

    res.json({element: element});
  });
};

function getElement(req, res) {
  var id = req.params.id;
  Element.findById({_id: id}, function(err, element) {
    if (err) res.json({message: 'could not find element: ' + err});

    res.json({element: element});
  });
};

function updateElement(req, res) {
  var id = req.params.id;
  Element.findById({_id: id}, function(err, element) {
    if (err) res.json({message: 'could not find element: ' + err});

    element.name = req.body.name || element.name;
    element.number = req.body.number || element.number;
    element.group = req.body.group || element.group;
    element.position = req.body.position || element.position;
    element.small = req.body.small || element.small;
    element.molar = req.body.molar || element.molar;
    element.electrons = req.body.electrons || element.electrons;

    element.save(function(err) {
      if (err) res.json({message: 'could not update element: ' + err});

      res.json({message: 'element successfully updated', element: element});
    });
  });
};

function deleteElement(req, res) {
  var id = req.params.id;
  Element.remove({_id: id}, function(err) {
    if (err) res.json({message: 'coudl not delete element: ' + err});

    res.json({message: 'element successfully deleted'});
  });
};

module.exports = {
  getElements: getElements,
  addElement: addElement,
  getElement: getElement,
  updateElement: updateElement,
  deleteElement: deleteElement
}