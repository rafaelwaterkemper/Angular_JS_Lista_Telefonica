angular.module('listaTelefonica').directive('uiAlert', function (){
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope : {
            title: "@", //utiliza o valor passado no atributo
            //messagge: "=" //faz o binding com o valor do scope
        },
        transclude: true //utiliza o valor passado dentro da tag
    }
})