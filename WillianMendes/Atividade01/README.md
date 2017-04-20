# Atividade 01	- Willian Mendes do Rosario.

## Questoes

### 1.	quais sao as duas formas de se obter um repositorio git?

	git init: cria um diretorio sobre o controle git,

	git clone: cria uma copia de um repositoria ja existente.

### 2. Explique para que serve o comando git status. Use exemplo para complementar a resposta.
	
	o comando "status" é utilizado para demonstrar o que tem de diferente do computador com o repositorio,


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


### 3. Levando em consideração commits e branches criados com Git, explique o que representa a imagem abaixo e descreva quais comandos Git foram executados para se obter este estado

	a imagem representa uma brench (master) na versao "c4" e uma segunda brench (iss53) que se originou na versao
	"c2" e atualmente esta na versao "c5"



	```
	$ git checkout -b iss53	
	```

### 4. A imagem a seguir representa um estado posterior à imagem apresentada na questão 3. Explique o que representa a imagem e descreva quais comandos Git foram executados para se obter este estado.

	a brench principal (master) esta no commit versao "c6" e a segunda branch (iss53) esta fazendo uma migração para
	a o commit atual da master.

	

	```
	$(master) git commit
	$(master) git checkout iss53
	```

	```
	$(iss53) git pull origin master
	$(iss53) git merge master
	```	