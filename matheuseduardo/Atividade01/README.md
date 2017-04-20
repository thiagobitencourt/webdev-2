# Atividade 01 - Matheus Eduardo 

## Questões

### 1. Quais as duas formas de se obter um repositório Git?
```
$ git init: coloca o diretório atual sob controle de versão do Git
$ git clone: Faz o clone de um repositório existente
```

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

#### O comando `git status` serve para exibir o estado do repositório local e remoto no momento.
#### Exibe as seguintes informações:

- O branch em que o projeto se encontra. Consequentemente :
    - Se o branch local está atualizado perante o repositório remoto;
    - Se há commits prontos para fazer push;
    - Quais arquivos estão adicionados para commit;
    - Quais arquivos que foram modificados não estão adicionados para commit;
    - Quais arquivos não estão sob controle de versão;

#### Exemplo: 
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

### A saída do comando indica que o arquivo `README.md`, que está no diretório `Atividade01` foi modificado e precisa ser commitado.

### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado.

#### Partindo do commit C2:
```
$ git checkout -b iss53
Switched to a new branch iss53

$ git status
On branch iss53
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean

// São feitas algumas alterações

$ git status
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Atividade01/README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git add Atividade01/README.md

$ git commit -m "Altera README." // Aqui está o commit C3
[iss53 ccfc35b] Altera README.
 1 file changed, 2 insertions(+), 2 deletions(-)

$ git pull


$ git status

$ git add {novas alterações}

$ git commit -m "{mensagem descrevendo a alteração}" // Aqui está o commit C5
```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

### Partindo do commit C5
```
$ git status

```
