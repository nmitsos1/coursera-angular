(function () {
    angular.module('public')
    .controller('signupController', signupController);

    signupController.$inject = ['MenuService', 'UserInputService'];
    function signupController (MenuService, UserInputService) {

        var $ctrl = this;
        $ctrl.signup = {};
        $ctrl.itemFound = null;

        $ctrl.submit = function () {
            var serviceItemPromise = MenuService.getItemById($ctrl.signup.shortname);
            serviceItemPromise.then(function (response) {
                $ctrl.itemFound = true;
                $ctrl.signup.registered = true;
                $ctrl.signup.favoriteDish = response;
                UserInputService.updateUserInput($ctrl.signup);
            }).catch(function (error) {
                $ctrl.itemFound = false;
                $ctrl.signup.registered = false;
            });
        }
    }
})();