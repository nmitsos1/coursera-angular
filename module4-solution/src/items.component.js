(function () {
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/item.html',
        bindings: {
            items: '<'
        }
    })
})();