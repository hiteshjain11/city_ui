define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';




    // Controller definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','$filter', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,$filter) {






    }]);









    // Controller definition
     controllers.controller('BlankpageCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','$filter','TruckService', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,$filter,TruckService) {




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
         $scope.myMAP= map;

//chandresh
      try{ 

        google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
          $scope.myMAP.setCenter(new google.maps.LatLng(37.7473988,-121.9464932));
          $scope.myMAP.setZoom(17); //Or whatever
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



       console.log(new Date());
      }catch(e){
        console.error(e);
      }
//chandresh


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

              infoWindowContent = '<div>'+'<span style="font-weight:bold;font-size:120%;">Asset ID : </span>'+'<span>'+assetid+'<span>'+'</div">';



              for (var key in finalObj) {
                infoWindowContent += '<div class="info_content">'+'<span>'+key+'<span>'+' : '+'<span>'+finalObj[key]+'<span>'+'</div">';
              }

              '<div class="info_content">'+ '<div>Air Quality : <span id="airquality"></span></div>'+'<div>Position : <span id="position"></span></div>'+'</div">';


                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);




                // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    // iwOuter.parent().parent().css({left: '115px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'background': 'rgba(0, 0, 0, 0.8)', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '-20px', top: '23px', border: '1px solid #48b5e9'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });



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
