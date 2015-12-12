angular
  .module('ElementsApp')
  .controller('ElementsController', ElementsController);

ElementsController.$inject = ['$http'];
function ElementsController($http) {
  var self = this;
  self.all = [];
  self.addElement = addElement;
  self.removeElement = removeElement;
  self.newElement = {};
  self.selectedElement = {};

  function addElement() {

  };

  function removeElement(id) {

  };

}