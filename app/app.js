var dogApp = angular.module("dogApp", ["ngRoute"]);

dogApp.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/home/home.html"
    })
    .when("/breeds", {
        templateUrl: "app/gallery/breedGallery.html",
        controller: "breedGalleryCtrl"
    })
    .when("/dogs/:index", {
//        templateUrl: "app/details/dogDetails.html",
//        controller: "dogDetailsCtrl"        
    })
    .when("/about", {
//        templateUrl: "app/maintenance/maintenance.html"    
    })    
})


dogApp.controller("testCtrl", function() {
    console.log(6+6);
})
;