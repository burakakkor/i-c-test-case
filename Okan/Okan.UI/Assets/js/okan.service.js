(function () {
    'use strict';

    angular.module('okan')
        .factory('cartService', cartService)
        .factory('drinkService', drinkService)
        .factory('alertService', alertService);

    cartService.$inject = ['$http', '$rootScope', '$cookies', '$cookieStore'];
    drinkService.$inject = ['$http'];

    function cartService($http, $rootScope, $cookies, $cookieStore) {

        function addDrink(drink) {
            var cart = $cookieStore.get('cart');

            var itemInCart = _.find(cart.drinks, function (d) { return d.drink.id === drink.id; });

            if (!itemInCart) {
                cart.drinks.push({ drink: drink, count: 1 });
            }
            else {
                itemInCart.count++;
            }

            $cookieStore.put('cart', cart);

            $rootScope.$broadcast('updateCart');
        }

        function removeDrink(drink) {
            var cart = $cookieStore.get('cart');

            var itemInCart = _.find(cart.drinks, function (d) { return d.drink.id === drink.id; });

            if (itemInCart) {
                itemInCart.count--;

                if (itemInCart.count === 0) {
                    cart.drinks = _.reject(cart.drinks, function (d) { return d.drink.id === drink.id; });
                }
            }

            $cookieStore.put('cart', cart);

            $rootScope.$broadcast('updateCart');
        }

        function getCart() {
            var cart = $cookieStore.get('cart');

            if (!cart) {
                cart = { id: 0, drinks: [] };

                $cookieStore.put('cart', cart);
            }

            return cart;
        }

        function checkoutCart(cart) {
            return $http.post('api/cart', cart).then(function (response) {
                $cookieStore.remove('cart');

                $rootScope.$broadcast('updateCart');

                return response;
            });
        }

        return {
            addDrink: addDrink,
            removeDrink: removeDrink,
            getCart: getCart,
            checkoutCart: checkoutCart
        };
    }

    function drinkService($http) {

        function getDrinks() {
            return $http.get('api/drink').then(function (response) {
                return response.data;
            });
        }

        return {
            getDrinks: getDrinks
        };
    }

    function alertService() {

        function getSuccess(message) {
            return { status: 'success', message: message, show: true };
        }

        function getError() {
            return { status: 'error', message: message, show: true };
        }

        return {
            getSuccess: getSuccess,
            getError: getError
        };
    }
})();
