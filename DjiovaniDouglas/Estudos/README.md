# Atividade 01 - Djiovani Douglas

## Questoes

## 1. Quais as duas formas de se obter um repositorio Git?
```
$ git init: coloca o diret�rio atual sob controle de versao do Git
$ git clone: Faz o clone de um repositorio existente
```

## 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

#### O comando `git status` serve para exibir o estado do repositorio local e remoto no momento.
#### Exibe as seguintes informacoes:

- O branch em que o projeto se encontra. Consequentemente :
    - Se o branch local esta atualizado perante o repositorio remoto;
    - Se ha commits prontos para fazer push;
    - Quais arquivos estao adicionados para commit;
    - Quais arquivos que foram modificados nao estao adicionados para commit;
    - Quais arquivos nao estao sob controle de versao;

#### Exemplo:
```
$ git status

On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### A sa�da do comando indica que o arquivo `README.md`, que est� no diret�rio `Atividade01` foi modificado e precisa ser commitado.

## 3. Levando em considera��o commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

#### Partindo do commit C2:
```
$ git checkout -b iss53
Switched to a new branch iss53

$ git status
On branch iss53
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

// S�o feitas algumas altera��es

$ git status
Your branch is up-to-date with 'origin/iss53'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git add Atividade01/README.md

$ git commit -m "Altera README." // Aqui est� o commit C3
[iss53 ccfc35b] Altera README.
 1 file changed, 2 insertions(+), 2 deletions(-)

$ git pull
Updating ccfc35b..292dab0
nothing to commit, working tree clean

$ git status
On branch iss53
Your branch is ahead of 'origin/iss53' by 1 commit.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git add Atividade01/README.md

$ git commit -m "Altera README (c5)."
[iss53 292dab0] Altera README (c5).
 1 file changed, 77 insertions(+)

```

## 4. A imagem a seguir representa um estado posterior � imagem apresentada na quest�o 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

#### A partir do commit C5:
```

$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

$ git merge iss53
Updating ccfc35b..292dab0
Fast-forward
 matheuseduardo/Atividade01/README.md | 77 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 77 insertions(+)

$ git push origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 1.48 KiB | 0 bytes/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/eduardosmatheus/webdev-2.git
ccfc35b..292dab0 master -> master
```

## 5. Em que situa��o acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necess�rio represente a situa��o de forma gr�fica, assim como apresentado nas quest�es 3 e 4.

- Um conflito ocorre quando dois branches, que est�o sendo mantidos em paralelo, possuem altera��es distintas em lugares iguais, e algu�m tenta mesclar essas altera��es de um branch para outro.

- Para resolver um conflito, � necess�rio que ambas as pessoas que fizeram altera��es nesse mesmo lugar comuniquem-se e encontrem a melhor forma de unir as altera��es.

- Na pr�tica, devem ser removidas as linhas que possuem `<<<<<<< HEAD`, `========` e `>>>>>>>{branch que foi mesclado}`.

#### Exemplo:

- No arquivo README.md:
```
$ git merge iss53

$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   matheuseduardo/Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

#### Conte�do do arquivo README.md com a mescla:
- O que est� do `<<<<<<< HEAD` at� o `=======` s�o as altera��es do branch atual (master)
- O que est� do `=======` at� o `>>>>>>> iss53` s�o as altera��es do branch que foi mesclado (iss53)
```
<<<<<<< HEAD
oidsajasjdas
=======
dajadjasdsdajdasdaadsdaijdasiasiadijdaijdaijadijdakmxzczxmkcxzmkczxkmczxc
adasjoicasocmasiocasocnsaoicnasoicnasoicnaosicnaosinaocinaoicnasoincoain
>>>>>>> iss53
```

## 9. Veja o c�digo a seguir (dispon�vel em `questao09.js`), descreva o que est� acontecendo e, em sua ordem correta, quais informa��es ser�o impressas na tela?
1. `var1` � declarada. (neste momento seu valor ainda � **undefined**.)

2. A fun��o `ctrlP` � definida, e recebe como par�metro um valor e uma fun��o.

3. O retorno de `ctrlP` � o resultado da fun��o `imp`.

4. `var1` � imprimida no console.
```javascript
undefined
```

5. o valor ``"impresso"`` � atribu�do para `var1`.

6. `ctrlP` � invocada, passando `var1` e uma fun��o an�nima, que espera `vlr` como par�metro.

  - Primeiramente, � impresso no console:
  ```javascript
  "ctrl"
  ```

  - O valor `"passou aqui"` � atribu�do a `var1`;

  - Ent�o para atribuir ao resultado de `ctrlP`, a fun��o an�nima (`imp()`) � invocada.

      - � impresso o valor da vari�vel `vlr`:
      ```javascript
      "impresso"
      ```

      - A fun��o an�nima retorna um objeto com o atributo `impresso`, sendo seu respectivo valor a vari�vel `vlr`;

      - **Ent�o a execu��o da fun��o an�nima encerra e o retorno � passado para `ctrlP`**

7. O resultado de `ctrlP` � salvo na vari�vel `rt`

8. � impresso o valor de `vlr` no console:
```javascript
"passou aqui"
```

9. E por �ltimo � impresso a vari�vel `rt`:
```javascript
{ impresso: "impresso" }
```

## 10. Ao acessar o atributo de um objeto, qual a diferen�a entre as sintaxes objeto.atributo e objeto[�atributo�]? Quando deve-se utilizar a segunda op��o?

### � poss�vel acessar um atributo de um objeto igualmente das duas formas.
### **Por�m, para acessar da forma:**
```javascript
objeto.atributo
```
### **a chave de um atributo deve come�ar com letras de A a Z (seja ma�uscula ou min�scula), $ ou _ .**

### Deve-se utilizar a forma abaixo quando a chave de um atributo n�o est� dentro dos par�metros citados anteriormente.
```javascript
objeto['atributo']
```
