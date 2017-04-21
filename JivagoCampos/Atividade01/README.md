# Atividade 01 -  Jivago Campos Oliveira

## Questões

### 1. Quais são as duas formas de se obter um repositorio git?

- git init: coloca o diretorio atual sobre o controle do git.
- git clone: Faz o clone de um repositorio existente.


### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.

- Mostra o estado do repositório, mostra arquivos que foram modificados, adicionados, removidos, e/ou estão pendentes para commit.

- Estarei usando o exemplo, do estado atual do respositório: (tenho os arquivos /Atividade01/README.md que precisam ser adicionados
  para poderem ser commitados.)

### 3.Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos
Git foram executados para se obter este estado.(comentando iss53)

```
git branch iss53
git commit -am "um commit"
git checkout iss53
git status
git branch
git commit -am "outro commit"
```
### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

#### Conforme o professor falou em sala poderia partir do commit C5 para fazer a questão 4.

```
git checkout master - Para voltar para o branch master
git merge iss53 - Mergeado as alterações do branch iss53 para o master
```
### 5. Em que situação acontece um conflito ao executar um merge entre dois branches com Git? E como resolvemos esse conflito? Em sua resposta cite os comandos envolvidos no processo de merge e se julgar necessário represente a situação de forma gráfica, assim como apresentado nas questões 3 e 4.

- resposta:
De acordo com a questão 4, um conflito de merge acontece quando temos dois branch's dentro do mesmo repositório e um arquivo é          alterado no mesmo local nos dois branch's. Digitamos o git merge iss53 para podermos combinar o master com o iss53. A melhor maneira de resolver é ver as alterações feitas e uni-las do melhor jeito possivel.

```
git merge iss53
git status
git commit
```
