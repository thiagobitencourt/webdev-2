# Atividade 01 - Thalles Golembiewski

## Questões

### 1. Quais são as duas formas de se obter um repositório git?
- git init: Coloca o diretório sobre controle do Git.    
- git clone: Faz clone de um repositório existente.

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.
Mostrar o estado do repositório
- Arquivos adicionados
- Arquivos modificados
- Arquivos removidos
- Arquivos pendentes

Exemplo:
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
Neste exemplo ele mostrou o arquivo que foi modificado

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

IMAGEM -> https://git-scm.com/book/en/v2/images/basic-branching-6.png

```
$ git branch iss53
$ git commit -am "um commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commmit"
```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

IMAGEM -> https://git-scm.com/book/en/v2/images/basic-merging-2.png

```
$ git checkout master
$ git branch
$ git merge iss53
$ git status
 Corrigido manualmente o conflito
$ git commit -am "Resolve conflitos entre os branch"
```