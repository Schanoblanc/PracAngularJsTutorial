'use strict';
angular.module('phoneDetail',[
    //phone detail use routeParams, coming from ngRoute. So its better to expiclity refer 
    //ngRoute, which help to enhance flexibilty when we reuse the code.
    'ngRoute',
    'core.phone' 
]);