angular
  .module('vehicleApp')
  .service('VehiclesService', VehiclesService);

VehiclesService.$inject = ['$http'];
function VehiclesService($http) {
  const vm = this;

  vm.fetchVehicles = function fetchVehicles(vehicleId) {
    return $http
      .get('/api/vehicles', { params: { vehicleId }})
      .then((response) => {

        // response.data.allVehicles = [];
        // response.data.allVehicles.length = [];
        //
        // response.data.forEach((quote) => {
        //   // console.log('quote', quote);
        //   if(response.data) response.data.allVehicles.push(quote);
        // });
        // response.data.allVehicles.push(response.data.allVehicles.length);

        return response.data;
      });
  };
}
