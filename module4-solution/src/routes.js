(function () {
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'src/main.html'
        })
        .state('categories', {
            url: '/categoryList',
            templateUrl: 'src/menu.html',
            controller: 'CategoryController as categoryList',
            resolve: {
                items: ['MenuDataService', (MenuDataService) => {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('categories.items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/itemList.html',
            controller: 'ItemController as item',
            resolve: {
                items: ['$stateParams', 'MenuDataService', ($stateParams, MenuDataService) => {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }

        })
    }
})();