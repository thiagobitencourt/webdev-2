 #Atividade 01 -  Mateus Zabote da Silva

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init: Coloca o diretório sobre controle do Git.

- git clone: Faz o clone de um repositorio existente.
Ex: git clone github.com/thiagobitencourt/webdev-2

## 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

Mostra o estado do repositorio, mostra arquivos que foram modificados,adicionados e/ou estão pendentes de commit.

Ex:
```
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
Esta mostrando que o arquivo Atividade01/README.md foi modificado.


## 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

foi criado um branch iss53 e feito um commit
depois foi criado um checkout para iss53
usado git status para ver oque tem para commitar
git branch para ver em qual branch Esta
git commit para commitar na iss53

```
git branch iss53
git commit -am "um commit"
git checkout isso53
git status
git branch
git commit -am "outro commit"

```


## 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

IMAGEM -> https://git-scm.com/book/en/v2/images/basic-merging-2.png


após ter feito um commit no iss53
foi feito um checkout para trocar de branch para o master
e foi feito um merge para copiar as informações do iss53
usado commit para commitar o master

```
git checkout master
git merge iss53
git commit -am "merge do iss53"
```
