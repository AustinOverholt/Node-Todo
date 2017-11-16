(function(){
    'use strict';
    angular
        .module('mainApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'mainService'];
    
    function mainController($scope, mainService) {
        var vm = this;
        vm.todos = {};
        vm.input = {};
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
            console.log(vm.input);
            mainService.post('todo', vm.input)
                .then(_postSuccess)
                .catch(_postFailed);

            function _postSuccess(res) {
                console.log(res);
                _getTodo();
            }

            function _postFailed(err) {
                console.log(err);
            }
            
        }

        function _getTodo() {
            console.log('get todo ran');
            mainService.get('todo/')
                .then(_getSuccess)
                .catch(_getFailed)

            function _getSuccess(res) {
                console.log(res);
                vm.todos = res.data;
                console.log(vm.todos);
            }

            function _getFailed(err) {
                console.log(err);
            }
        }

        function _editButton() {
            // repopulate input with edit info 

        }

        function _editTodo() {
            console.log('edit todo clicked');
            mainService.put('todo/');
            // run put on edit button
        }

        function _deleteTodo(index) {
            console.log('delete todo clicked');
            mainService.delete('todo/', index)
                .then(_deleteSuccess)
                .catch(_deleteFailed)

            function _deleteSuccess(res) {
                vm.todos.splice(index, 1);
                console.log(res);
            }

            function _deleteFailed(err) {
                console.log(err);
            }
        }



    }
})();