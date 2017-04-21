# Atividade 01 -  Jivago Campos Oliveira

## Questões

### 1. Quais são as duas formas de se obter um repositorio git?

- git init: coloca o diretorio atual sobre o controle do git.
- git clone: Faz o clone de um repositorio existente.


### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos, e/ou estão pendentes para commit.

- Estarei usando o exemplo, do estado atual do respositório: (tenho os arquivos /Atividade01/README.md que precisam ser adicionados
  para poderem ser commitados.)

### 3.Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos
Git foram executados para se obter este estado.(comentando iss53)

```
git branch iss53
git commit -am "um commit"
git checkout iss53
git status
git branch
git commit -am "outro commit"
```
### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

#### Conforme o professor falou em sala poderia partir do commit C5 para fazer a questão 4.

```
git checkout master - Para voltar para o branch master
git merge iss53 - Mergeado as alterações do branch iss53 para o master
```
### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

- resposta:
De acordo com a questão 4, um conflito de merge acontece quando temos dois branch's dentro do mesmo repositório e um arquivo é          alterado no mesmo local nos dois branch's. Digitamos o git merge iss53 para podermos combinar o master com o iss53. A melhor maneira de resolver é ver as alterações feitas e uni-las do melhor jeito possivel.

```
git merge iss53
git status
git commit
```
### 8.Descreva o funcionamento de um escopo em JavaScript.

- resposta:
O funcionamento do escopo em JavaScript,  é do seguinte metodo: existe o escopo global que pode ser utilizado em qualquer parte do programa, já o escopo local pode ser utilizado apenas  dentro da sua função, mais se esta funcao possui outras funcões, ela pode ser acessada e pode ser manipulada dentro da função.

### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

- resposta:
Teste de mesa

'var1' é declarada e recebe o valor undefined
criando a função 'ctrlP' é definida, e recebe como parâmetro um valor e uma função.

imprime na tela = undefined

'var1' recebe 'impresso' e declara outra variavel 'rt', valor de 'rt' valor de retorno de 'ctrlP'
ctrlP recebe dois valores como parâmetro, o primeiro valor que ela recebe é 'var1'
executando 'ctrlP' que esta passando dois valores, mais chegou aqui como 'val' e esta recebendo como valor 'var1'
que na verdade recebe o valor 'impresso'

ela recebe outro parâmetro que é 'imp' , e o valor que 'imp' recebe uma função anômima, e passa ela como segundo parâmetro,quando essa função chega no ctrlP
ela tem o valor de 'imp' e o valor é anômimo

imprime na tela = ctrl

'ctrlP' recebe a função anônima e executa a função 'imp' e passa o valor impresso da variável 'vlr'.
É impresso o valor da variável 'vlr':

imprime na tela = impresso

A função 'var1' executa e retorna na tela

imprime na tela = passou aqui

Executa a função anônima e salva o valor de 'ctrlP' na variável 'rt', e envia para a tela o atributo e valor impresso.

imprime na tela = { impresso: 'impresso' }

```
undefined
ctrl
impresso
passou aqui
{ impresso: 'impresso' }
```
