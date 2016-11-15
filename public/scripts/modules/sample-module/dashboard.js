define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controllers definition
     controllers.controller('DashboardController', ['$scope','$log', 'PredixAssetService', 'PredixViewService','$http','$interval','$compile','$window','dataFactory','$timeout', function ($scope,$log, PredixAssetService, PredixViewService,$http,$interval,$compile,$window,dataFactory,$timeout) {
         
         //alert("hi");
         $scope.showSpinner1=false;
         $scope.showSpinner2=false;
         $scope.showSpinner3=false;
         $scope.showSpinner4=false;
         $scope.binresponse="";
         $scope.truckresponse="";
         $scope.hosiptalresponse="";
         $scope.hospitalsingle="";
         $scope.hospitalindex=0;
         $scope.TankActionvalue="pH";
         $scope.HospitalActionvalue="bed";
         $scope.BinActionvalue="binimage"
         $scope.binempty="";
         $scope.binmedium="";
         $scope.binfull="";
         $scope.tankresponse=""; 
         $scope.tankempty="";
         $scope.tankmedium="";
         $scope.tankfull="";
         $scope.CurrentTime="";
         $scope.tickInterval = 1000;
         $scope.healthmetervalue=0;
         $scope.bingreen=false;
         $scope.binred=false;
         $scope.tankgreen=false;
         $scope.tankred=false;
         $scope.hospitalgreen=false;
         $scope.hospitalred=false;
         $scope.truckgreen=false;
         $scope.truckred=false;
         $scope.getBins = function(){
             $scope.showSpinner1=true;
             PredixViewService.getBins().then(
                    function(data)
                    {
                       $scope.showSpinner1=false;                        
                       $scope.binresponse=data.data; 
                       $scope.binempty=$scope.binresponse.fillageLow;
                       $scope.binmedium=$scope.binresponse.fillageMedium;
                       $scope.binfull=$scope.binresponse.fillageHigh;
                        console.log("$scope.binresponse",$scope.binresponse);
                    }
                );
         }
         $scope.getTanks = function(){
             $scope.showSpinner2=true;
             PredixViewService.getTanks().then(
                    function(data)
                    {
                       $scope.showSpinner2=false;                        
                       $scope.tankresponse=data.data; 
                       $scope.tankempty=$scope.tankresponse.pHLow;
                       $scope.tankmedium=$scope.tankresponse.pHMedium;
                       $scope.tankfull=$scope.tankresponse.pHHigh;
                        console.log("$scope.binresponse",$scope.binresponse);
                    }
                );
         }
         $scope.changeBin = function(binvalue){
             if(binvalue == "binimage"){
                $scope.binempty=$scope.binresponse.fillageLow;
                $scope.binmedium=$scope.binresponse.fillageMedium;
                $scope.binfull=$scope.binresponse.fillageHigh;
            }else{
                $scope.binempty=$scope.binresponse.gasLow;
                $scope.binmedium=$scope.binresponse.gasMedium;
                $scope.binfull=$scope.binresponse.gasHigh;
            }
         }
         $scope.changeTank = function(binvalue){
             if(binvalue == "pH"){
                $scope.tankempty=$scope.tankresponse.pHLow;
                $scope.tankmedium=$scope.tankresponse.pHMedium;
                $scope.tankfull=$scope.tankresponse.pHHigh;
            }else if(binvalue == "Turbidity"){
                $scope.tankempty=$scope.tankresponse.turbidityLow;
                $scope.tankmedium=$scope.tankresponse.turbidityMedium;
                $scope.tankfull=$scope.tankresponse.turbidityHigh;
            }else if(binvalue == "Chlorine"){
                $scope.tankempty=$scope.tankresponse.chlorineLow;
                $scope.tankmedium=$scope.tankresponse.chlorineMedium;
                $scope.tankfull=$scope.tankresponse.chlorineHigh;
            }else{
                $scope.tankempty=$scope.tankresponse.leadLow;
                $scope.tankmedium=$scope.tankresponse.leadMedium;
                $scope.tankfull=$scope.tankresponse.leadHigh;
            }
         }
         
         $scope.getTruckData = function(){
             $scope.showSpinner4=true;
             PredixViewService.getTrucksData().then(
                    function(data)
                    {
                       $scope.showSpinner4=false;                        
                       $scope.truckresponse=data.data; 
                    }
                );
         }
         $scope.shownext = function(){
             $scope.hospitalindex++;
             $scope.hospitalsingle=$scope.hosiptalresponse[$scope.hospitalindex];
         }
         $scope.showprevious = function(){
             $scope.hospitalindex--;
             $scope.hospitalsingle=$scope.hosiptalresponse[$scope.hospitalindex];
         }
         $scope.changeHospital = function(hospital){
             if(hospital == "bed"){
                 _.each($scope.hosiptalresponse,
                        function(tab)
                        {
                            tab.showtop = false;
                        }
                   );
             }else{
                 _.each($scope.hosiptalresponse,
                    function(tab)
                    {
                        tab.showtop = true;
                    }
                   );
             }
             
         }
         $scope.getHosiptalData = function(){
             $scope.showSpinner3=true;
             PredixViewService.getHosiptalData().then(
                    function(data)
                    {
                       $scope.showSpinner3=false; 
                        $scope.hosiptalresponse=data.data; 
                       $scope.hospitalsingle=$scope.hosiptalresponse[0];
                        $scope.hospitalindex=1;
                    }
                );
         }
         $scope.getNotification = function(){
             PredixViewService.getNotification().then(
                    function(data)
                    {
                       console.log("data",data);
                        var res=data.data;
                        if(res.bins>0){
                            $scope.binred=true;
                            $scope.binredvalue=res.bins;
                        }else{
                            $scope.bingreen=true;
                        }
                        if(res.tank>0){
                            $scope.tankred=true; 
                            $scope.tankredvalue=res.tank;
                        }else{
                            $scope.tankgreen=true;
                        }
                        if(res.hospital>0){
                            $scope.hospitalred=true;
                            $scope.hospitalredvalue=res.hospital;
                        }else{
                            $scope.hospitalgreen=true;
                        }
                        if(res.transport>0){
                            $scope.truckred=true; 
                            $scope.truckredvalue=res.transport; 
                        }else{
                            $scope.truckgreen=true;
                        }
                    }
                );
         }
         $scope.init=function(){
             $scope.getNotification();
             $scope.getBins();
             $scope.getTanks();
             $scope.getHosiptalData();
             $scope.getTruckData();
             PredixViewService.getHealthMeterData().then(
                    function(data)
                    {
                       $scope.healthmetervalue=data.data; 
                    }
            );
        }
         
        var tick = function () {
            $scope.CurrentTime = Date.now() // get the current time
            $timeout(tick, $scope.tickInterval); // reset the timer
        }
        $timeout(tick, $scope.tickInterval);
    // Start the timer
         
         $scope.init();
          }]);
    });