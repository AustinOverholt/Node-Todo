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
        vm.addTodo = _addTodo;
        vm.editTodo = _editTodo;
        vm.deleteTodo = _deleteTodo;

        function _init() {
            console.log('main controller init');
            _getTodo();
        }

        function _addTodo() {
            console.log('add todo clicked');
        }

        function _getTodo() {
            console.log('get todo ran');
        }

        function _editTodo() {
            console.log('edit todo clicked');
        }

        function _deleteTodo() {
            console.log('delete todo clicked');
        }



    }
})();