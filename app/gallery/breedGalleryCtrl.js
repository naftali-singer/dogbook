
dogApp.controller("breedGalleryCtrl", function($scope, breeds, $log, $http, $location) {
    //$scope.test = "ewewew";

    // http call to get data
    $http.get("https://dog.ceo/api/breeds/list").then(function mySuccess(response) {
        alert("success!!!" + JSON.stringify(response.data.message));
    // Updating the service with the data
        breeds.setBreeds(response.data.message);

        // Getting the data from the service
        $scope.breeds = breeds.getAll();
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
/*
    $scope.addCar = function() {
        cars.addCar(new Car("Susita", "Carmel", "1972", 12022939));
        $scope.cars = cars.getAll();
    }
      
      $scope.sortBy = function(prop) {
        $scope.orderProp = prop;
      }
      
      
      // Custom filter function
      $scope.filterBrandAndModel = function(car) {
        if ($scope.query == undefined || $scope.query === "") {
          return true;
        } 
        
        var queryLowerCase = $scope.query.toLowerCase();
        var brand = car.brand.toLowerCase();
        var model = car.model.toLowerCase();
        
        if (brand.includes(queryLowerCase) || 
            model.includes(queryLowerCase)) {
          return true;
        } else {
          return false;
        }
      }
      
      $scope.openCar = function (car) {
        // Getting the index of the car in the array
        var carIndex = $scope.cars.indexOf(car);

        // Updating the URL
        $location.path("/cars/" + carIndex)
      }
*/
})