(function () {
    angular
    .module('public')
    .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['myInfo', 'ApiPath'];
    function MyinfoController(myInfo, ApiPath) {

        var $ctrl = this;
        $ctrl.signupInputData = myInfo;

        if($ctrl.signupInputData.registered){
            $ctrl.showInfo = true;
        } else {
            $ctrl.showInfo = false;
        }
    }
})();