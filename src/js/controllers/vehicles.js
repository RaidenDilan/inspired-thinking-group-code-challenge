angular
  .module('vehicleApp')
  .controller('VehiclesIndexCtrl', VehiclesIndexCtrl);

VehiclesIndexCtrl.$inject = ['$http', 'VehiclesService'];
function VehiclesIndexCtrl($http, VehiclesService) {
  const vm = this;

  VehiclesService
    .fetchVehicles()
    .then((vehicles) => {
      vm.allVehiclesImages = [];

      vehicles.forEach((images) => {
        vm.allVehiclesImages.push(images);
        vm.allVehiclesInfo = [];

        $http
          .get(`/api/vehicles/${images.id}`)
          .then((specs) => {
            vm.allCars = [];
            vm.allVehiclesInfo.push(specs.data);
            vm.allVehiclesImages.forEach((item, index) => vm.allCars.push(Object.assign({}, item, vm.allVehiclesInfo[index])));
          });
      });
    });

}
