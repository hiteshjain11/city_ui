define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controllers definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','TruckService', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,TruckService) {

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

//chandresh
      try{ 

        google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
          
          googleMap.setZoom(17); //Or whatever
      });
       console.log("this is where magic begins");
        $scope.path2 = [{lat:  37.748209, lng: -121.950600},
             {lat: 37.747086, lng:-121.950109},
             {lat: 37.747758, lng: -121.947851},
             {lat: 37.748948, lng: -121.948534}];

        $scope.path1 = [{lat: 37.746767, lng:-121.954336},
                        {lat: 37.748364, lng:-121.955827},
                        {lat: 37.750672, lng:-121.953560},
                        {lat: 37.752725, lng:-121.950242},
                        {lat: 37.749047, lng:-121.948593}
                        ];

       var length1 = $scope.path1.length;
       TruckService.initialize(map);
       $scope.counter =0 ;
       
       console.log(new Date());
       
       $interval(function() {

            TruckService.calcRoute($scope.path1[$scope.counter%length1],
              $scope.path1[($scope.counter +1)%length1]);

            $scope.counter++;
       }, 5000);

       /*$scope.counter2 =0 ;
       $interval(function() {

            TruckService2.calcRoute($scope.path2[$scope.counter2%2],
              $scope.path2[($scope.counter2 +1)%2]);

            $scope.counter++;
       }, 3000,8);*/
       

       /*TruckService.calcRoute($scope.path1[$scope.counter%length1],$scope.path1[$scope.counter%length1+1])
       .then(function(){
            console.log("this is where magic begins2");
            console.log(new Date());
            $scope.counter++;
            console.log("thisi is counter"+ $scope.counter);
            
       });
*/

       

       /*TruckService.calcRoute($scope.path1[$scope.counter%length1],$scope.path1[$scope.counter%length1+1])
       .then(function(){
            console.log("this is where magic begins2");
            console.log(new Date());
            $scope.counter++;
            console.log("thisi is counter"+ $scope.counter);
       });*/

       console.log(new Date());
      }catch(e){
        console.error(e);
      }
//chandresh

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
