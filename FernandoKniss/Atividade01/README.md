# Atividade 01 -  Fernando Furtado Kniss

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

-git init: coloca o diretórial sobre controle do git.
-git clone: faz o clone de um repositório existente.


### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

-Mostra o estado do repositório, tambem mostra arquivos que foram modificados, adicionado, removidos e/ou estãod pendentes de commit.

Por Exemplo, o estado atual do nosso repositório:

'''
On branch master
+    Your branch is up-to-date with 'origin/master'.
+    Changes not staged for commit:
+      (use "git add <file>..." to update what will be committed)
+      (use "git checkout -- <file>..." to discard changes in working directory)
+
+            modified:   ../CONTRIBUTING.md
+            modified:   Atividade01/README.md
+
+    no changes added to commit (use "git add" and/or "git commit -a")
'''

### 3. The "treta" has been planted !!

'''
$ git branch iss53
$ git commit "um commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
'''

-A imagem representa a criação de um novo branch iss53, onde foram feitos dois commit's e sua versão atualizada é C5 no branch iss53.

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

É a continuação do branch, onde foi feito um novo commit no branch master e entrado em conflito.
$ git checkout master
$ git merge iss53


### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

Ocorre quando tem o mesmo arquivo alterado em dois branchs diferentes e é feito um merge entre eles.
Resolve o conflito indo até o arquivo alterando o conflito no caso reajustando para que poça ser feito uma nova versão ou no caso um novo commit.

$ git add
$ git commit -am " "

### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

Resposta na documento Atividade.js

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

Respondido no arquivo Atividade.js

### 8. Descreva o funcionamento de um escopo em JavaScript

A linguagem JavaScript tem o global e local.  Uma variável declarada fora de uma definição de função é uma variável global, e seu valor será acessível e modificável em todo o seu programa.  Uma variável declarada dentro de uma definição de função é local.  Ela é criada e destruída sempre que a função é executada e não pode ser acessada por qualquer código fora da função.

### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

 $ undefined
 $ ctrl
 $ impresso
 $ passou aqui
 $ { impresso: 'impresso' }
