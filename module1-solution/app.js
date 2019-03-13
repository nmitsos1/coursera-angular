(function () {
    'use strict';

    angular.module('myApp', [])

    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.name = "Nicholas";
        $scope.inputLunch = "";
        $scope.response = "";
        $scope.checkInput = function () {
            // var itemCount = $scope.inputLunch.length == 0 ? 0 : $scope.inputLunch.split(',').length;
            // This does NOT consider an empty item, i.e., , , as an item
            var itemCount = 0;
            if ($scope.inputLunch.length!=0) {
                var array = $scope.inputLunch.split(',');
                for (var i=0; i<array.length; i++) {
                    itemCount = array[i].trim() == '' ? itemCount : (itemCount+1);
                }
            }
            if (itemCount > 3) {
                $scope.response = "Too Much!";
                $scope.customStyle = { "color":"green" };
                $scope.inputStyle = { "border-color":"green" };
            } else if (itemCount > 0) {
                $scope.response = "Enjoy!";
                $scope.customStyle = { "color":"green" };
                $scope.inputStyle = { "border-color":"green" };
            } else {
                $scope.response = "Please enter data first";
                $scope.customStyle = { "color":"red" };
                $scope.inputStyle = { "border-color":"red" };
            }
        }
    };
})();