# Atividade 01 - Thiago Ricardo May Bitencourt

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init: Coloca o diretórial sobre controle do Git.
- git clone: Faz o clone de um repositório existente

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta

- Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos e/ou estão pendentes de commit.

Por exemplo, o estado atual do nosso repositório:

```
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	modified:   Atividade01/README.md
#
no changes added to commit (use "git add" and/or "git commit -a")
```

A saida do comando indica que o arquivo README.md que esta dentro do diretório Atividade foi alterado e precisa ser comitado.

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

```
$ git branch iss53
$ git commit -am "um commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
```
