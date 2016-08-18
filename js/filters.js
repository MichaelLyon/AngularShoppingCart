var app = angular.module('shoppingCart.filters', [])

app.filter('addDecimal', function () {
  return function (input) {
    var decimals =input.toString().slice(-2);
    var beforeDec = input.toString().slice(0,-2);
    var combined = Number(beforeDec + '.' + decimals);
    return combined.toFixed(2);
  };
})
app.filter('checkInStock', function(){
  return function (product){
    if(product === true){
      return 'Yes'
    }else{
      return 'No'
    }
  }
})
