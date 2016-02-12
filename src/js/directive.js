(function() {
  angular.module('angular-toggle', []).directive('pmToggle', function() {
    return {
      restrict: 'E',
      template: '<p>Hello</p>',
      replace: true,
      controller: ToggleController,
      controllerAs: 'vm',
      bindToController: true
    };

    function ToggleController() {
      var vm = this;
    }
  }
)});