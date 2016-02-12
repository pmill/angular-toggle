(function() {
  "use strict";

  angular.module('angular-toggle', []).directive('pmToggle', function() {
    return {
      restrict: 'E',
      scope: {
        id: '=',
        ngModel: '='
      },
      template: '<div class="pm-toggle"><label><input type="checkbox" ng-model="vm.ngModel" ng-change="vm.changed()"><strong></strong></label></div>',
      replace: true,
      controller: ToggleController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

  ToggleController.$inject = ['$scope'];

  function ToggleController($scope) {
    var vm = this;

    vm.changed = function () {
      $scope.$emit('pm-toggle.changed', { id: vm.id, enabled: vm.ngModel});
    };
  }
})();