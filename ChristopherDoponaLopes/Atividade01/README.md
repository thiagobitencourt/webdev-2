# Atividade 01 - Christopher Dopona Lopes

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init: faz um novo repositorio em uma devida pasta para ser controlada e gerenciada pelo git.
- git clone: faz o clone (copia) de algum repositorio local ou na nuvem.

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- A função do git status é mostrar ao programador os programas alterados, sendo assim apresentando qualquer programa que tenha sofrido alguma alteração, mostra o estado do repositório para ser tomado alguma ação sobre o mesmo.

- Exemplo:

  ```
  MacBook-Pro-de-Christopher:ChristopherDoponaLopes Christopher$ git status
  ```
- Código acima mostra o status do repositório

```
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
- Mostrando que na pasta ```Atividade01``` tem o programa ```README.md``` e ele esta modificado (modified) e deve ser comitado.


### 3. The "treta" has been planted !!

```
$ git branch iss53
$ git commit -am "um commit"
$ git checkout iss53
$ git status
$ git brach
$ git commit -am "outro commit"
```
