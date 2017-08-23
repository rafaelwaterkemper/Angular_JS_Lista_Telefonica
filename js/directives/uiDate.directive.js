(function () {
    'use strict';

    angular
        .module('listaTelefonica')
        .directive('uiDate', Directive);

    Directive.$inject = ['$filter'];
    function Directive($filter) {

        var directive = {
            require: "ngModel",
            link: link
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            element.bind("keyup", function () {
                ctrl.$setViewValue(formataDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {
                    var arrayData = value.split('/');
                    return new Date(arrayData[2], arrayData[1] - 1, arrayData[0]).getTime();
                }
            })

            ctrl.$formatters.push(function (value) {
                return $filter('date')(value, "dd/MM/yyyy");
            })
        }

        function formataDate(date) {
            date = date.replace(/[^0-9]+/g, "")
            if (date.length > 2) {
                date = date.substring(0, 2) + '/' + date.substring(2);
            }
            if (date.length > 5) {
                date = date.substring(0, 5) + '/' + date.substring(5, 9);
            }
            return date;
        }


    }

})();