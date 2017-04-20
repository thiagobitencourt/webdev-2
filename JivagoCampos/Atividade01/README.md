# Atividade 01 -  Jivago Campos Oliveira

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
Este  $ git status indica que o arquivo README.md que esta dentro do repositorio Atividade01 foi modificado e precisa ser comitado.
