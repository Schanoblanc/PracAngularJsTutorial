'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', [
    // which depends on te phone list module
    'ngRoute',
    'ngAnimate',
    'phoneDetail',
    'phoneList',
    'core'
]);
