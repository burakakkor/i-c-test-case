(function () {
    'use strict';

    angular.module('okan')
        .constant('_', ['$window', function($window) {
            return $window._;
        }]);
})();