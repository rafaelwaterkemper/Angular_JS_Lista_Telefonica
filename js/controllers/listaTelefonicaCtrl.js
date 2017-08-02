angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function ($scope, $filter, contatosAPI, operadorasAPI) {

	$scope.app = "Lista Telefonica";
	$scope.operadoras = [];
	$scope.contatos = [];

	$scope.adicionarContato = function (contato) {
		//Pra usar assim, retirar os parametros - Deixar de passar no ng-click
		//$scope.contatos.push({nome:$scope.nome, telefone:$scope.telefone});
		//Passar parâmetros na função e deixar sem o . no ng-model function(nome, telefone)
		//$scope.contatos.push({nome:nome, telefone:telefone});
		contato.data = new Date();
		//$scope.contatos.push(contato);

		contatosAPI.saveContato(contato).then(function (data) {
			delete $scope.contatoForm;
			$scope.formContato.$setPristine();
			$scope.contatos.push(data.data);
			//carregarContatos();
		}, function (erro) {
			alert("Erro interno de servidor.")
		});
	};

	//Usado com array no ng-class="selecionado, negrito"
	//Tem que existir as variáveis no scope direcionados ao style
	$scope.selecionado = "selecionado";
	$scope.negrito = "negrito";

	$scope.apagarContatos = function (contatos) {
		//filtra os contatos selecionados para exclusão
		// e mantém os que não estão marcados
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function (contatos) {
		//funciona como o filter, porém caso um dos checkboxes
		//estejam selecionados recebe true
		//var isContatoSelecionado = 
		return contatos.some(function (contato) {
			return contato.selecionado;
		})
		//console.log(isContatoSelecionado);
	};
	$scope.ordenarPor = function (campo) {
		$scope.itemOrdenacao = campo;
		$scope.criterioOrdenacao = !$scope.criterioOrdenacao;
	};

	let carregarContatos = function () {
		contatosAPI.getAllContatos().then(function (data, status) {
			$scope.contatos = data.data;
			console.log($scope.contatos);
		}, function () {
			console.log('Erro interno de servidor.')
		});
	};

	let carregarOperadoras = function () {
		operadorasAPI.getAllOperadoras().then(function (data, status) {
			$scope.operadoras = data.data;
			console.log($scope.operadoras);
		}, function () {
			console.log('Erro interno de servidor.')
		});
	};

	carregarContatos();
	carregarOperadoras();
});