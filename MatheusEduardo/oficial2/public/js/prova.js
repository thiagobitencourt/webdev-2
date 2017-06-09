
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
    const contaEditavel = $scope.contasBancarias.find(conta => conta.selecionada);
    $scope.novaContaBancaria = contaEditavel ? angular.copy(contaEditavel) : undefined;
    $scope.adicionandoContaBancaria = !!contaEditavel;
  }

  $scope.removerContaBancaria = () => {
    const currentConta = $scope.contasBancarias.find(c => c.selecionada);
    contaBancariaService.removerContaBancaria(currentConta._id).then(() => {
      carregarContasBancarias();
    }).catch(err => console.log(err));
  }

  $scope.cancelarOperacao = () => {
    $scope.sacando = false;
    $scope.transferindo = false;
    $scope.depositando = false;
  }

  $scope.abrirSaque = () => {
    const contaEditavel = $scope.contasBancarias.find(conta => conta.selecionada);
    $scope.sacando = !!contaEditavel;
  }
  
  $scope.abrirDeposito = () => {
    const contaEditavel = $scope.contasBancarias.find(conta => conta.selecionada);
    $scope.depositando = !!contaEditavel;
  }

  $scope.abrirTransferencia = () => {
    const contaEditavel = $scope.contasBancarias.find(conta => conta.selecionada);
    $scope.transferindo = !!contaEditavel;
  }

  $scope.sacar = (operacao) => {
    const currentConta = $scope.contasBancarias.find(c => c.selecionada);
    contaBancariaService.sacar(currentConta._id, operacao)
    .then(response => {
      $scope.sacando = false;
      obterContasBancarias();
    });
  }

  $scope.depositar = (operacao) => {
    const currentConta = $scope.contasBancarias.find(c => c.selecionada);
    contaBancariaService.depositar(currentConta._id, operacao)
    .then(response => {
      $scope.depositando = false;
      obterContasBancarias();
    });
  }

  $scope.transferir = (transferencia) => {
    const currentConta = $scope.contasBancarias.find(c => c.selecionada);
    contaBancariaService.transferir(currentConta._id, transferencia)
    .then(response => {
      $scope.transferindo = false;
      obterContasBancarias();
    });
  }
});