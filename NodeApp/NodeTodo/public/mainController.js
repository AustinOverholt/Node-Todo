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
        vm.edit = false;
        vm.$scope = $scope;
        vm.$onInit = _init;
        vm.addTodo = _addTodo;
        vm.editButton = _editButton;
        vm.deleteTodo = _deleteTodo;

        function _init() {
            console.log('main controller init');
            _getTodo();
        }

        function _addTodo() {
            console.log('add todo clicked');
            console.log(vm.input);
            console.log(vm.edit);
            // if edit is false post
            if (vm.edit === false) {
                mainService.post('todo/', vm.input)
                .then(_postSuccess)
                .catch(_postFailed);

            } else {
                mainService.put('todo/', vm.edit, vm.input)
                .then(_postSuccess)
                .catch(_postFailed);
            }

            function _postSuccess(res) {
                console.log(res);
                vm.input;
                vm.edit = false;
                _init();
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

        function _editButton(index) {
            // repopulate input with edit info 
            console.log(index);
            mainService.getById('todo/', index)
                .then(_getSuccess)
                .catch(_getFailure);

            function _getSuccess(res) {
                // populate form with todo
                console.log(res.data);
                vm.edit = index;
                console.log(vm.edit);
                vm.input.todo = res.data; 
            }
             
            function _getFailure(err) {
                console.log(err);
            }
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