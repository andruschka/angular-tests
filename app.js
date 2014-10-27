angular.module('tutorialApp', ['ngAnimate'])
.factory('Cart',function() {
  var items = [];
  return {
    getItems: function() {
      return items;
    },
    addItem: function(item) {
      items.push(item);
    },
    sum: function() {
      return items.reduce(function(total, item) {
        return total + item.price;
      }, 0);
    }
  }
})
.controller('ItemsCtrl', function($scope, $http, Cart) {
  $scope.cart = Cart;
  $http.get('data.json').then(function(res) {
    $scope.items = res.data;
  });
})
.controller('CartCtrl', function($scope, Cart) {
  $scope.cart = Cart;
});