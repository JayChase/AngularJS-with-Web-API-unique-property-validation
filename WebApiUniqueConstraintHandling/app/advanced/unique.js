(function () {
    'use strict';

    angular
        .module('app')
        .directive('unique', unique);

    function unique() {
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A'
        };

        return directive;

        function link(scope, element, attrs, ngModel) {
            var fnName = attrs["unique"], fn;

            if (fnName) {
                //if the function name has been set with ending () remove them. 
                if (fnName.slice(-2)) {
                    fnName = fnName.substring(0, fnName.length - 2);
                }

                fn = scope[fnName];

                if (fn) {
                    ngModel.$asyncValidators.unique = fn;
                }
            }
        }
    }
})();