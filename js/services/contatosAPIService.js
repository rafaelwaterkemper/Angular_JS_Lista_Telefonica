angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getAllContatos = function (){
        return $http.get(config.baseURL + "/contatos");
    };

    var _saveContato = function(contato){
        return $http.post(config.baseURL + "/contatos", contato);
    }

    return {
        getAllContatos: _getAllContatos,
        saveContato: _saveContato
    };
});