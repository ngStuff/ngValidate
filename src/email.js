window.angular && (function () {
  
  let app = angular.module('ngValidate');
  
  app.directive('validateEmail', [function () {
    return {
      restrict: 'A',
      require: 'ngModel'
    };
  }]);
  
})();
