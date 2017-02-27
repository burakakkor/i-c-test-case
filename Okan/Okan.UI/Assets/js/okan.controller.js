(function () {
    'use strict';

    angular.module('okan')
        .controller('main', main);

    main.$inject = [
        '$scope',
        'cartService',
        'drinkService'
    ];

    function main($scope, cartService, drinkService) {

        var vm = this;

        vm.cart = {};
        vm.drinks = [];

        vm.alert = { status: '', message: '', show: false };

        vm.process = false;

        vm.addDrink = addDrink;
        vm.removeDrink = removeDrink;
        vm.checkoutCart = checkoutCart;

        $scope.$on('updateCart', function () { getCart(); });
        $scope.$on('updateProcess', function (event, value) { vm.process = value; });
        $scope.$on('updateAlert', function(event, value) { vm.alert = value; });

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
            cartService.checkoutCart(vm.cart);
        }
    }
})()