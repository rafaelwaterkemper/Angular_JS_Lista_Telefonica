angular.module("listaTelefonica").service("operadorasAPI", function($http, config){
    this.getAllOperadoras = function(){
        return $http.get(config.baseURL + "/operadoras");
    };
});