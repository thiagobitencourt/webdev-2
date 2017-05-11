# Atividade 01 - Matheus Eduardo 

## Questões

## 1. Quais as duas formas de se obter um repositório Git?
```
$ git init: coloca o diretório atual sob controle de versão do Git
$ git clone: Faz o clone de um repositório existente
```

## 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

#### O comando `git status` serve para exibir o estado do repositório local e remoto no momento.
#### Exibe as seguintes informações:

- O branch em que o projeto se encontra. Consequentemente :
    - Se o branch local está atualizado perante o repositório remoto;
    - Se há commits prontos para fazer push;
    - Quais arquivos estão adicionados para commit;
    - Quais arquivos que foram modificados não estão adicionados para commit;
    - Quais arquivos não estão sob controle de versão;

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

### A saída do comando indica que o arquivo `README.md`, que está no diretório `Atividade01` foi modificado e precisa ser commitado.

## 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

#### Partindo do commit C2:
```
$ git checkout -b iss53
Switched to a new branch iss53

$ git status
On branch iss53
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

// São feitas algumas alterações

$ git status
Your branch is up-to-date with 'origin/iss53'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git add Atividade01/README.md

$ git commit -m "Altera README." // Aqui está o commit C3
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

## 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

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

## 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

- Um conflito ocorre quando dois branches, que estão sendo mantidos em paralelo, possuem alterações distintas em lugares iguais, e alguém tenta mesclar essas alterações de um branch para outro.

- Para resolver um conflito, é necessário que ambas as pessoas que fizeram alterações nesse mesmo lugar comuniquem-se e encontrem a melhor forma de unir as alterações.

- Na prática, devem ser removidas as linhas que possuem `<<<<<<< HEAD`, `========` e `>>>>>>>{branch que foi mesclado}`.

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

#### Conteúdo do arquivo README.md com a mescla:
- O que está do `<<<<<<< HEAD` até o `=======` são as alterações do branch atual (master)
- O que está do `=======` até o `>>>>>>> iss53` são as alterações do branch que foi mesclado (iss53)
```
<<<<<<< HEAD
oidsajasjdas
=======
dajadjasdsdajdasdaadsdaijdasiasiadijdaijdaijadijdakmxzczxmkcxzmkczxkmczxc
adasjoicasocmasiocasocnsaoicnasoicnasoicnaosicnaosinaocinaoicnasoincoain
>>>>>>> iss53
```

## 9. Veja o código a seguir (disponível em `questao09.js`), descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?
1. `var1` é declarada. (neste momento seu valor ainda é **undefined**.)

2. A função `ctrlP` é definida, e recebe como parâmetro um valor e uma função.

3. O retorno de `ctrlP` é o resultado da função `imp`.

4. `var1` é imprimida no console. 
```javascript
undefined
```

5. o valor ``"impresso"`` é atribuído para `var1`.

6. `ctrlP` é invocada, passando `var1` e uma função anônima, que espera `vlr` como parâmetro.

  - Primeiramente, é impresso no console:
  ```javascript
  "ctrl"
  ```
  
  - O valor `"passou aqui"` é atribuído a `var1`;
  
  - Então para atribuir ao resultado de `ctrlP`, a função anônima (`imp()`) é invocada.

      - É impresso o valor da variável `vlr`:
      ```javascript
      "impresso"
      ```

      - A função anônima retorna um objeto com o atributo `impresso`, sendo seu respectivo valor a variável `vlr`;
      
      - **Então a execução da função anônima encerra e o retorno é passado para `ctrlP`**

7. O resultado de `ctrlP` é salvo na variável `rt`
  
8. É impresso o valor de `vlr` no console:
```javascript
"passou aqui"
```
  
9. E por último é impresso a variável `rt`: 
```javascript 
{ impresso: "impresso" }
```

## 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]? Quando deve-se utilizar a segunda opção?

### É possível acessar um atributo de um objeto igualmente das duas formas. 
### **Porém, para acessar da forma:**
```javascript
objeto.atributo
```
### **a chave de um atributo deve começar com letras de A a Z (seja maíuscula ou minúscula), $ ou _ .**

### Deve-se utilizar a forma abaixo quando a chave de um atributo não está dentro dos parâmetros citados anteriormente.
```javascript
objeto['atributo']
```