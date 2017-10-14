window.angular && (() => {
  
  let app = angular.module('ngStuff.docs');
  
  app.directive('codemirror', [() => {
    return {
      restrict: 'A',
      link: (scope, element, attr) => {
        if (!CodeMirror) return;
        
        var options = (attr.codemirror) ? scope.$eval(attr.codemirror) : {};
        
        // if (options.mode === 'htmlmixed' && !options.tags) {
        //   options.tags = {
        //     style: [["type", /^text\/(x-)?scss$/, "text/x-scss"], [null, null, "css"]],
        //     custom: [[null, null, "customMode"]]
        //   };
        // }

        angular.extend(options, {
          theme: 'mdn-like',
          viewportMargin: Infinity,
          lineNumbers: true,
          readOnly: true
        });
        
        var editor = CodeMirror.fromTextArea(element[0], options);
      }
    };
  }]);
  
})();
