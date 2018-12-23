'use strict';
// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['Phone', '$routeParams',
            function PhoneDetailController(Phone, $routeParams) {
                this.phoneId = $routeParams.phoneId;

                // data model ? 
                var self = this;
                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl
                };

                // on Init?
                self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                    self.setImage(phone.images[0]);
                });

            }]
    });