angular.module('shoppingCart.filters', [])

.filter('addDecimal', function () {
  return function (input) {
    console.log(input);
    var filtered = input.toString();
    return filtered.replace(/_/g , "-")
  };
});
