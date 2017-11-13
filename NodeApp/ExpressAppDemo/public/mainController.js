(function(){
    'use strict';
    angular
        .module('mainApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope'];
    
    function mainController($scope) {
        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _init;

        function _init() {
            console.log('main controller init');
        }

    }
})();