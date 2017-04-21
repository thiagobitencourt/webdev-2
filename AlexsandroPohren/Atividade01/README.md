# Atividade 01 - Alexsandro Antônio Pohren

## Questões

### 1. Quais são as duas formas de se obter um repositorio git?

- git init: coloca o diretorio atual sobre o controle do git.
- git clone: Faz o clone de um repositorio existente.

### 2.Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Serve para mostrar o status atual do repositorio, tambem mostra arquivos que foram modificados, adicionados, removidos e/ou estão pendentes de commit.

Exemplo: o estado atual do nosso repositorio

```
$ git commit
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
        modified:   Atividade01/README.md
        deleted:    Banana
        modified:   app.js
        deleted:    ../CONTRIBUTING.md
        deleted:    ../contributing.md

no changes added to commit
```
Este  $ git status indica que o arquivo README.md que esta dentro do repositorio Atividade01 foi modificado e precisa ser comitado

### 3.Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

A imagem representa dois branches e seus commits

```
$ git branch iss53
$ git commit -am "resposta da questão 3"
$ it checkout iss53
$ git status
$ git branch
$ git commit -am "vai dar pt"
```

### 4. ...

A imagem representa que foi juntado os dois branches usando o merge
```
$ git checkout master
$ git merge iss53
$ git add.
$ git commit -am "Resolvendo conflito entre os branches"
```
### 9. Veja o código a seguir, descreva o que está acontecendo e,em sua ordem correta,quais informações serão impressas na tela?


resposta
var1 esta recebendo o valor "impresso"
ctrlP esta recebendoo valor [function]
ctrlP passa a receber o nome val, que recebe o valor var1
ctrlP passa a receber o nome imp, que passa a receber a [funcion]
rt possui um valor vazio
imp retorna val que possui o valor { impresso: 'impresso' }
var1 passa a receber o valor "passou aqui"
var1 ira imprimir o valor impresso na tela


```
Ordem de Impressão do codigo

$ undefined
$ "ctrl"
$ "impresso"
$ "passou aqui"
$ { impresso: 'impresso' }

```
### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?

- Não há diferença entre as sintaxes, porém para acessar um atributo que inicia com um numero deve-se usar a sintaxe 'objecto['atributo']'. 
