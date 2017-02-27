(function () {
    'use strict';

    angular.module('okan')
        .factory('cartService', cartService)
        .factory('drinkService', drinkService);

    cartService.$inject = ['$http', '$rootScope', '$cookies', '$cookieStore'];
    drinkService.$inject = ['$http'];

    function cartService($http, $rootScope, $cookies, $cookieStore) {

        function addDrink(drink) {
            var cart = $cookieStore.get('cart');

            // Find drink in cart
            var itemInCart = _.find(cart.drinks, function (d) { return d.drink.id === drink.id; });

            if (itemInCart) { // If it is already in cart
                itemInCart.count++;
            }
            else { // If it is not in cart
                cart.drinks.push({ drink: drink, count: 1 });
            }

            $cookieStore.put('cart', cart); // update cookie

            $rootScope.$broadcast('updateCart'); // update cart
        }

        function removeDrink(drink) {
            var cart = $cookieStore.get('cart');

            // Find drink in cart
            var itemInCart = _.find(cart.drinks, function (d) { return d.drink.id === drink.id; });

            if (itemInCart) { // If it is in cart
                itemInCart.count--;

                // If count is 0, remove item from array
                if (itemInCart.count === 0) {
                    cart.drinks = _.reject(cart.drinks, function (d) { return d.drink.id === drink.id; });
                }
            }

            $cookieStore.put('cart', cart); // update cookie

            $rootScope.$broadcast('updateCart'); // update cart
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
            $rootScope.$broadcast('updateProcess', true); // disable checkout button

            return $http.post('api/cart', cart).then(function(response) {
                $cookieStore.remove('cart');

                $rootScope.$broadcast('updateAlert', { status: 'success', message: 'Your items will be shipped soon :)', show: true }); // enable success alert
                $rootScope.$broadcast('updateCart'); // update cart

                return response;
            }).catch(function (response) {
                $rootScope.$broadcast('updateAlert', { status: 'danger', message: 'An error occurred :(', show: true }); // enable error alert
            })
            .finally(function () {
                $rootScope.$broadcast('updateProcess', false); // enable checkout button
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
})();
