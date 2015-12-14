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

