/*global define */
define(['angular', './sample-module'], function (angular, module) {
    'use strict';
    /**
    * PredixViewService is a sample angular service that integrates with Predix View Service API
    */
    module.factory('TruckService', ['$http', '$q', function ($http, $q) {
        return {
            map:'',
            directionDisplay:'',
            directionsService:'',
            stepDisplay:'',
            markerArray: [],
            position:'',
            marker: null,
            polyline :null,
            poly2: null,
            speed: 0.000005,
            wait: 1,
            infowindow :null,
            timerHandle: null,

            step : 50, // 5; // metres
            tick : 500, // milliseconds
            eol:'',
            k : 0,
            stepnum : 0,
            speed : "",
            lastVertex : 1,

            car : "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z",
            icon :{
              path: this.car,
              scale: .7,
              strokeColor: 'white',
              strokeWeight: .10,
              fillOpacity: 1,
              fillColor: '#FF0000',
              offset: '5%',
              // rotation: parseInt(heading[i]),
              anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            },


            createMarker : function (latlng, label, html) {
                      var contentString = '<b>' + label + '</b><br>' + html;
                      self=this;
                      this.marker = new google.maps.Marker({
                        position: latlng,
                       // map: self.map,
                        title: label,
                        zIndex: Math.round(latlng.lat() * -100000) << 5
                      });
                      this.marker.myname = label;
                      google.maps.event.addListener(self.marker, 'click', function() {
                        infowindow.setContent(contentString);
                        infowindow.open(map, self.marker);
                      });

                      var tempMarker = self.marker;
                      //self.marker.setMap(null);
                      return tempMarker;
                    },
            initialize: function (map) {
                      
                      this.directionsService = new google.maps.DirectionsService();

                      this.map = map;

                      

                      // Create a renderer for directions and bind it to the map.
                      var rendererOptions = {
                        map: map
                      };
                      this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

                      

                      this.polyline = new google.maps.Polyline({
                        path: [],
                        //strokeColor: '#FF0000',
                        strokeWeight: 3
                      });

                      this.poly2 = new google.maps.Polyline({
                        path: [],
                        //strokeColor: '#FF0000',
                        strokeWeight: 3
                      });
                    },
            steps:[],
            calcRoute : function(src,des){
                      var self =this;

                      var deferred = $q.defer();

                      if (self.timerHandle) {
                        clearTimeout(self.timerHandle);
                      }
                      if (self.marker) {
                        this.marker.setMap(null);
                      }
                      //this.polyline.setMap(null);
                      //this.poly2.setMap(null);
                      //this.directionsDisplay.setMap(null);
                      this.polyline = new google.maps.Polyline({
                        path: [],
                        strokeColor: '#FF0000',
                        strokeWeight: 3
                      });
                      this.poly2 = new google.maps.Polyline({
                        path: [],
                        strokeColor: '#FF0000',
                        strokeWeight: 3
                      });
                      // Create a renderer for directions and bind it to the map.
                      var rendererOptions = {
                        map: self.map,
                        suppressMarkers: true
                      };
                      self.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

                      var start = new google.maps.LatLng(src) ;
                      var end = new google.maps.LatLng(des);
                      var travelMode = google.maps.DirectionsTravelMode.DRIVING;

                      var request = {
                        origin: start,
                        destination: end,
                        travelMode: travelMode
                      };

                      // Route the directions and pass the response to a
                      // function to create markers for each step.
                      self.directionsService.route(request, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                          self.directionsDisplay.setDirections(response);

                          //var bounds = new google.maps.LatLngBounds();
                          var route = response.routes[0];
                          self.startLocation = new Object();
                          self.endLocation = new Object();

                          // For each route, display summary information.
                          var path = response.routes[0].overview_path;
                          var legs = response.routes[0].legs;
                          for (var i = 0; i < legs.length; i++) {
                            if (i === 0) {
                              self.startLocation.latlng = legs[i].start_location;
                              self.startLocation.address = legs[i].start_address;
                                  self.marker = self.createMarker(legs[i].start_location, "start", legs[i].start_address, "green");
                            }
                            self.endLocation.latlng = legs[i].end_location;
                            self.endLocation.address = legs[i].end_address;
                            var steps = legs[i].steps;
                            for (var j = 0; j < steps.length; j++) {
                              var nextSegment = steps[j].path;
                              for (var k = 0; k < nextSegment.length; k++) {
                                self.polyline.getPath().push(nextSegment[k]);
                                //bounds.extend(nextSegment[k]);
                              }
                            }
                          }
                          //self.polyline.setMap(self.map);
                          //self.map.fitBounds(bounds);
                          //self.map.setZoom(18);
                          self.startAnimation();
                          deferred.resolve("worked");
                        }
                        deferred.reject('Error fetching routes ');
                      });

                      return deferred.promise;
            },
            animate: function(d) {
                      console.log("this is an animate function");
                      self=this;
                      self.icon ={
              path: this.car,
              scale: .7,
              strokeColor: 'white',
              strokeWeight: .10,
              fillOpacity: 1,
              fillColor: '#FF0000',
              offset: '5%',
              // rotation: parseInt(heading[i]),
              anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            };
                      if (d > self.eol) {
                        //self.map.panTo(endLocation.latlng);
                        self.marker.setPosition(self.endLocation.latlng);
                        return;
                      }
                      var p = self.polyline.GetPointAtDistance(d);
                      //self.map.panTo(p);
                      var lastPosn = self.marker.getPosition();
                      self.marker.setPosition(p);
                      var heading = google.maps.geometry.spherical.computeHeading(lastPosn, p);
                      self.icon.rotation = heading;
                      self.marker.setIcon(self.icon);
                      self.updatePoly(d);
                      self.timerHandle = setTimeout(function(){
                        self.animate(d+self.step);
                      }, self.tick);
                    },
            startAnimation: function() {
                      self=this;
                      self.eol = self.polyline.Distance();
                      //self.map.setCenter(polyline.getPath().getAt(0));
                      self.marker = new google.maps.Marker({
                        position: self.polyline.getPath().getAt(0),
                        map: self.map,
                        icon: self.icon
                      });

                      self.poly2 = new google.maps.Polyline({
                        path: [self.polyline.getPath().getAt(0)],
                        //strokeColor: "#0000FF",
                        strokeWeight: 10
                      });
                      // map.addOverlay(poly2);
                      setTimeout(function(){
                        self.animate(50);
                      }, 2000); // Allow time for the initial map display
                    },
            updatePoly: function(d) {
                        self =this;
                      // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
                      if (self.poly2.getPath().getLength() > 20) {
                        self.poly2 = new google.maps.Polyline([polyline.getPath().getAt(self.lastVertex - 1)]);
                        // map.addOverlay(poly2)
                      }

                      if (self.polyline.GetIndexAtDistance(d) < self.lastVertex + 2) {
                        if (self.self.poly2.getPath().getLength() > 1) {
                          self.poly2.getPath().removeAt(self.poly2.getPath().getLength() - 1);
                        }
                        self.poly2.getPath().insertAt(self.poly2.getPath().getLength(), self.polyline.GetPointAtDistance(d));
                      } else {
                        self.poly2.getPath().insertAt(self.poly2.getPath().getLength(), self.endLocation.latlng);
                      }
                    }

        };
    }]);
});
