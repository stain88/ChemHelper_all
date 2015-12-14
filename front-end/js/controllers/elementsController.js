angular
  .module('ElementsApp')
  .controller('ElementsController', ElementsController);

ElementsController.$inject = ['Element'];
function ElementsController(Element) {
  var self = this;
  self.all = [];
  self.addElement = addElement;
  self.removeElement = removeElement;
  self.newElement = {};
  self.selectedElement;

  self.getElements = function() {
    self.all = Element.query();
  }

  function addElement() {

  };

  function removeElement(id) {

  };

  self.selectElement = function(element) {
    Element.get({id: element._id}, function(ele) {
      self.selectedElement = ele.element;
      self.selectedElement.protonSize = Math.sqrt(ele.element.number)+20;
      self.selectedElement.rings = rings(ele.element.electrons);
      console.log(self.selectedElement.rings);
    });
  }

  self.range = function(n) {
    return new Array(n);
  }

  function rings(arr) {
    console.log(arr);
    var count = 0;
    for (var i=0;i<arr.length; i++) {
      if (arr[i]!=="") count+=1;
    }
    console.log(count);
    return count;
  }

  self.transform = function(n) {
    return "rotate("+n+"deg)";
  }

  self.getElements();

}