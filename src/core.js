
window.angular && (() => {
  
  var app = angular.module('ngStuff.validator', []);

  app.directive('validateAsync', ['$parse', '$q', ($parse, $q) => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) throw '"ngModel" required by "validateAsync" directive!';

        let callback = $parse(attr.validateAsync);

        model.$asyncValidators.async = (modelValue) => {
          let response = callback(scope, { $data:  modelValue });
          return $q.when(response);
        };
      }
    };
  }]);

  app.directive('validateCallback', ['$parse', ($parse) => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) throw '"ngModel" required by "validateCallback" directive!';

        let callback = $parse(attr.validateCallback);

        model.$validators.callback = (modelValue) => {
          let response = callback(scope, { $data:  modelValue });
          if (response !== true) return false;
          return true;
        };

      }
    };
  }]);

  app.directive('matchWith', [() => {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attr, model) => {
        if (!model) throw '"ngModel" required by "matchWith" directive!';

        let matchWith = attr.matchWith;
        if (!matchWith) return;

        scope.$watch(matchWith, (value) => {
          model.$validate();
        });

        model.$validators.match = (modelValue) => {
          if (!modelValue) return false;
          let matchValue = scope.$eval(matchWith);
          return (modelValue === matchValue);
        };

      }
    };
  }]);
  
})();

