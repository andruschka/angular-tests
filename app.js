angular.module('tutorialApp', [])
.factory('Cart',function() {
  var items = [];
  return {
    getItems: function() {
      return items;
    },
    addArticle: function(article) {
      if (article) {
        items.push(article); 
      }
    },
    sum: function() {
      res = 0;
      for (item in items) {
        if (object.hasOwnProperty(item)) {
          res += item.price;
        }
      }
      return res;
    }
  }
})
.controller('ItemsCtrl', function($scope, $http, Cart) {
  $scope.cart = Cart;
  $http.get('data.json').then(function(res) {
    $scope.items = res.data;
  });
});