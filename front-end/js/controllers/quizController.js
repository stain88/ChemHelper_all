angular
  .module('ElementsApp')
  .controller('QuizController', QuizController);

QuizController.$inject = ['$window', 'Element', 'User', '$auth'];
function QuizController($window, Element, User, $auth) {
  var self = this;
  var _ = $window._;

  self.allElements = [];
  self.questionElements = [];
  self.answerElement = {};
  self.user = {};

  getElements();

  function getElements() {
    self.allElements = Element.query();
  }

  self.getRandomElements = function() {
    self.allElements = self.allElements.filter(function(ele) {
      return ele.name.length>0;
    })
    self.allElements = _.shuffle(self.allElements);
    self.questionElements = _.slice(self.allElements, 0, 4);
    self.selectQuestion();
  }

  self.selectQuestion = function() {
    var questions = _.shuffle(['longName', 'symbol', 'protons']);
    var q = _.first(questions);
    self.selectAnswer();
    switch (q) {
      case 'symbol':
        self.symbol();
        break;
      case 'protons':
        self.protons();
        break;
      default:
        self.longName();
    };
  }

  self.selectAnswer = function() {
    var shuffle = _.shuffle(self.questionElements);
    self.answerElement = _.first(shuffle);
  }

  self.longName = function() {
    self.question = "What element has the symbol " + self.answerElement.small + "?";
    self.questionElements.forEach(function(ele) {
      ele.answer = ele.name;
    })
  }

  self.symbol = function() {
    self.question = "What is the symbol for " + self.answerElement.name + "?";
    self.questionElements.forEach(function(ele) {
      ele.answer = ele.small;
    })
  }

  self.protons = function() {
    self.question = "How many protons does " + self.answerElement.name + " have?";
    self.questionElements.forEach(function(ele) {
      ele.answer = ele.number;
    })
  }

  self.checkAnswer = function(element) {
    self.user.totalQuestions++;
    element._id === self.answerElement._id ? correct() : incorrect();
  }

  function correct() {
    self.user.correctAnswers++;
    updateScore();
    self.getRandomElements();
  }

  function incorrect() {
    updateScore();
    self.getRandomElements();
  }

  function updateScore() {
    self.user.score = Math.floor(100 * self.user.correctAnswers / self.user.totalQuestions) || 0;
    User.update({id: self.user._id}, self.user);
  }

  function info() {
    var id = $auth.getPayload()._id;
    User.get({id: id}, function(user) {
      self.user = user.user;
      updateScore();
    });
  };

  self.resetScore = function() {
    self.user.totalQuestions = 0;
    self.user.correctAnswers = 0;
    updateScore();
  }

  self.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  if (self.isAuthenticated()) {
    info();
  }
}