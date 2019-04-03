(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('angularDollars', AngularDollarsFilter);

    function AngularDollarsFilter () {
        return function(input) {
          return '$$$' + input.toFixed(2);
        };
    };

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

    function ShoppingListCheckOffService () {
        this.toBuyArray = [
            { name: "Cookies", quantity: 10, price: .5 },
            { name: "Orange Juice Container", quantity: 1, price: 5 },
            { name: "Milk Jugs", quantity: 3, price: 4 },
            { name: "Loafs of Bread", quantity: 5, price: 3 },
            { name: "Cheese Slices", quantity: 30, price: .1 },
            { name: "Frozen Meals", quantity: 10, price: 6 },
            { name: "Apples", quantity: 8, price: 1 },
            { name: "Bananas", quantity: 6, price: 1 }
        ];
        this.boughtArray = [];
        
        this.updateArrays = function (index) {
            this.boughtArray.push(this.toBuyArray[index]);
            this.toBuyArray.splice(index, 1);
        };
    }
    
    function ToBuyController($scope, ShoppingListCheckOffService) {
        this.stillToBuyArray = ShoppingListCheckOffService.toBuyArray;
        
        this.checkOffList = function(index) {
            ShoppingListCheckOffService.updateArrays(index);
        };
    }
    
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        this.purchasedArray = ShoppingListCheckOffService.boughtArray;
    }
})();