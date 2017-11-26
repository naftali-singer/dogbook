
dogApp.factory("breeds", function(Breed) {
    var breeds = [];

    function getAll() {
        return breeds;
    }

//    function getCarById(index) {
//        return cars[index];
//    }

//    function addCar(car) {
//        cars.push(car);
//    }

    function setBreeds(breedsPlain) {
        alert("breeds!!!" + JSON.stringify(breedsPlain));
        breeds = [];
        for (var i = 0; i < breedsPlain.length; i++) {
            breeds.push(new Breed(breedsPlain[i]))
        }
    }
    alert("breeds!!!" + JSON.stringify(breeds));
    return {
        getAll: getAll,
//        getCarById: getCarById,
//        addCar: addCar,
        setBreeds: setBreeds
    }
})