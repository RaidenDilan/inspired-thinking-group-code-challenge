angular
  .module('vehicleApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('vehiclesIndex', {
      url: '/vehicles',
      templateUrl: 'js/views/vehicles/index.html',
      controller: 'VehiclesIndexCtrl as vehiclesIndex'
    });

  $urlRouterProvider.otherwise('/vehicles');
}
