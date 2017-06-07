# Atividade oficial 2

Implemente um sistema para uma agência bancária. Este sistema tem um escopo pequeno e bem definido e deve ser capaz apenas de manter um cadastro de contas e oferecer a possibilidade de realizar as operações básicas de saque, depósito e transferência entre contas. Para fins de segurança, o sistema deverá manter logs de todas as operações efetuadas.

## Backend

Crie uma API para gerenciamento de contas de um banco. Através desta API deve ser possível gerenciar as contas do banco, ou seja, obter as contas cadastradas, adicionar novas contas, aditar contas existentes e removê-las.
Cada conta deve manter as seguintes informações:
- Nome do titular da conta
- CPF do titular da conta
- email do titular da conta
- Um número para esta conta que deverá ser gerado pelo servidor (Este número não é o ID)
- O saldo atual da conta

Através da API também deve ser possível realizar operações de depósito, de saques e ainda transferências entre contas, ou seja, saque em uma e depósito em outra.

Na implementação da API de saque, depósito e transferência o servidor deve aceitar apenas o método POST para a requisição HTTP.

E deverá receber no corpo da requisição as informações de valor e contaOrigem para que seja efetuado saques ou depósitos e para que seja efetuado transferência também é necessário receber a contaDestino.


__Funcionalidade extra__

O servido deve manter logs das operações realizadas e das contas envolvidas nesta operação. Os objetos de logs devem ter as seguintes informações:
- operacao
  - Pode ser "Saque", "Deposito" ou "Transferencia"
- contaOrigem
  - O id da conta de origem, ou  seja, a conta da qual foi feito o saque ou a conta para a qual foi feito o depósito. Ou no caso de Transferencia é a conta da qual o valor será debitado.
- contaDestino
  - O id da conta para a qual uma Transferencia foi feita, ou seja, a conta na qual o valor será creditado. Esta campo deve ser preenchido apenas para operação de Transferencia

Para que seja possível consultar estas informações de logs, o servidor deve também implementar uma API para consulta, sendo que não será necessário nenhum tipo de filtro para os logs, ou seja, basta devolver todos os logs existentes no banco de dados.


## Frontend

Implemente uma interface gráfica com AngularJS para seja possível visualizar as contas cadastradas em uma tabela, com opção de cadastrar uma nova conta, remover uma conta existente ou alterar os dados de uma conta.

A tela deverá conter uma tabela com as contas existentes e uma opção para cadastrar uma nova conta. Ao acionar a opção de cadastrar uma nova conta, deverá apresentar um formulário para cadastrar os dados da conta.

Ao selecionar uma conta deverá apresentar as opções de saque, depósito e transferencia. Ao acionar a opção de saque e/ou depósito deverá apresentar para o usuário os campos para informar o valor da operação.

Para a funcionalidade de transferencia de valores entre contas, ao acionar a ação (clicar em um botão transferencia), apresente para o usuário os campos para informar o valor de transferencia e o código da conta de destino (a conta de origem deverá ser a conta selecionada préviamente).


__Funcionalidade extra__

Implemente a funcionalidade de listar o log com todas as operações realizadas pelo sistema (veja o tópico funcionalidade extra do backend).
Uma possibilidade de implementação é apresentar um botão que ao ser clicado apresenta a lista com todos os registros de log.


## Entrega

A entrega deverá ser feita através de um pull-request no GitHub. Porém, todos deverão fazer pull-request em um horário determinado pelo professor. Este horário será definido em sala de aula.

A utilização do Git faz parte da avaliação, portanto, para cada etapa da implementação que for concluida faça um commit.

## Atenção

- NÃO relacionem esta issue em seus commits.

- Façam os commits conforme forem concluindo as implementações, porém, NÃO façam push em cada commit. O push como todos os commits deverá ser feito por todos em um horário determinado pelo professor. Este horário será definido em sala de aula.
