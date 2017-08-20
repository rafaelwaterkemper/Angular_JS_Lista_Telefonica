angular.module('listaTelefonica').filter('limitaNome', function(){
    return function(input, tamanho){
        return input.length > tamanho ? input.substring(0, tamanho) + '...':input;
    }
})