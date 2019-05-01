(function () {
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/categoryList.html',
        bindings: {
            items: '<'
        }
    });
})();