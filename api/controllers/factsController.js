var Fact    = require('../models/fact'),
    Element = require('../models/element');

function factsIndex(req, res) {
  Fact.find({}, function(err, facts) {
    if (err) return res.json({message: 'could not find any facts'});

    res.json({facts: facts});
  });
};

function factCreate(req, res) {
  var fact = new Fact(req.body);
  fact.save(function(err) {
    if (err) return res.json({message: 'could not add fact: ' + err});

    Element.findOne({_id: req.body.elem_id}, function(err, element) {
      element.facts.push(fact);
      element.save();
    });
    res.json({fact: fact});
  });
};

function factShow(req, res) {
  var id = req.params.id;
  Fact.findById({_id: id}, function(err, fact) {
    if (err) return res.json({message: 'could not find fact: ' + err});

    res.json({fact: fact});
  });
};

function factUpdate(req, res) {
  var id = req.params.id;
  Fact.findByIdAndUpdate({_id: id}, function(err, fact) {
    if (err) return res.json({message: 'could not find fact: ' + err});

    fact.name = req.body.name || fact.name;
    fact.description = req.body.description || fact.name;

    fact.save(function(err) {
      if (err) return res.json({message: 'could not update fact: ' + err});

      return res.json({message: 'fact successfully updated', fact: fact});
    });
  });
};

function factDelete(req, res) {
  var id = req.params.id;
  Fact.remove({_id: id}, function(err) {
    if (err) return res.json({message: 'could not delete fact: ' + err});

    res.json({message: 'fact successfully deleted'});
  });
};

module.exports = {
  factsIndex: factsIndex,
  factCreate: factCreate,
  factShow: factShow,
  factUpdate: factUpdate,
  factDelete: factDelete
};