# Atividade 01 - Lucas Gustavo Krüger

## Questões

### 1. Quais são as duas formas de se obter um repositório git?
**Resposta:**: É possível obter um repositório **git** com `$ git init` e `$ git status`.  

`$ git init`: Coloca o diretório atual para controle de versão do git.

`$ git clone`: Clona um repositório de uma origem existente.

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.
**Resposta:**
Utiliza-se o comando `git status` para verificar o estado atual do repositório, com ele podesse visualizar qual o branch corrente, se existem arquivos para serem adicionados ao controle de versão do git, arquivos que foram alterados/deletados e estão aguardado para que seja feito *commit* e também a quantidade de *commits* da sua origem.

***Exemplo:***
Em um repositório controlado pelo *git* se lá existir algum arquivo que já está adicionado para ser controlada sua versão pelo git, e esse arquivo estiver sido alterado e ainda não foi feito o `commit` do mesmo, se executar `$ git status` dentro do repositório, será listado no terminal o arquivo, descrito que ele está com alterações pendentes para serem oficializadas ao controle de versão.  

```
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
A saída do comando indica que o arquivo **README.md** foi alterado e está aguardado para ser feito seu *commit*.

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado
*IMAGEM* -> https://git-scm.com/book/en/v2/images/basic-branching-6.png
**RESPOSTA:**
A baixo serão adicionadas linhas referenciando os *commits* que serão feitos e serão criados *branchs* para este arquivo para continuar a representação da imagem.

1. Inicia a questão.
2. Commit 0. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz primeiro commit da imagem'`
3. Commit 1. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz segundo commit da imagem'`
4. Commit 2. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz terceiro commit da imagem'`
5. Commit 4. -> Aqui voltamos para o branch `master` e estamos fazendo o quinto commit representado na imagem. `$ git add README.md` e `$ git commit -m'Faz quinto commit da imagem'`


### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.
*IMAGEM* -> https://git-scm.com/book/en/v2/images/basic-merging-2.png

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
