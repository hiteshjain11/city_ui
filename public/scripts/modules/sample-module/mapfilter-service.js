/*global define */
define(['angular', './sample-module'], function (angular, module) {
    'use strict';
    /**
    * PredixViewService is a sample angular service that integrates with Predix View Service API
    */
    module.factory('MapFilterService', ['$state', function ($state) {


        return {
            fitlertype:'null',
            updateFilterType : function(typefilter) {
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
                    }

        };
    }]);
});
