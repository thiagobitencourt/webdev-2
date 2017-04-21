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

[Imagem git não mergeado](https://git-scm.com/book/en/v2/images/basic-branching-6.png)

**Resposta:**
A baixo serão adicionadas linhas referenciando os *commits* que serão feitos e serão criados *branchs* para este arquivo para continuar a representação da imagem.

1. Inicia a questão.
2. Commit 0. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz primeiro commit da imagem'`
3. Commit 1. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz segundo commit da imagem'`
4. Commit 2. -> Após alterar o arquivo: `$ git add README.md` e `$ git commit -m'Faz terceiro commit da imagem'`
5. Commit 4. -> Aqui voltamos para o branch `master` e estamos fazendo o quinto commit representado na imagem. `$ git add README.md` e `$ git commit -m'Faz quinto commit da imagem'`
6. Aqui é criado um **ramo** para a `iss53` (issue da imagem), com o commando `$ git branch iss53`.
7. Usamos o commando `$ git checkout iss53` para que seja alterado para o branch `iss53`.
8. Commit 3. -> Alterado para o branch `iss53` é feito o terceiro commit. Com: `$ git add README.md` e `$ git commit -m'Faz quarto commit da imagem'`.
9. Commit 5. -> Aqui voltamos para o branch `iss53` e fazemos nosso ultimo `commit` no repositório para este ramo. Com: `$ git add README.md` e `$ git commit -m'Faz ultimo commit do branch da imagem'`.


### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.
*IMAGEM* -> https://git-scm.com/book/en/v2/images/basic-merging-2.png
[Imagem git mergeado](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

**Resposta:**
Após seguidos os passos da questão 3.

Estando no branch `master` é executado o commando `$ git merge iss53` para então ser feito o merge dos dois ramos no arquivo.

Na execução do commando foi feito o merge dos dois ramos porém houve conflito de merge, isso ocorre quando o mesmo ponto do arquivo é alterado em ramos diferentes, e então é solicitado para que seja feito um merge manual para que não haja perda de informação no merge.

O conflito ocorreu e neste ponto e representado desta forma:

```
#<<<<<<< HEAD
5. Commit 4. -> Aqui voltamos para o branch `master` e estamos fazendo o quinto commit representado na imagem. `$ git add README.md` e `$ git commit -m'Faz quinto commit da imagem'`

#=======
5. Aqui é criado um **ramo** para a `iss53` (issue da imagem), com o commando `$ git branch iss53`.
6. Usamos o commando `$ git checkout iss53` para que seja alterado para o branch `iss53`.
7. Commit 3. -> Alterado para o branch `iss53` é feito o terceiro commit. Com: `$ git add README.md` e `$ git commit -m'Faz quarto commit da imagem'`.
8. Commit 5. -> Aqui voltamos para o branch `iss53` e fazemos nosso ultimo `commit` no repositório para este ramo. Com: `$ git add README.md` e `$ git commit -m'Faz ultimo commit do branch da imagem'`.
#>>>>>>> iss53
```
Onde a entre `<<<<<<< HEAD` até `=======` é o que estava no ramo HEAD no nosso caso o `master`, e de `=======` até `>>>>>>> iss53` é o que tinhamos no ramo `iss53`.

Após visualizarmos os dois pontos vemos que toda a informação é relevante para o arquivo então o merge manual é manter os dois pontos no arquivo. Então se o professor leu este texto de um like no pull request depois! Após resolvermos o conflito, fazemos um commit pelo terminal descrevendo a resolução do commit. Fazemos isso com os commandos `$ git add README.md` e o `$ git commit -m 'Resolve conflitos de merge'`.

Podemos visualizar o que ocorreu atráves do commando: `$ git log --graph --decorate  --all`

A saída desse commando é a seguinte:

```
*   commit 43ee8b58b0c092031ca1a58c12b409e715d240e5 (HEAD -> master)
|\  Merge: 6c64d2c ed6a41d
| | Author: Lucas Kruger <lucas.kr1996@gmail.com>
| | Date:   Thu Apr 20 20:41:25 2017 -0300
| |
| |     Resolve conflitos de merge
| |
| * commit ed6a41dd1b8c2ef4f917084f4a9347a1d58e249f (iss53)
| | Author: Lucas Kruger <lucas.kr1996@gmail.com>
| | Date:   Thu Apr 20 20:29:48 2017 -0300
| |
| |     Faz o ultimo commit no branch da iss53
| |
| * commit 4c5c633b84fef3a099e1ccccf70f01e1530a2898 (origin/iss53)
| | Author: Lucas Kruger <lucas.kr1996@gmail.com>
| | Date:   Thu Apr 20 20:20:18 2017 -0300
| |
| |     Faz quarto commit da imagem
| |
* | commit 6c64d2c2e1cfff5a89cb145a801e71db1894b0b4
|/  Author: Lucas Kruger <lucas.kr1996@gmail.com>
|   Date:   Thu Apr 20 20:27:45 2017 -0300
|
|       Faz quinto commit da imagem
|
* commit 8d5ef82d63992961fbd150f87c4e3eb241dbd5ef
| Author: Lucas Kruger <lucas.kr1996@gmail.com>
| Date:   Thu Apr 20 20:13:21 2017 -0300
|
|     Faz terceiro commit da imagem
|
* commit 65395be00cb4b00da753e48009fa16cb43991127
| Author: Lucas Kruger <lucas.kr1996@gmail.com>
| Date:   Thu Apr 20 20:09:07 2017 -0300
|
|     Faz o segundo commit da imagem
|
* commit 3721d2275e8c330c2add32ed1c161367bf2535c2
| Author: Lucas Kruger <lucas.kr1996@gmail.com>
| Date:   Thu Apr 20 20:07:44 2017 -0300
|
|     Faz primeiro commit da imagem
|
* commit 5e050286d052fe63cac3045ff3ffe98420db2e6d
| Author: Lucas Kruger <lucas.kr1996@gmail.com>
| Date:   Thu Apr 20 20:05:26 2017 -0300
|
|     Inicia a questão nr 3

```
Nele conseguimos ver a arvore de commits do nosso repositório entre os branchs.

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.
**Resposta:**
Conforme descrevemos na questão anterior, um conflito de merge ocorre quando temos dois `branch's` dentro de um repositório e um arquivo sofre alterações no mesmo ponto nos dois `branch's`.
Quando executamos o `$ git merge iss53` temos ali uma mescla do ramo atual no nosso exemplo anterior o `master` com o ramo `iss53`. A representação de como identificar o conflito está descrito anteriormente (`<<<<<<< HEAD` / `=======` / `>>>>>>> iss53`).

### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

``` javascript
'use strict';

var objetoJavaScript = {
  atributoTipoString: 'Tipo String',
  atributoTipoNumber: 0,
  atributoTipoArray: []
}

const constanteDoObjeto = objetoJavaScript;

console.log(constanteDoObjeto.atributoTipoString);
//Teremos a saída: Tipo String

```
Para executar o código com nodejs basta executar o commando: `$ node questao6.js`.

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
**Resposta:**

``` JavaScript
'use strict';

/*
### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
*/
const funcao = (var1, var2) => {
  return {
    a: var1,
    b: var2
  }
}

const object = funcao('valor1 em a', 'valor2 em b');

console.log('Valor de a: ' + object.a + ' Valor de b:' + object.b);
```
Para executar o código com nodejs basta executar o commando: `$ node questao7.js`.

### 8. Descreva o funcionamento de um escopo em JavaScript
**Resposta:**
Toda variavel criada fora do escopo de uma função é considerada uma variavel global.

Toda variável declarada dentro de uma função não poderá ser acessada de fora do seu escopo.

``` JavaScript
'use strict';

var variavelGlobal = 1; // Esssa variavel pode ser acessada por qualquer função.

const funcao = () => {
  var variavelDoEscopoDaFuncao = 2;
  console.log(variavelGlobal); //Saida será: 1
  console.log(variavelDoEscopoDaFuncao); //Saida será: 2
}

funcao();

console.log(variavelGlobal); //Saida será: 1
console.log(variavelDoEscopoDaFuncao); //Teremos um erro pois a variável não está definida no escopo global.
```

### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?
``` javascript
var var1;

function ctrlP(val, imp) {
  console.log('ctrl');
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val);
}

console.log(var1);
var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) {
  console.log(vlr);
  return {
    impresso: vlr
  }
});
console.log(var1);
console.log(rt);
```
**Resposta:**

``` javascript
var var1; //Uma variavel var1 existe no escopo global mas sem definição de valor.

function ctrlP(val, imp) { //Uma função ctrlP é criada, a qual irá esperar dois parametros: val, imp
  console.log('ctrl'); // imprime no console a string ctrl
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val); // executa a função passada por paramtro enviando por parametro val.
}

console.log(var1);//imprime no console a variavel var1.

var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) { //variavel rt recebe a execucao da função ctrlP, aqui a função ctrlP recebe a variavel var1, e uma função que tem como parametro a variavel vlr.
  console.log(vlr); //aqui printa o valor da variavel vlr que é o parametro esperado pela função.
  return { // retorna um objeto javascript com o atributo impresso que tera o valor da variavel vlr que é a variavel do parametro da função que está sendo passada por parametro para a função ctrlP.
    impresso: vlr
  }
});
console.log(var1); //Imprime o valor da variavel var1.
console.log(rt); //Imprime o valor da variavel rt.
```
A ordem de saída será:
```
1- undefined
2- ctrl
3- impresso
4- passou aqui
5- { impresso: 'impresso' }
```

### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?
**Resposta:**
Em termos de acesso aos atributos não há diferença, porém quando seu atributo possuir uma nomenclatura fora do permitido (a-z, A-Z, _ ou $) será necessário a utilização do `objecto['atributo']`, ou seja, quando seu atributo tiver nomenclatura iniciada com um número ou um caracter especial.
