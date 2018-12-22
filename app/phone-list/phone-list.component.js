'use strict';
// Register `phoneList` component, 
// along with its associated controller and template
angular.module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ["$http",function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';
            $http.get('phones/phones.json').then(function(response){
                self.phones = response.data;
                // slice can be add after for only show part of data
            });

        }]
    });

angular.module('phoneList').
    component('greeting', {
        template:
            '<span>Hello, {{$ctrl.user}}</span>',
        controller: function Greeting() {
            this.user = 'Arsenic';
        }
    });