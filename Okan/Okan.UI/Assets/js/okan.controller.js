(function () {
    'use strict';

    angular.module('okan')
        .controller('main', main);

    main.$inject = [
        '$scope',
        'cartService',
        'drinkService',
        'alertService'
    ];

    function main($scope, cartService, drinkService, alertService) {

        var vm = this;

        vm.cart = {};
        vm.drinks = [];

        vm.alert = {
            status: '',
            message: '',
            show: false
        };

        vm.addDrink = addDrink;
        vm.removeDrink = removeDrink;
        vm.checkoutCart = checkoutCart;

        $scope.$on('updateCart', function () { getCart(); });

        initialize();

        function initialize() {
            getCart();

            drinkService.getDrinks().then(function (response) {
                vm.drinks = response;
            });
        }

        function addDrink(drink) {
            cartService.addDrink(drink);
        }

        function removeDrink(drink) {
            cartService.removeDrink(drink);
        }

        function getCart() {
            vm.cart = cartService.getCart();
        }

        function checkoutCart() {
            cartService.checkoutCart(vm.cart).then(function() {
                vm.alert = alertService.getSuccess('Your drinks will be shipped soon. :)');
            }, function() {
                vm.alert = alertService.getError('An error occured. Please try again. :(');
            });
        }
    }
})()