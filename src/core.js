
window.angular && (() => {
  
  var app = angular.module('ngValidate', []);

  app.directive('validateAsync', [() => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) return;
      }
    };
  }]);

  app.directive('validateCallback', [() => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) return;
      }
    };
  }]);
  
})();

