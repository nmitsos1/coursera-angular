(function () {
    angular.module('MenuApp')
    .controller('ItemController', ItemController);

    ItemController.$inject=['$stateParams','items'];
    function ItemController($stateParams, items) {
        this.subMenu = items.data.menu_items;
        this.name = items.data.category.name;
    }
})();