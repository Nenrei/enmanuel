angular.module("myApp",['ngRoute', 'ngMaterial', 'ngMessages']);

angular.module("myApp").config(function($routeProvider,$locationProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl : 'template/main.html',
            controller  : 'mainController'
        })
        .when('/games', {
            templateUrl	: 'template/games.html',
            controller 	: 'gamesController'
        })
		.when('/web', {
            templateUrl	: 'template/web.html',
            controller 	: 'webController'
        })
        .when('/curriculum', {
            templateUrl : 'template/curric.html',
            controller  : 'curriculumController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
    $locationProvider.html5Mode(true);
});

angular.module("myApp").controller('mainController', function() {

});

angular.module("myApp").controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
});
