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

### 3. The "treta" has been planted !!

```
$ git branch iss53
$ git commit -am "um commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commmit"
```