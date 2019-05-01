(function () {
    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['items'];
    function CategoryController(items) {
        this.items = items.data;
    }
})();