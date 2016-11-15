/*global define */
define(['angular', './sample-module'], function (angular, module) {
    'use strict';
    /**
    * PredixViewService is a sample angular service that integrates with Predix View Service API
    */
    module.factory('PredixViewService', ['$http', '$q', function ($http, $q) {
        return {
            baseUrl: '/api/view-service',
            getDecksByTags: function (tags) {
                var deferred = $q.defer();
                $http.get(this.baseUrl + '/decks/tags?values=' + tags + '&filter[order]=createTimeStamp ASC')
                    .then(function (res) {
                        deferred.resolve(res.data);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ' + tags);
                    });
                return deferred.promise;
            },
            getTrucksData: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcitytransport.run.aws-usw02-pr.ice.predix.io/allTransport')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            },
            getHosiptalData: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcityhospital.run.aws-usw02-pr.ice.predix.io/allHospitals')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            },
            getBins: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcitybins.run.aws-usw02-pr.ice.predix.io/allBinsWithCountOfFillage')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            },
            getTanks: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcitytank.run.aws-usw02-pr.ice.predix.io/allTankWithCountOfFillage')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            },
            getHealthMeterData: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcitynotification.run.aws-usw02-pr.ice.predix.io/healthMeterNotification')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            },
            getNotification: function () {
                var deferred = $q.defer();
                $http.get('https://tcssmartcitynotification.run.aws-usw02-pr.ice.predix.io/unattendedNotificationBasedonType')
                    .then(function (res) {
                        deferred.resolve(res);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ');
                    });
                return deferred.promise;
            }
        };
    }]);
});
