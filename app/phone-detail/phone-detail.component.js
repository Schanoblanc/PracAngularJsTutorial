'use strict';
// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$http', '$routeParams',
            function PhoneDetailController($http, $routeParams) {
                this.phoneId = $routeParams.phoneId;

                var self = this;
                $http.get('phones/' + this.phoneId + '.json')
                    .then(function (response) {
                        self.phone = response.data;
                    })
            }]
    });