define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controllers definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window) {

//  map options
       var mapOptions = {
           zoom: 17,
           center: new google.maps.LatLng(37.7473988,-121.9464932),
           mapTypeId: google.maps.MapTypeId.SATELLITE
       }

// map initialiazation
       $scope.predixMap = new google.maps.Map(document.getElementById('predixMap'), mapOptions);









    }]);
});
