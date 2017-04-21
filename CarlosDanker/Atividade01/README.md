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

'''
$ git branch iss53
$ git commit -am "primeiro commit"
$ git checkout iss53
$ git status
$ git branch
$ git commit -am "outro commit"
'''

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

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
