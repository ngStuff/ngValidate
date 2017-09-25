window.angular && (() => {

  let allowed = /^[\w\.\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9\.\-]{2,}$/;
  let notAllowed = /(^[^a-zA-Z0-9]+|[^a-zA-Z0-9]{2,}|[^a-zA-Z0-9]+$)/;
  
  let app = angular.module('ngStuff.validate');
  
  app.directive('validateEmail', [() => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) throw '"ngModel" required by "validateEmail" directive!';
        
        model.$validators.email = (modelValue, viewValue) => {
          if (!allowed.test(modelValue)) return false;
          if (notAllowed.test(modelValue)) return false;
          return true;
        };

      }
    };
  }]);
  
})();
