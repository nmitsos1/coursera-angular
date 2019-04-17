(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])

    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService ($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = [];
                var menuItems = result.data.menu_items;
            
                menuItems.forEach(function (item) {
                    if (item.description.indexOf(searchTerm) > 0)
                        foundItems.push(item);
                });
                // return processed items
                console.log(foundItems)
                return foundItems;
            });
        };
    }
    
    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = [];
        ctrl.getMatchedMenuItems = function(){
            var find = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
            find.then(function (response) {
                ctrl.found = response;
            })
        };

        ctrl.removeItem = function(index){
            ctrl.found.splice(index,1);
        }
    }

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            replace: true,
            scope: {
                foundItems: '<',
                onRemove: '@'
            }
          // controller: 'ShoppingListDirectiveController as list',
        };
      
        return ddo;
      }
    
})();