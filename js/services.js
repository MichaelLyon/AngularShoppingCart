angular.module('shoppingCart.services', [])

.service('testService', function() {
  this.saySomething = function(something) {
    console.log(something);
  }
})
