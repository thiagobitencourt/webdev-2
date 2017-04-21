# Atividade 01 - Carlos Norberto Danker

### 1. Quais são as duas formas de se obter um repositório git?
- Clonando um repositorio já existente através do comando $ git clone https://github.com/thiagobitencourt/webdev-2/

- Importar um diretorio ou projeto já existente $ git init

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Mostra o estado do repositório, mostra arquivos que foram modificados, removidos e/ou estão pendentes de commit.

Por Exemplo o estado atual:
```
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        Atividade01/
        app.js
        package.json

nothing added to commit but untracked files present (use "git add" to track)
```
### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

- A imagem descreve  um repositorio com 5 commits sendo separa em dois branches apartir do 3 commit sendo que o master está com o repositorio no 4 commit e o iss53 no 5 commit.
Abaixo está os comandos executados para chegar neste estado:

```
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

- A imagem descreve  um repositorio com 6 commits sendo separa em dois branches apartir do 3 commit sendo que o master está com o repositorio no 4 commit e o iss53 no 5 commit. Após foi executado um merge no branche master com o branch iss53
Abaixo está os comandos executados para chegar neste estado:

```
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
$ git checkout master
$ git merge iss53
```
### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

- Após o merge corrigir as linhas listas pelo git, apagar as marcas e executar um novo commit.
Com os exemplos anteriores, abaixo está os comandos executados para chegar neste estado:
```
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
$ git checkout master
$ git merge iss53
Abrir arquivos com conflito apagar linhas marcadas pelo git e corrigir o código conforme desejado.
$ git commit -am "ultimo commit"  
```
### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

``` JavaScript
const foo = {
  string: "Texto",
  number: 41,
  array: []
};
```

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

``` JavaScript
function questaoSete(valor1, valor2){
  var objetoDeRetorno = {
    a: valor1,
    b: valor2
  };
  return objetoDeRetorno
}
```
var executaQuestao = questaoSete(5, 'seis');
console.log(executaQuestao)
'''
### 8. Descreva o funcionamento de um escopo em JavaScript

- Escopo é o nome dos limites de variáveis, abaixo um exemplo de seu funcionamento onde temos um escopo dentro de outro, as variáveis declaradas dentro de "objetoDeRetorno" podem ser usadas até o limite do escopo de "questaoSete":

``` javascript
function questaoSete(valor1, valor2){ //inicio do escopo questaoSete
  var objetoDeRetorno = { //inicio escopo objetoDeRetorno
    a: valor1,
    b: valor2
  }; //Fim do escopo objetoDeRetorno
  return objetoDeRetorno
} //fim do escopo questaoSete
```
### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

-
``` javascript
var var1; //Cria variavel global var1 sem valor.

function ctrlP(val, imp) { //Cria função ctrlP, com dois parametros: val, imp
  console.log('ctrl'); // imprime ctrl
  var1 = "passou aqui"; // Altera o valor de var1 para "passou aqui"
return imp(val); //retorna parametro enviando por val.
}  
console.log(var1);//imprime var1.

var1 = "impresso"; // Altera o valor de var1 para "impresso"
var rt = ctrlP(var1, function(vlr) { //Cria variavel rt que recebe a função ctrlP, aqui a função ctrlP recebe a variavel var1, e uma função que tem como parametro a variavel vlr.
  console.log(vlr); //imprime valor da variavel vlr.
  return { // retorna o atributo impresso com o valor da variavel vlr.
    impresso: vlr
  }
});
console.log(var1); //Imprime variavel var1.
console.log(rt); //Imprime variavel rt.  
```

```
undefined
ctrl
impresso
passou aqui
{ impresso: 'impresso' }
```

### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?

- Você terá o mesmo resultado utlizando as duas opções como exemplo o código abaixo. Deve-se utlizar a segunda opção em casos de seu atributos seguirem uma nomenclatura iniciada com um número ou caracteres especiais.

``` javascript
var pessoa = {
  nome: "Carlos",
  idade: 28,
  12: 69
};

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa['nome']);
console.log(pessoa['12']);
```
