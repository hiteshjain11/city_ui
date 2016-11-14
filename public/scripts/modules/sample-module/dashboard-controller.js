define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';




    // Controller definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','$filter', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,$filter) {






    }]);









    // Controller definition
     controllers.controller('BlankpageCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','$filter', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,$filter) {




       $scope.mapDataTypes = [
        { text: 'Hospital',selected:true },
        { text: 'Truck',selected:true },
        { text: 'Tank',selected:true },
        { text: 'Garbage',selected:true }
    ];
$scope.ratingPanel = true;

$scope.legendBar = function(){
  $scope.ratingPanel = !$scope.ratingPanel;
}

    $scope.toggleMapDateTypes = function (item) {
        item.selected = !item.selected;
        $scope.updateMapData();

    };


function onloadMarkers(dataMain){
  if(dataMain){
    $scope.newMapData = dataMain;
  }else{
    $scope.newMapData = $scope.mapData;
  }

  //  map options
        var mapOptions = {
           zoom: 17,
           center: new google.maps.LatLng(37.7473988,-121.9464932),
           mapTypeId: google.maps.MapTypeId.SATELLITE
        }

  // map initialiazation
         var map = new google.maps.Map(document.getElementById('predixMap'), mapOptions);
         var bounds = new google.maps.LatLngBounds();
         var marker;
         var infoWindow = new google.maps.InfoWindow();


  for (var i = 0; i < $scope.newMapData.length; i++) {
        var position = new google.maps.LatLng($scope.newMapData[i].lat, $scope.newMapData[i].longitude);
        var dataObject = $scope.mapData[i];
        var iconSrc = "../images/icon_"+$scope.newMapData[i].type+"_"+$scope.newMapData[i].status+".png";
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(position);

        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: iconSrc,
            dataObject: dataObject
        });

        $scope.airquality = $scope.newMapData[i]["params"];
        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
            return function() {

              var finalObj = marker.dataObject.params;
              var assetid = marker.dataObject.assetsid;
              var infoWindowContent ;

              infoWindowContent = '<div>'+'<span>Asset ID : <span>'+'<span>'+assetid+'<span>'+'</div">';



              for (var key in finalObj) {
                infoWindowContent += '<div class="info_content">'+'<span>'+key+'<span>'+' : '+'<span>'+finalObj[key]+'<span>'+'</div">';
              }

              '<div class="info_content">'+ '<div>Air Quality : <span id="airquality"></span></div>'+'<div>Position : <span id="position"></span></div>'+'</div">';


                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);

            }
        })(marker, i));
    }

}



dataFactory.getMapData()
.then(function(response) {
    $scope.mapData = response.data;
            onloadMarkers();
}, function(error) {
    $scope.mapstatus = 'Unable to load map data: ';
});






  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }


$scope.updateMapData = function(){

  var testDK = [];
  for(var mm=0;mm<$scope.mapDataTypes.length;mm++){
    if($scope.mapDataTypes[mm].selected == true){
      testDK.push($scope.mapDataTypes[mm].text);
    }
  }
  console.log(testDK);


  var ffdata = [];
  for(var kk=0;kk<testDK.length;kk++){
    ffdata[kk] = $filter('filter')($scope.mapData, {type:testDK[kk]});
  }

  var resultkk = [].concat.apply([], ffdata);
  var newMapData = flatten(ffdata);
  console.log(newMapData);

  onloadMarkers(newMapData);


}//main  scope update function end





    }]);


//   Factory DATA for http call
    controllers.factory('dataFactory', ['$http', function($http) {

      // var URL_MAP_DATA = 'scripts/modules/sample-module/map-data.json';
      var URL_MAP_DATA = 'https://tcssmartcityassettimeseries.run.aws-usw02-pr.ice.predix.io/allAssetts';



      var dataFactory = {};

      dataFactory.getMapData = function () {
          return $http.get(URL_MAP_DATA);
      };


      return dataFactory;

}]);




});
