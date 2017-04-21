# Atividade 01 - Carlos Norberto Danker

### 1. Quais são as duas formas de se obter um repositório git?
- Clonando um repositorio já existente através do comando $ git clone https://github.com/thiagobitencourt/webdev-2/

- Importar um diretorio ou projeto já existente $ git init

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Mostra o estado do repositório, mostra arquivos que foram modificados, removidos e/ou estão pendentes de commit.

Por Exemplo o estado atual:

On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        Atividade01/
        app.js
        package.json

nothing added to commit but untracked files present (use "git add" to track)

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

A imagem descreve  um repositorio com 5 commits sendo separa em dois branches apartir do 3 commit sendo que o master está com o repositorio no 4 commit e o iss53 no 5 commit.
Abaixo está os comandos executados para chegar neste estado:
'''
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
'''

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

A imagem descreve  um repositorio com 6 commits sendo separa em dois branches apartir do 3 commit sendo que o master está com o repositorio no 4 commit e o iss53 no 5 commit. Após foi executado um merge no branche master com o branch iss53
Abaixo está os comandos executados para chegar neste estado:
'''
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
$ git checkout master
$ git merge iss53
'''
### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.
Após o merge corrigir as linhas listas pelo git, apagar as marcas e executar um novo commit.
Com os exemplos anteriores, abaixo está os comandos executados para chegar neste estado:
'''
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
'''
### 6. Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.

'''
const foo = {
  string: "Texto",
  number: 41,
  array: []
};
'''

### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.

'''
function questaoSete(valor1, valor2){
  var objetoDeRetorno = {
    a: valor1,
    b: valor2
  };
  return objetoDeRetorno
}

var executaQuestao = questaoSete(5, 'seis');
console.log(executaQuestao)
'''
### 8. Descreva o funcionamento de um escopo em JavaScript


### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

'''
undefined
ctrl
impresso
passou aqui
{ impresso: 'impresso' }
'''

### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?
