# Atividade 01 - { Djiovani Douglas da Mota Cabral }

## Questoes

### 1.Quais são as duas formas de se obter um repositório git?
  - git init: Coloca o diretório sobre controle do Git.
  - git clone: Faz o clone de um repositório existente.

### 2.Explique para que serve o comando git status. Use exemplo para complementar a resposta.

    - Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos e/ou estão pendentes de commit.

    Por exemplo, o estado atual do nosso repositório:

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
### 3.Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado?

  - foi criado um branch iss53 e feito um commit,
    depois foi criado um checkout para iss53,
    usado git status para ver oque tem para commitar,
    git branch para ver em qual branch esta,
    git commit para commitar na iss53

```

  $ git branch iss53
  $ git commit -am "um commit"
  $ git checkout iss53
  $ git status
  $ git branch
  $ git commit -am "um outro commit questao 3"

```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

     $ após ter feito um commit no iss53
     $ foi feito um checkout para trocar de branch para o master
     $ foi feito um merge para copiar as informações do iss53
     $ usado commit para commitar o master

 ```
     git checkout master
     git merge iss53
     git commit -am "merge do iss53"

 ```

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

    - Acontece um conflito quando dois dois branches no mesmo repositorio e o mesmo arquivo é alterado, assim se uma alteração estiver sobre uma linha que já tenha conteudo acontece o conflito.

    - Para resolver deve ver no arquivo onde esta o conflito. É identificado por ```<<<<<<< HEAD` / `=======` / `>>>>>>> iss53```.
    - E ajustar o arquivo conforme seja evitado o flito.
```
  $ git branch
  $ git checkout master
  $ git branch
  $ git merge iss53
  $ git commit -am "merge do iss53"  'vai dar erro de conflito'

    ' após corrigir'
  $ git commit -am "commit sem conflito"
```

### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string,um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

```
  const foo = {
  chave: 'valor string',
  atributoInt: 33,
  atributoArray: [],
  atributoFunc: function(){}
 };

```

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

  ```
    function questaoSete(valor1, valor2){
      var objetoDeRetorno = {
        a:valor1,
        b:valor2
      };
      return objetoDeRetorno;
    }

 var valorRetorno = questaoSete(5, "seis");
 console.log(valorRetorno);
```

### 8. Descreva o funcionamento de um escopo em JavaScript

  - O escopo é uma forma de limitar informações entre funções,metodos,  variaveis.
 Onde a variaveis de fora é global e tem acesso a qualquer função.
 Já funções de dentro do escopo não tem acesso a variaveis de fora.

```
 Ex:
   ____________________________________
  |                                    |
  |    GLOBAL                          |
  |           _________________________|
  |          |                         |
  |          |     VARIAVEl1           |
  |          |                         |
  |          |             ____________|
  |          |             |           |
  |          |             |VARIAVEL2  |
  |          |             |           |
  |__________|_____________|___________|
```

### 9.Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

  ```
    $ Undefined
    $ "ctrl"
    $ "impresso"
    $ "passou aqui"
    $ {impresso: "impresso"}
  ```
