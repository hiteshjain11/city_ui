define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controllers definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory) {

//  map options
       // 

       // var mapOptions = {
       //     zoom: 4,
       //     center: new google.maps.LatLng(29.2624, 75.96585),
       //     mapTypeId: google.maps.MapTypeId.TERRAIN
       // }

        var mapOptions = {
           zoom: 17,
           center: new google.maps.LatLng(37.7473988,-121.9464932),
           mapTypeId: google.maps.MapTypeId.SATELLITE
       }

// map initialiazation
       var map = new google.maps.Map(document.getElementById('predixMap'), mapOptions);
       var bounds = new google.maps.LatLngBounds();
       var marker;

       dataFactory.getMapData()
       .then(function(response) {
           $scope.mapData = response.data;
           console.log($scope.mapData);

         for (var i = 0; i < $scope.mapData.length; i++) {
               var position = new google.maps.LatLng($scope.mapData[i].Lat, $scope.mapData[i].Long);
               var dataObject = $scope.mapData[i].params;
               console.log($scope.mapData[i]);
               var iconSrc = "../images/icon_"+$scope.mapData[i].Type+"_"+$scope.mapData[i].Status+".png";
               var bounds = new google.maps.LatLngBounds();
               bounds.extend(position);
               marker = new google.maps.Marker({
                   position: position,
                   map: map,
                   icon: iconSrc,
                  //  label: {
                  //      text: plotid,
                  //      color: "#fff"
                  //  },
                   dataObject: dataObject
               });
               console.log(marker);

               // Allow each marker to have an info window
              //  google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
              //      return function() {
              //          infoWindow.setContent(infoWindowContent[i][0]);
              //          infoWindow.open(map, marker);
              //          console.log(marker.dataObject)
              //      }
              //  })(marker, i));

               // Automatically center the map fitting all markers on the screen
              //  map.fitBounds(bounds);
           }

       }, function(error) {
           $scope.mapstatus = 'Unable to load map data: ';
       });


// Get Plot data












    }]);


//   Factory DATA for http call
    controllers.factory('dataFactory', ['$http', function($http) {

      var URL_MAP_DATA = 'scripts/modules/sample-module/map-data.json';

      var dataFactory = {};

      dataFactory.getMapData = function () {
          return $http.get(URL_MAP_DATA);
      };


      return dataFactory;

}]);




});
