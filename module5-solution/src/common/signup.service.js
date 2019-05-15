(function () {
    angular
    .module('common')
    .service('UserInputService', UserInputService);

    function UserInputService () {
        var service = this;
        service.UserInput = {
            user: {
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
            },
            shortname: ''
        };
        service.getUserInput = function () {
            return service.UserInput;
        }
        service.updateUserInput = function (input) {
            service.UserInput = input;
        };

    }
})();