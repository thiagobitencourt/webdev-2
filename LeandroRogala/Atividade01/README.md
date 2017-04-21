# Atividade 01 - Leandro Rogala Britez

## Questões

### 1.Quais são as duas formas de se obter um repositório git?

- git init - Coloca um determinado diretório sobre o controle do git.
- git clone - Faz um clone de um repositório existente.

### 2.Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Mostra o estado atual do repositório, os arquivos que foram modificados, adicionados removidos e o que estão pendentes para adicionar ou commitar.

Exemplo, o estado atual do meu repositorio é:

```
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

A saida do comando diz que teve arquivos modificados e precisa ser adicionado para realizar o commit.

### 3.Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

```
$ git branch iss53 - Cria um novo branch
$ git commit -am "Uma mensagem" - dentro do branch atual(MASTER) faz um novo commit
$ git checkout iss53 - Muda para o branch iss53
$ git status - Verifica o status do projeto
$ git branch - Verifica se está dentro do branch correto
$ git commit -am "Outra mensagem" - Realiza um commmit no branch iss53
$ git commit -am "Outro commit" - Realiza outro commit no branch iss53.
```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

```
$ git checkout master - Altera para o branch master
$ git branch - Verifica o branch que está
$ git merge iss53 - realiza um merge do brench atual (MASTER) com o branch ISS53.
```

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

Um conflito acontece quando vai realizar um merge entre dois brench, e no mesmo arquivo e na mesma linha tem coisas diferente. Para se resolver o git faz uma marcação no arquivo com <HEAD> dizendo o codigo que esta no branch principal e em <<<<  NOMEDOBRANCH
o codigo que esta no branch do merge, para isso, devemos apagar um dos blocos de codigo para corrigir o conflito.

### 8. Descreva o funcionamento de um escopo em JavaScript

O escopo ele limita acesso das variavel. Exemplo no arquivo atividade.js

### 9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

```
$ undefined
$"ctrl"
$"impresso"
$"passou aqui"
${ impresso: "impresso"}
```

### 10. Ao acessar o atributo de um objeto, qual a diferença entre as sintaxes objeto.atributo e objeto[‘atributo’]. Quando deve-se utilizar a segunda opção?

Na verdade elas não tem diferença para acessar o atributo, apenas para ser declarada...
no javascript tem uma regra que só pode declarar variavel com a-z - A-Z - _ ou seja
se por algum motivo precise que sua variavel comece com algo fora desse padrao
deve-se criar a variavel e acessa-la atraves do metodo objeto['atributo'];
