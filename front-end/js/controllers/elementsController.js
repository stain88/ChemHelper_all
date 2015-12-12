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
  self.selectedElement = {};

  self.getElements = function() {
    self.all = Element.query();
  }

  function addElement() {

  };

  function removeElement(id) {

  };

  self.getElements();

}