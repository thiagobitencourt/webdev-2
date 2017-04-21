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
$ git branch iss53
$ git commit -am "Uma mensagem"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "Outra mensagem"
```

###4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

```
$ git checkout master
$ git branch
$ git merge iss53
```

###5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

{A ser respondida}

###9. Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

```
$ undefined
$"ctrl"
$"impresso"
$"passou aqui"
${ impresso: "impresso"}
