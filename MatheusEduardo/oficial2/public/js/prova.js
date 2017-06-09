
var app = angular.module('prova', []);

app.controller('bancoController', (contaBancariaService, $scope) => {

  function carregarContasBancarias() {
    contaBancariaService.obterContasBancarias().then(response => {
      $scope.contasBancarias = response.data;
    }).catch(err => console.log(err));
  }
  
  carregarContasBancarias();

  $scope.selecionarContaBancaria = (contaBancaria) => {
    $scope.contasBancarias.forEach(conta => {
      if(conta._id === contaBancaria._id) {
        contaBancaria.selecionada = !contaBancaria.selecionada;
        console.log(contaBancaria);
      } else {
        conta.selecionada = false;
      }
    })
  }

  $scope.salvarNovaContaBancaria = (novaContaBancaria) => {
    contaBancariaService.criarContaBancaria(novaContaBancaria).then(response => {
      $scope.novaContaBancaria = undefined;
      $scope.adicionandoContaBancaria = false;
      carregarContasBancarias();
    }).catch(err => console.log(err));
  }

  $scope.adicionarContaBancaria = () => {
    $scope.adicionandoContaBancaria = true;
  }

  $scope.cancelarCriacao = () => {
    $scope.adicionandoContaBancaria = false;
    $scope.novaContaBancaria = undefined;
  }

  $scope.editarContaBancaria = () => {
    const contaEditavel = $scope.contasBancarias.find(user => user.selecionada);
    $scope.novaContaBancaria = contaEditavel ? angular.copy(contaEditavel) : undefined;
    $scope.adicionandoContaBancaria = !!contaEditavel;
  }

  $scope.removerContaBancaria = () => {
    const currentConta = $scope.contasBancarias.find(c => c.selecionada);
    contaBancariaService.removerContaBancaria(currentConta).then(() => {
      carregarContasBancarias();
    }).catch(err => console.log(err));
  }
  
});