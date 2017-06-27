## Atividade final (28/07/2017)


Para esta atividade deverão realizar a implementação no mesmo diretório SPA, ou seja, apenas incrementando a aplicação já existente. Iremos recriar a interface gráfica da atividade oficial 2.

## Atividade

Implemente uma interface gráfica com AngularJS para seja possível visualizar as contas bancárias cadastradas em uma tabela, com opção de cadastrar uma nova conta, remover uma conta existente ou alterar os dados de uma conta.


A tela deverá conter uma tabela com as contas existentes e uma opção para cadastrar uma nova conta. Ao acionar a opção de cadastrar uma nova conta, deverá apresentar um formulário para cadastrar os dados da conta.

Na mesma linha da tabela, em uma coluna ações, disponibilize as opções de saque, depósito e transferencia. Ao acionar a opção de saque e/ou depósito deverá apresentar para o usuário os campos para informar o valor da operação.

Para a funcionalidade de transferencia de valores entre contas, ao acionar a ação (clicar em um botão transferencia), apresente para o usuário os campos para informar o valor de transferencia e o código da conta de destino (a conta de origem deverá ser a conta selecionada préviamente).

## Implementação


Este sistema deverá ser implementado juntamente com o atual sistema SPA. Portanto, no menu superior da aplicação deverá conter um link/botão chamado "Contas bancárias" que ao ser clicado irá direcionar para a página que contém a lista de contas bancárias cadastradas.

As ações de cadastrar novas contas, editar uma conta, realizar um saque, depósito e transferencia deverão ser implementados em páginas separadas que recebem por parâmetro a conta sobre a qual realizar as operações (saque, depósito, transferencia e edição).

Toda as páginas deverão possuir um botão "Inicio" que retorna para a página de boas vindas da aplicação e em algumas páginas (as quais julgarem fazer sentido) deverá conter um botão "Voltar" que retorna para a página com a lista de contas bancárias.


## Entrega

A entrega desta atividade deverá ser feita, como sempre, via pull request.


Boa sorte!!
