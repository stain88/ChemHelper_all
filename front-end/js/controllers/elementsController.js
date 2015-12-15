angular
  .module('ElementsApp')
  .controller('ElementsController', ElementsController);

ElementsController.$inject = ['Element', 'Fact'];
function ElementsController(Element, Fact) {
  var self = this;
  self.all = [];
  self.selectedElement;
  self.fact = {};

  self.getElements = function() {
    self.all = Element.query();
  }

  self.selectElement = function(element) {
    Element.get({id: element._id}, function(ele) {
      self.selectedElement = ele.element;
      self.selectedElement.protonSize = Math.sqrt(ele.element.number)+20;
      self.selectedElement.rings = rings(ele.element.electrons);
    });
  }

  self.range = function(n) {
    return new Array(n);
  }

  function rings(arr) {
    var count = 0;
    for (var i=0;i<arr.length; i++) {
      if (arr[i]!=="") count+=1;
    }
    return count;
  }

  self.transform = function(n) {
    return "rotate("+n+"deg)";
  }

  self.addFact = function() {
    if (self.fact._id) {
      Fact.update({id: self.fact._id}, self.fact, function() {self.fact = {}});
      console.log("updated fact");
    } else {
      self.fact.elem_id = self.selectedElement._id;
      Fact.save(self.fact, function(fact) {
        self.fact = {};
      });
    };
  };

  self.editFact = function(fact) {
    self.fact = fact;
  }

  self.getElements();

}