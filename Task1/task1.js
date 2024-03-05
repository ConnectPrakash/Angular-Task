angular.module('taskListApp', [])
    .controller('TaskListController', function() {
        var vm = this;
        vm.tasks = [];
        
        vm.addTask = function() {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push(vm.newTask);
                vm.newTask = '';
            }
        };
        
        vm.editTask = function(index) {
            var editedTask = prompt("Edit task", vm.tasks[index]);
            if (editedTask !== null) {
                vm.tasks[index] = editedTask;
            }
        };
        
        vm.deleteTask = function(index) {
            if (confirm("Are you sure you want to delete this task?")) {
                vm.tasks.splice(index, 1);
            }
        };
    });
