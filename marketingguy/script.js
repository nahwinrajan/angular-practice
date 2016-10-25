var app = angular.module("marketingguy", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'main.html',
        controller: 'MainController'
      }).
      when('/about', {
        templateUrl: 'about.html',
        controller: 'MainController'
      }).
      when('/services', {
        templateUrl: 'services.html',
        controller: 'ServicesController'
      }).
      when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactController'
      }).
      otherwise({
        redirectTo: '/main'
      })
  }])

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('services.json').then(function(data){
    $scope.services = data;
  });
}])
.controller('ServicesController', ['$scope', '$http', function($scope, $http) {
  $http.get('services.json').then(function(data){
    $scope.services = data;
  });
}])
.controller('ContactController', ['$scope', '$http', function($scope, $http) {
  $http.get('locations.json').then(function(data){
    $scope.locations = data;
  });
}]);
