# Atividade 01 - Eleani Kreutzfeld

## Questões

### 1. Quais são as duas formas de se obter um repositório git?

- git init - Coloca determinado diretório sobre o controle do Git
- git clone - Faz um clone de um repositório existente

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos, e/ou estão pendentes de commit.

Por exemplo, o estado atual do respositório:

'''
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   ../CONTRIBUTING.md
        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")
'''

Neste caso, temos os arquivos /CONTRIBUTING.md e Atividade01/README.md que precisam ser adicionados para poder fazer o commit.

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

### 3. Trapp!!!

$ git branch iss53 - Criado o branch iss53
$ git branch - Listado os branchs e visto que estamos no master

$ git add/git commit - Alterado o arquivo e comitado, assim temos o commit C2 do exemplo

$ git checkout iss53 - alterado para o branch iss53

$ git add/git commit - Realizado dois commits no branch iss53

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

Após a atividade 3, feito os passos

$git checkout master - Mudado para o branch master
$git merge iss53 - Mergeado as alterações do branch iss53 para o master

### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

Con
$git merge iss53 - Mergeado as alterações do branch iss53 para o master
