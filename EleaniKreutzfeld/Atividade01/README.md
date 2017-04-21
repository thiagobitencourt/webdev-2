# Atividade 01 - Eleani Kreutzfeld

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init - Coloca determinado diretório sobre o controle do Git
- git clone - Faz um clone de um repositório existente

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos, e/ou estão pendentes de commit.

Por exemplo, o estado atual do respositório:

    On branch master
    Your branch is up-to-date with 'origin/master'.
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   ../CONTRIBUTING.md
            modified:   Atividade01/README.md

    no changes added to commit (use "git add" and/or "git commit -a")

Neste caso, temos os arquivos /CONTRIBUTING.md e Atividade01/README.md que precisam ser adicionados para poder fazer o commit.

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

### 3. Trapp!!!

    $ git branch iss53 - Criado o branch iss53
    $ git branch - Listado os branchs e visto que estamos no master
    $ git add/git commit - Alterado o arquivo e comitado,
    assim temos o commit C2 do exemplo
    $ git checkout iss53 - alterado para o branch iss53
    $ git add/git commit - Realizado dois commits no branch iss53

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

Após a atividade 3, feito os passos...

    $git checkout master - Mudado para o branch master
    $git merge iss53 - Mergeado as alterações do branch iss53
    para o master

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

Conflito ocorre, quando duas branchs tem o mesmo arquivo alterado e é feito o merge entre estas branchs. Para resolver o conflito, basta ir no arquivo em que ocorreu o conflito e fazer o 'acerto'. Este acerto irá ocorrer, quando no arquivo do conflito for tirado os caracteres que o git inseriu, pra mostrar onde está o conflito. Exemplo '<<<<<<< HEAD e ======= e >>>>>>> iss53 ', assim que tirar estas linhas, o git irá entender como resolvido e permitirá que você faça o commit.


    $git merge iss53 - Mergeado as alterações do branch
    iss53 para o master
    Ao resolver o conflito, basta realizar o commit
    $ git add/git commit


###6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

Resposta no arquivo Atividade.js

###7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

Resposta no arquivo Atividade.js

###8. Descreva o funcionamento de um escopo em JavaScript

O escopo no JavaScript, existe o global que pode ser utilizado por modicado ou obtido em qualquer parte do programa, já o escopo local, apenas é acessivel dentro de sua função, porem se a funcao possui mais funcões dentro dela, esta variavel poderá ser manipulada dento desta função (funcao que está dentro da funcao em que foi declarada a variavel).
Exemplo: em uma funcao 'dados' eu tenho declarada a variavel 'salario', dentro desta funcao 'dados', eu tenho a funcao 'calcularBonificao' eu utilizo a variavel 'salario', para multiplicar com a variavel 'percentualBonus' declarada na funcao 'calcularBonificao'. Neste caso, por causa do escopo, a funcao 'calcularBonificao', tem acesso as variaveis 'salario' e 'percentualBonus', enquanto a funcao 'dados', que chama a funcao 'calcularBonificao', apenas possui acesso a variavel 'salario'.

###9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

1) declara a variavel var1 igual a undefined
2) declara a funcao ctrlP
3) imprime a variavel var1 com o valor de undefined
4) atribui a 'impresso' na variavel var1
5) declara a variavel rt com o retorno da funcao ctrlP
5.1) Funcao ctrlP passa var1 que possui 'impresso', no segundo parametro retorna um objeto de uma funcao anonima, esta funcao anonima ainda não foi executada
5.2) Dentro da funcao ctrlP, imprime 'ctrl'
5.3) atribui 'passou aqui' na variavel var1
5.4) chama a funcao anonima
5.4.1) na funcao anonima imprime 'impresso'
5.4.2) retorna um objeto com o atributo impresso tendo o valor 'impresso'
5.5) o retorno da funcao ctrlP, retorna o objeto da funcao anonima conforme o item 5.4.2
5.6) imprime a variavel var1, imprimindo passou aqui
5.7) imprime o objeto rt, imprimindo { impresso: 'impresso' }

Impressão:
$ undefined
$ ctrl
$ impresso
$ passou aqui
$ { impresso: 'impresso' }


###10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?

Não existe diferença, ambas as formas obtem o atributo do objeto, porem obtendo o atributo atraves do conchetes '[]', é util para atributos que começam com numeros, ou contenham espaço ou hífen.
