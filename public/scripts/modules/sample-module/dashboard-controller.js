define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
     controllers.controller('DashboardCtrl', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window) {

        PredixAssetService.getAssetsByParentId('root').then(function (initialContext) {

            //pre-select the 1st asset
            initialContext.data[0].selectedAsset = true;
            $scope.initialContexts = initialContext;
            $scope.initialContextName = initialContext.data[0].name;

            //load view selector
            $scope.openContext($scope.initialContexts.data[0]);
        }, function (message) {
            $log.error(message);
        });

        $scope.decks = [];
        $scope.selectedDeckUrl = null;


		 $scope.allTrucksDetails=[];
        $scope.selectedDeckUrl = null;
        $scope.received_msg=null;
        $scope.active=0;
        $scope.good=0;
        $scope.critical=0;
        $scope.average=0;
        $scope.offline=0;
        $scope.allshow=true;
        $scope.detailShow=false;
        $scope.indexSelected="";

        var cargos=[];
         var self = this;
        this.dateFormat = 'dd.MM.yyyy';

         this.entries = [];
         this.cargoDetails=[];
         var cargoCondition=[];
         var cargochartCondition=[];
         $scope.listshow=false;
         $scope.viewshow=true;
         var allTruckschart;


           $scope.data = [
  {'x': 10, 'y': 25.4403},
  {'x': 20, 'y': 25.1913},
  {'x': 30, 'y': 24.8485},
  {'x': 40, 'y': 23.975},
  {'x': 50, 'y': 24.9377},
  {'x': 60, 'y': 25.3795},
  {'x': 70, 'y': 25.0869},
  {'x': 80, 'y': 25.3758}
];

           $scope.dataHumid = [
  {'x': 10, 'y': 18.4403},
  {'x': 20, 'y': 17.1913},
  {'x': 30, 'y': 17.8485},
  {'x': 40, 'y': 17.975},
  {'x': 50, 'y': 16.9377},
  {'x': 60, 'y': 17.3795},
  {'x': 70, 'y': 15.0869},
  {'x': 80, 'y': 17.3758}
];



          $scope.options = {
            series: [
              {
                axis: "y",
                dataset: "dataset0",
                key: "val_0",
                label: "An area series",
                color: "#1f77b4",
                type: ['line', 'dot', 'area'],
                id: 'mySeries0'
              }
            ],
            axes: {x: {key: "x"}}
          };

         $scope.showlist=function()
         {
          //$scope.listshow=!$scope.listshow;
            console.log("giugiug");
         if($scope.listshow==false){
            $scope.listshow=true;
            $scope.viewshow=false;}

            else

            {
            $scope.listshow=false;
            $scope.viewshow=true;
          }

            };

            $scope.GetRoute=function(id) {


        }
      $scope.controlCargoRoot=function(index)
      {

        $scope.indexSelected=index;
      }

        $scope.controlCargo=function(index)
        {
          console.log("index is::"+$scope.indexSelected);

          $scope.allTrucksDetails[$scope.indexSelected]["icon"]="Good";

        }


              // $scope.getChart=function(id)
              // {
              //   var found
              //     for(var k=0;k<cargoCondition.length;k++)
              //       {
              //       // console.log("conditionss::"+cargoCondition[k].id);


              //        var matched="/cargox/"+cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_"));
              //        console.log("equal::"+matched);

              //         for(var m=0;m<$scope.allTrucksDetails.length;m++)
              //         {
              //             console.log("equal uri::"+$scope.allTrucksDetails[m].uri)
              //           if(matched===$scope.allTrucksDetails[m].uri)
              //         {
              //           console.log("found org truck::"+$scope.allTrucksDetails[m].uri);
              //           foundtr=1;
              //           $scope.allTrucksDetails[m]["humid"]=cargoCondition[k].humid;
              //            $scope.allTrucksDetails[m]["temp"]=cargoCondition[k].temp;
              //            $scope.allTrucksDetails[m]["orgid"]=cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_"));

              //            console.log("shel length:::"+shelfdata.length);
              //          }

              //        }
              //      }

              // };
                  $scope.trorgID="";
              $scope.showAlllist=function(id)
              {
                console.log("here in chart"+id)
                if(id==="b8_27_eb_e8.."){
                id="b8_27_eb_e8_1b_36";
              }
                $scope.selectedID=id;
                $scope.trorgID=id;
                $scope.allshow=false;
                $scope.detailShow=true;
                $scope.data=[];
                $scope.dataHumid=[];
                var x=10;
                  console.log("length chart::"+cargochartCondition.length);
                for(var i=0;i<cargochartCondition.length;i++)
                {

                  var matched=id+"_humidity";
                  if(cargochartCondition[i].id===matched)
                  {

                    console.log("here in matched :: "+x+" "+cargochartCondition[i].id +" "+cargochartCondition[i].humid);
                    var ob={'x':x, 'y':cargochartCondition[i].temp };
                    var ob1={'x':x, 'y':cargochartCondition[i].humid };

                    $scope.data.push(ob);
                    $scope.dataHumid.push(ob1);
                     x=x+10;

                  }


                }
                var source;
                var destination;
                 for(var m=0;m<$scope.allTrucksDetails.length;m++)
                 {
                     var matched="/cargox/"+id;

                     if($scope.allTrucksDetails[m].uri===matched)
                     {
                      source=$scope.allTrucksDetails[m].source;
                      destination=$scope.allTrucksDetails[m].destination;

                        if(m===1)
                      {
                        console.log("found map");
                        source="Milwaukee";
                      }

                      if(m===3)
                      {
                        source="Sears";
                      }

                        if(m===4)
                        {
                          source="Houston";
                        }

                        if(m===5)
                        {
                          source="New York";
                        }



                      console.log($scope.allTrucksDetails[m].uri + source + destination);

                     }




                 }

        //           var directionsDisplay;
        //          var map2;
        // var directionsService = new google.maps.DirectionsService();

        //     // new google.maps.places.SearchBox(document.getElementById('txtSource'));
        //     // new google.maps.places.SearchBox(document.getElementById('txtDestination'));
        //     directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });

        //     var mumbai = new google.maps.LatLng(18.9750, 72.8258);
        //     var mapOptions = {
        //         zoom: 7,
        //         center: mumbai
        //     };
        //     $scope.map3 = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
        //     directionsDisplay.setMap($scope.map3);
        //     directionsDisplay.setPanel(document.getElementById('dvPanel'));

        //     //*********DIRECTIONS AND ROUTE**********************//
        //    // source = document.getElementById("txtSource").value;
        //    // destination = document.getElementById("txtDestination").value;

        //     var request = {
        //         origin: source,
        //         destination:destination,
        //         travelMode: google.maps.TravelMode.DRIVING
        //     };
        //     directionsService.route(request, function (response, status) {
        //         if (status == google.maps.DirectionsStatus.OK) {
        //             directionsDisplay.setDirections(response);
        //         }
        //     });

        //     //*********DISTANCE AND DURATION**********************//
        //     var service = new google.maps.DistanceMatrixService();
        //     service.getDistanceMatrix({
        //         origins: ["India"],
        //         destinations: ["India"],
        //         travelMode: google.maps.TravelMode.DRIVING,
        //         unitSystem: google.maps.UnitSystem.METRIC,
        //         avoidHighways: false,
        //         avoidTolls: false
        //     }, function (response, status) {
        //         if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
        //             var distance = response.rows[0].elements[0].distance.text;
        //             var duration = response.rows[0].elements[0].duration.text;
        //             var dvDistance = document.getElementById("dvDistance");
        //            // dvDistance.innerHTML = "";
        //             //dvDistance.innerHTML += "Distance: " + distance + "<br />";
        //            // dvDistance.innerHTML += "Duration:" + duration;

        //         } else {
        //             //alert("Unable to find the distance via road.");
        //         }
        //     });



              }

                 $scope.showAlllviewist=function()
              {

                $scope.allshow=true;
                $scope.detailShow=false;
              }

      var userLog=1;
       $scope.mapdashBoard=function()
       {



        if ("WebSocket" in window)
            {


               // Let us open a web socket
               var ws = new WebSocket("wss://cargo-ui-socket.run.aws-usw02-pr.ice.predix.io/livestream/messages");

               ws.onopen = function()
               {
                  var message = JSON.stringify(self.entries);
                  ws.send(message);

               };

               ws.onmessage = function (evt)
               {
                    var found=0;
                    var humidCondition="Good";
                    var tempCondition="Good";

                    self.entries = JSON.parse(event.data);
                   // console.log(self.entries.h_data.name);

                 //var id1=self.entries.h_data.name.substring(0,self.entries.h_data.name.indexOf("-")-1);
                //  console.log("id::"+id1);
                if(cargoCondition.length==0)
                {

                    if(self.entries.h_data.humidity>30)
                    {
                      humidCondition="Critical";
                    }
                    else
                    {
                      humidCondition="Good";
                    }

                     if(self.entries.h_data.humidity===17.0)
                    {

                        humidCondition="Average";
                    }


                 if(self.entries.t_data.temprature>29)
                    {
                      tempCondition="Critical";
                    }
                    else
                    {
                      tempCondition="Good";
                    }

                      console.log("here");
                      var ob={id:self.entries.h_data.name,humid:"Critical",temp:"Good"};

                      console.log("object pushing::"+ob.id+" "+ob.humid);
                      cargoCondition.push(ob);
                       var ob1={id:self.entries.h_data.name,humid:self.entries.h_data.humidity,temp:self.entries.t_data.temprature};
                      cargochartCondition.push(ob1);


                  }

                  else

                  {

                    //console.log("in else");
                    var found=1;
                    var indexOfC;

                    for(var j=0;j<cargoCondition.length;j++)
                    {
                      //console.log("equal::"+cargoCondition[j].id+"_humidity");
                      if(self.entries.h_data.name===cargoCondition[j].id)
                      {
                        console.log("here");
                        found=0;
                        indexOfC=j;
                      }
                    }

                    if(found===0)
                    {

                       if(self.entries.h_data.humidity>30)
                    {
                      humidCondition="Critical";
                    }
                    else
                    {
                      humidCondition="Good";
                    }

                    if(self.entries.h_data.humidity===17.0)
                    {

                        humidCondition="Average";
                    }


                         if(self.entries.t_data.temprature>29)
                    {
                      tempCondition="Critical";
                    }
                    else
                    {
                      tempCondition="Good";
                    }




                      var ob={id:self.entries.h_data.name,humid:humidCondition,temp:tempCondition};
                      console.log("object replcing::"+ob.id+" "+ob.humid);
                      cargoCondition[indexOfC]=ob;
                         var ob1={id:self.entries.h_data.name,humid:self.entries.h_data.humidity,temp:self.entries.t_data.temprature};
                      cargochartCondition.push(ob1);


                    }

                    else

                    {
                      if(self.entries.h_data.humidity>30)
                    {
                      humidCondition="Critical";
                    }
                    else
                    {
                      humidCondition="Good";
                    }

                     if(self.entries.h_data.humidity===17.0)
                    {

                        humidCondition="Average";
                    }


                         if(self.entries.t_data.temprature>29)
                    {
                      tempCondition="Critical";
                    }
                    else
                    {
                      tempCondition="Good";
                    }

                      console.log("here");
                      var ob={id:self.entries.h_data.name,humid:"Critical",temp:"Good"};
                      console.log("object pushing::"+ob.id+" "+ob.humid);
                      cargoCondition.push(ob);
                      var ob1={id:self.entries.h_data.name,humid:self.entries.h_data.humidity,temp:self.entries.t_data.temprature};
                      cargochartCondition.push(ob1);


                    }



                  }

                 //

                     self.cargoDetails.push(self.entries);

                    $scope.$digest();
                     $scope.getAllEntries(cargoCondition);
                    
              
              if (cargoCondition.length != 10) {
                $scope.getUpdates();
              } else {
                $interval($scope.getUpdates, 1000*30);
              }
                     //$scope.getUpdates();
                                      // console.log(self.entries);



               };

                     ws.onerror=function (evt)
           {
                console.log(evt.data);
            };


               ws.onclose = function()
               {
                  // websocket is closed.
                  console.log("Connection is closed...");
               };


            }

            else
            {
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
       }



         // body...
       var allTrucks;
        var shelfdata;
                         var shelfLife=0;


       $scope.getAllEntries=function (ob)
       {

        cargos=cargoCondition;
         console.log("cargo"+cargoCondition.length);
          var httpRequest = $http({
            method: 'GET',
            url:'https://cargo-life.run.aws-usw02-pr.ice.predix.io/getShelfLife',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {

         shelfdata=data;
         console.log("found shelfdata" +shelfdata);


         });

        //console.log(self.cargoDetails[8].h_data.name);

       };

        var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(42.85, -87.65),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
             // $scope.map2=new google.maps.Map(document.getElementById('map'), mapOptions);


        $scope.markers=[];

   $scope.getUpdates=function(){
     $scope.average=0;


        if($scope.markers.length>0){
        for (var i=0; i<$scope.markers.length; i++) {

        $scope.markers[i].setMap(null);
    }}

          $scope.markers=[];

          if($scope.selectedID!=undefined && $scope.selectedID!=null && $scope.selectedID!="")
          {

                 $scope.data=[];
                $scope.dataHumid=[];
                var x=10;
                  console.log("length chart::"+cargochartCondition.length);
                for(var i=0;i<cargochartCondition.length;i++)
                {

                  var matched=$scope.selectedID+"_humidity";
                  if(cargochartCondition[i].id===matched)
                  {

                    console.log("here in matched :: "+x+" "+cargochartCondition[i].id +" "+cargochartCondition[i].humid);
                    var ob={'x':x, 'y':cargochartCondition[i].temp };
                    var ob1={'x':x, 'y':cargochartCondition[i].humid };

                    $scope.data.push(ob);
                    $scope.dataHumid.push(ob1);
                     x=x+10;

                  }


                }

          }

            var httpRequest = $http({
            method: 'GET',
            url:'https://cargo-monitoring-dataingestion.run.aws-usw02-pr.ice.predix.io/retrieveassets',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {

          allTrucks=data;
          allTruckschart=data;
          $scope.allTrucksDetails=data;
           $scope.active=$scope.allTrucksDetails.length;

//                     $scope.data = [
//   {'x': 10, 'y': (Math.random() * 20) + 10},
//   {'x': 20, 'y':  (Math.random() * 20) + 10},
//   {'x': 30, 'y':  (Math.random() * 20) + 10},
//   {'x': 40, 'y':  (Math.random() * 20) + 10},
//   {'x': 50, 'y':  (Math.random() * 20) + 10},
//   {'x': 60, 'y':  (Math.random() * 20) + 10},
//   {'x': 70, 'y':  (Math.random() * 20) + 10},
//   {'x': 80, 'y':  (Math.random() * 20) + 10}
// ];



          $scope.options = {
            series: [
              {
                axis: "y",
                dataset: "dataset0",
                key: "val_0",
                label: "An area series",
                color: "#1f77b4",
                type: ['line', 'dot', 'area'],
                id: 'mySeries0'
              }
            ],
            axes: {x: {key: "x"}}
          };







                var found=0;
                var foundtr=0;
                var index;
                 var idORG;
                  var iconpathOrg;
                   var iconOrg;
                    var humidCOrg;
                     var tempCOrg;
                      var humidOrg;
                      var tempOrg;
                      var humidcog;
                      var tempcog;
                      var slifeOg;
                      var etaOg;




                     $scope.good=0;
          $scope.critical=0;
                for(var k=0;k<cargoCondition.length;k++)
                    {
                      var matched;
                    console.log("conditionss::"+cargoCondition[k].id);
                    var iconpath2;
                     if(cargoCondition[k].id!="b8_27_eb_e8_1b_36_humidity"){
                     matched="/cargox/"+cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_"));
                       }
                       else

                       {

                      matched="/cargox/b8_27_eb_e8_1b_36";

                       }
                     console.log("equal::"+matched);

                      for(var m=0;m<$scope.allTrucksDetails.length;m++)
                      {
                          console.log("equal uri::"+$scope.allTrucksDetails[m].uri)
                        if(matched===$scope.allTrucksDetails[m].uri)
                      {
                        console.log("found org truck::"+$scope.allTrucksDetails[m].uri);
                        foundtr=1;
                        $scope.allTrucksDetails[m]["humid"]=cargoCondition[k].humid;

                         $scope.allTrucksDetails[m]["temp"]=cargoCondition[k].temp;

                         $scope.allTrucksDetails[m]["orgid"]=cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_"));


                         $scope.allTrucksDetails[m]["index"]=m;
                         console.log("shel length:::"+$scope.allTrucksDetails[m]["index"]);
                    //      for(var l=0;l<shelfdata.length;l++)
                    //   {

                    //     if(cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_"))===shelfdata[l].assetId)
                    //   {
                    //     console.log("found shelfdata");
                    //     shelfLife=shelfdata[l].shelfLife;
                    //   }
                    // }

                    shelfLife=Math.floor((Math.random() * 56) + 70);




                          $scope.allTrucksDetails[m]["slife"]=shelfLife;
                           $scope.allTrucksDetails[m]["eta"]=((Math.random() * 10) + 28).toFixed(2);

                           $scope.allTrucksDetails[m]["showDetails"]=false;








                      var iconpath;
                      var showSettings=false;
                      var index;

             if((cargoCondition[k].humid==="Critical") || (cargoCondition[k].temp==="Critical"))
                   {
                     iconpath2='Critical';
                     $scope.critical=$scope.critical+1;
                      iconpath='../../images/critical_pin.png';
                      $scope.allTrucksDetails[m]["showSettings"]=true;
                   }

                   else
                   {
                    iconpath2='Good';
                      $scope.good=$scope.good+1;
                      iconpath='../../images/good_pin.png';
                      $scope.allTrucksDetails[m]["showSettings"]=false;
                   }


                     if(cargoCondition[k].humid==="Average")
                   {
                     iconpath2='Average';
                     $scope.average=$scope.average+1;
                      iconpath='../../images/average_pin.png';
                       $scope.allTrucksDetails[m]["showSettings"]=true;
                   }





                   if(i==0)
                   {
                    iconpath='../../images/offline_pin.png';
                   }

                   if(cargoCondition[k].humid==="Critical")
                   {
                    $scope.allTrucksDetails[m]["humidc"]="#f59b32";
                   }
                   else

                   {
                    $scope.allTrucksDetails[m]["humidc"]="#2ea750";
                   }


                   if(cargoCondition[k].temp==="Critical")
                   {
                     $scope.allTrucksDetails[m]["tempc"]="#f59b32";

                   }
                   else
                   {
                     $scope.allTrucksDetails[m]["tempc"]="#2ea750";
                   }


                   if(cargoCondition[k].humid==="Average")
                   {

                    $scope.allTrucksDetails[m]["humidc"]="#f59b32";

                   }
                        $scope.allTrucksDetails[m]["icon"]=iconpath2;
                        //var duration=34;
                       // $scope.allTrucksDetails[m]["eta"]=duration;
                        // info=$scope.allTrucksDetails[m];
                          console.log("icon path::"+iconpath);
                           console.log("icon path2::"+$scope.allTrucksDetails[m]["icon"]);



                            if(cargoCondition[k].id==="b8_27_eb_e8_1b_36_humidity"){
                        tempcog=$scope.allTrucksDetails[m]["tempc"];
                        humidcog= $scope.allTrucksDetails[m]["humidc"];
                        idORG="b8_27_eb_e8_1b_36";
                        iconpathOrg=iconpath2;
                        iconOrg=iconpath;
                        humidCOrg=$scope.allTrucksDetails[m]["humidc"];
                        tempCOrg=$scope.allTrucksDetails[m]["tempc"];
                        humidOrg=cargoCondition[k].humid;
                        tempOrg=cargoCondition[k].temp;
                          slifeOg=$scope.allTrucksDetails[m]["slife"];
                           etaOg=$scope.allTrucksDetails[m]["eta"];
                           showSettings= $scope.allTrucksDetails[m]["showSettings"];
                           index=$scope.allTrucksDetails[m]["index"];
                      }

                  //console.log("icon path::"+cargoCondition[k].id.substring(0,cargoCondition[k].id.indexOf("_")));





                      }
                      }

                     console.log(k);

                    }




              $scope.active=$scope.good+$scope.average+$scope.critical+1;




            //  console.log($scope.allTrucksDetails);

              // for (var i = 0; i <$scope.allTrucksDetails.length; i++){

              //    console.log("calling marker"+$scope.allTrucksDetails[i].uri);
              //     createMarker($scope.allTrucksDetails[i]);
              // }

              // console.log("Here I am");

               var idORG;
                  var iconpathOrg;
                   var iconOrg;
                    var humidCOrg;
                     var tempCOrg;
                      var humidOrg;
                      var tempOrg;

              $scope.allTrucksDetails[1]["icon"]=iconpathOrg;
              $scope.allTrucksDetails[1]["orgid"]="b8_27_eb_e8..";
              $scope.allTrucksDetails[1]["temp"]=tempOrg;
              $scope.allTrucksDetails[1]["humid"]=humidOrg;
              $scope.allTrucksDetails[1]["slife"]=76;
              $scope.allTrucksDetails[1]["eta"]=28.13;
              $scope.allTrucksDetails[1]["showDetails"]=false;
              $scope.allTrucksDetails[1]["tempc"]=tempcog;
              $scope.allTrucksDetails[1]["humidc"]=humidcog;
              $scope.allTrucksDetails[1]["slife"]=slifeOg;
              $scope.allTrucksDetails[1]["eta"]=etaOg;
               $scope.allTrucksDetails[1]["showSettings"]=showSettings;
               $scope.allTrucksDetails[1]["index"]=index;


               $scope.allTrucksDetails[0]["icon"]="offline";
               $scope.allTrucksDetails[0]["orgid"]="Sim11";
               $scope.allTrucksDetails[0]["temp"]="NA";
               $scope.allTrucksDetails[0]["humid"]="NA";
               $scope.allTrucksDetails[0]["slife"]="NA";
               $scope.allTrucksDetails[0]["eta"]="NA";
               $scope.allTrucksDetails[0]["showDetails"]=true;

             var iconpath;
              console.log("Temp ORG::"+tempOrg);





              var infoWindow=[];


               var createmarker=function(tr,lat,lang,id)
               {
             console.log("Here I am in marker"+id);
                 var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(lat,lang),
                      title:tr.orgid,
                      zoom:5,
                      icon:iconpath,
                  });
            // marker.content = '<div class="infoWindowContent">' + tr.orgid + '<button ng-click="alertme()"></button></div>';

           // marker.content ='<div class= "layout" style="padding-left:20px;height:323px;width:227px;overflow-y:hidden"><div id="truck" class="truck" style="padding-top:10px;background-image: url(images/TileView/'+tr.icon+'.png);height:300px;width:200px;box-shadow: 3px 3px  3px 3px #888888;margin-top:15px" ><p style="color:#fff;font-size:18px;margin-left: 13px;"> Truck ID : '+tr.orgid+'</p><p style="color:#fff;font-size:13px;margin-left: 13px;margin-top:-12px">cargo: '+tr.carrier+'</p><p style="color:#fff;font-size:18px;margin-left: 13px;">ETA</p><p style="color:#fff;font-size:35px;margin-top: -16px;margin-left: 13px;">23.45 Hrs</p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Temperature Status :'+ tr.temp+'</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p>   <p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Humidity Status : '+tr.humid+'</p> <p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Air Quality: Good</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p> <p><button id="{{tr.orgid}}" type="button" name="button" style="margin-top: -12px;width:101px;height:26px;border:2px solid #c8c8c8;font-size:13px;border-radius:15px;background:#fff;margin-left:13px" ng-click="showAlllist(tr.orgid)" ng-disabled="tr.showDetails"> View details</button> </div>';

                  google.maps.event.addListener(marker, 'click', function(){
                    //  var contentString='<div class= "layout" style="padding-left:20px;height:323px;width:227px;overflow-y:hidden"><div id="truck" class="truck" style="padding-top:10px;background-image: url(images/TileView/'+tr.icon+'.png);height:300px;width:200px;box-shadow: 3px 3px  3px 3px #888888;margin-top:15px" ><p style="color:#fff;font-size:18px;margin-left: 13px;"> Truck ID : '+tr.orgid+'</p><p style="color:#fff;font-size:13px;margin-left: 13px;margin-top:-12px">cargo: '+tr.carrier+'</p><p style="color:#fff;font-size:18px;margin-left: 13px;">ETA</p><p style="color:#fff;font-size:35px;margin-top: -16px;margin-left: 13px;">23.45 Hrs</p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Temperature Status :'+ tr.temp+'</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p>   <p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Humidity Status : '+tr.humid+'</p> <p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p> <p><button id="{{tr.orgid}}" type="button" name="button" style="margin-top: -12px;width:101px;height:26px;border:2px solid #c8c8c8;font-size:13px;border-radius:15px;background:#fff;margin-left:13px" ng-click="showAlllist(tr.orgid)" ng-disabled="tr.showDetails"> View details</button> </div>';
                     var contentString='<div class="layout" style="padding-left:20px;height:325px;width:240px;overflow-y:hidden;overflow-x:hidden" ><div id="truck" class="truck" style="padding-top:10px;background-image: url(images/'+tr.icon+'.png);height:300px;width:200px;box-shadow: 3px 3px  3px 3px #888888;margin-top:15px" ><p style="color:#fff;font-size:18px;margin-left: 13px;"> Truck ID :'+tr.orgid+'</p><p style="color:#fff;font-size:13px;margin-left: 13px;margin-top:-12px">Company Name:'+tr.carrier+'</p><p style="color:#fff;font-size:18px;margin-left: 13px;">ETA</p><p style="color:#fff;font-size:35px;margin-top: -16px; margin-left: 13px;">'+tr.eta+'Hrs</p><p style="color:grey;font-size:14px; margin-left: 13px;">Temperature Status :<span style="font-weight:bold;color:'+tr.tempc+'">'+tr.temp+'</span></p><p style="border-bottom: 1px solid grey;margin-top: -11px; margin-bottom: -5px;"></p><p style="color:grey;font-size:14px; margin-left: 13px;">Humidity Status :<span style="font-weight:bold;color:'+tr.humidc+'">'+tr.humid+'</span></p><p style="border-bottom: 1px solid grey;margin-top: -11px; margin-bottom: -5px;"></p><p style="color:#5d5d5d;font-size:14px; margin-left: 13px;">Shelf life: '+tr.slife +'Hrs</p><p style="border-bottom: 1px solid grey;margin-top: -11px; margin-bottom: -5px;"></p><p><button id="one" type="button" name="button" style="margin-top: -12px;width:101px;height:26px;border:2px solid #c8c8c8;font-size:13px;border-radius:15px;background:#fff;margin-left:13px" ng-click="showAlllist(\''+id+'\')" ng-disabled="tr.showDetails"> View details</button></div></div>';

                     var compiled = $compile(contentString)($scope);
                      var infoWindow = new google.maps.InfoWindow({ content: compiled[0]});
                      infoWindow.open($scope.map, marker);
                  });

                $scope.markers.push(marker);

               }


              for (var i = 0; i <$scope.allTrucksDetails.length; i++){
             var lat=(Math.random() * 20) + 31;
              var lang=(Math.random() * 56) + 70;

              lang=-lang;


             console.log("id of truck::"+$scope.allTrucksDetails[i].icon);


                 if(($scope.allTrucksDetails[i].humid==="Critical") || ($scope.allTrucksDetails[i].temp==="Critical"))
                   {
                     iconpath2='Critical';
                   //  $scope.critical=$scope.critical+1;
                      iconpath='../../images/critical_pin.png';
                   }

                   else
                   {
                    iconpath2='Good';
                     // $scope.good=$scope.good+1;
                      iconpath='../../images/good_pin.png';
                   }


                    if(i==0)
                    {
                      iconpath='../../images/offline_pin.png';
                      lat=40.7127;
                      lang=-74.0059;
                    }

                     if($scope.allTrucksDetails[i].humid==="Average")
                   {

                    iconpath='../../images/average_pin.png';

                   }

                    if(i==1)
                    {
                    	// live device's location detail
                    	lat = 37.3541;
                    	lang = -121.9552;
                      //lat=43.0500;
                      //lang=-87.9500;
                    }
                    if($scope.allTrucksDetails[i].orgid != undefined)
                    {
                      createmarker($scope.allTrucksDetails[i],lat,lang,$scope.allTrucksDetails[i].orgid);
                    }



                
                //  $scope.markers.push(marker);
               }


            //            var marker = new google.maps.Marker({
            //           map: $scope.map,
            //           position: new google.maps.LatLng(32.78,-123.789),
            //           title:"b8_27_eb_e6",
            //           icon:'../../images/Mapview/offline_pin.png',
            //       });
            //     // marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            // //marker.content ='<div class= "layout" style="padding-left:20px;height:323px;width:227px;overflow-y:hidden"><div id="truck" class="truck" style="padding-top:10px;background-image: url(images/TileView/offline.png);height:300px;width:200px;box-shadow: 3px 3px  3px 3px #888888;margin-top:15px" ><p style="color:#fff;font-size:18px;margin-left: 13px;"> Truck ID : b8_27_eb_e6</p><p style="color:#fff;font-size:13px;margin-left: 13px;margin-top:-12px">cargo: NA</p><p style="color:#fff;font-size:18px;margin-left: 13px;">ETA</p><p style="color:#fff;font-size:35px;margin-top: -16px;margin-left: 13px;">23.45 Hrs</p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Temperature Status : NA</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p>   <p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Humidity Status : NA</p> <p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Air Quality: Good</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p><p><button style="margin-top: -12px;width:101px;height:26px;border:2px solid #c8c8c8;font-size:13px;border-radius:15px;background:#fff;margin-left:13px"> View details</button></div>';

            //       google.maps.event.addListener(marker, 'click', function(){
            //         var contentString='<div class= "layout" style="padding-left:20px;height:323px;width:227px;overflow-y:hidden"><div id="truck" class="truck" style="padding-top:10px;background-image: url(images/TileView/offline.png);height:300px;width:200px;box-shadow: 3px 3px  3px 3px #888888;margin-top:15px" ><p style="color:#fff;font-size:18px;margin-left: 13px;"> Truck ID : b8_27_eb_e6</p><p style="color:#fff;font-size:13px;margin-left: 13px;margin-top:-12px">cargo: NA</p><p style="color:#fff;font-size:18px;margin-left: 13px;">ETA</p><p style="color:#fff;font-size:35px;margin-top: -16px;margin-left: 13px;">23.45 Hrs</p><p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Temperature Status : NA</p><p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p>   <p style="color:#5d5d5d;font-size:14px;margin-left: 13px;">Humidity Status : NA</p> <p style="border-bottom: 1px solid grey;margin-top: -11px;margin-bottom: -5px;"></p></div>';
            //           var compiled = $compile(contentString)($scope);
            //           var infoWindow = new google.maps.InfoWindow({ content: compiled[0]});
            //           infoWindow.open($scope.map, marker);
            //       });

            //       $scope.markers.push(marker);





        });

};




    //$interval($scope.getUpdates, 1000*10);



              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }


        // callback for when the Open button is clicked
        $scope.openContext = function (contextDetails) {

            // need to clean up the context details so it doesn't have the infinite parent/children cycle,
            // which causes problems later (can't interpolate: {{context}} TypeError: Converting circular structure to JSON)
            var newContext = angular.copy(contextDetails);
            newContext.children = [];
            newContext.parent = [];

            // url end point can change from context to context
            // so the same card can display different data from different contexts

            var url = {
                'parent': {
                    'datagrid-data': '/sample-data/datagrid-data.json'
                },
                'child': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child2': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise0.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child3': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise1.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                }
            };

            newContext.urls = url[newContext.id];

            $scope.context = newContext;

            //Tag string can be classification from contextDetails
            PredixViewService.getDecksByTags(newContext.classification) // gets all decks for this context
                .then(function (decks) {
                    $scope.decks = [];

                    if (decks && decks.length > 0) {
                        decks.forEach(function (deck) {
                            $scope.decks.push({name: deck.title, id: deck.id});
                        });
                    }
                });
        };

        $scope.viewServiceBaseUrl = PredixViewService.baseUrl;

        $scope.getChildren = function (parent, options) {
            return PredixAssetService.getAssetsByParentId(parent.id, options);
        };

        $scope.handlers = {
            itemOpenHandler: $scope.openContext,
            getChildren: $scope.getChildren
            // (optional) click handler: itemClickHandler: $scope.clickHandler
        };
    }]);
});
