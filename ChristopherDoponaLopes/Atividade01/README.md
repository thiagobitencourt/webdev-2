# Atividade 01 - Christopher Dopona Lopes

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init: faz um novo repositório em uma devida pasta para ser controlada e gerenciada pelo git.
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


### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

```
$ git branch iss53
$ git commit -am "um commit"
$ git checkout iss53
$ git status
$ git brach
$ git commit -am "outro commit"
```


### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

- Ocorre um conflito pelo motivo de ter feito alterações ao mesmo arquivo.


### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

```
const foo = {
  chave: 'valor string',
  atributoInt: 50,
  atributoArray : []
};
```

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

```
function questaoSete(valorUm, valorDois) {
  var objetoDeRetorno = {
    a: valorUm,
    b: valorDois
  };
  return objetoDeRetorno;
}

var valorRetorno = questaoSete(5, "seis");
console.log(valorRetorno);
```

### 8. Descreva o funcionamento de um escopo em JavaScript.

- Escopo limita o acesso e a modificacao da variavel, pelo motivo do JavaScript ter dois escopos global e local, quando é declarado uma variavel declarada fora de uma definição de uma funcao e uma variavel global, quando é feita dentro de uma funcao uma variavel se torna local.


### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

```
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

- Imprime:
```
+$ undefined
 +$"ctrl"
 +$"impresso"
 +$"passou aqui"
 +${ impresso: "impresso"}
```

### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?

- Não tem diferença em caso de acessar algo, pelo motivo que elas fazem a mesma coisa ate mesmo se for colocado " " deve ser usar ´´ somente quando for numerico
