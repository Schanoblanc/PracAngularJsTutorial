'use strict';
// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail')
.component('phoneDetail',{
    templateUrl: 'phone-list/phone-detail.template.html',
    controller: ['$routeParam', function phoneDetailController($routeParam){
        this.phoneId = $routeParam.phoneId;
    }]
});