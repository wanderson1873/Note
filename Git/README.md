
# 📝 Comandos Git
Principais comandos no git para usar no dia-a-dia. Usando Git e GitHub.

<br>

---

# Tópicos

[Principais comandos](#principais-comandos)

[Branches](#branches)

[Revertendo Modificações](#revertendo-modificacoes)

[Git e GitHub](#git-e-github)

[Git revert](#git-revert)

[Pull](#pull)

[Clone](#clone)


---

## Principais comandos

<br>

Puxandos alterações feitas remotamente
```bash
$ git pull origin [branch]
```

Criar um novo repositório
```bash
$ git init [nome_da_pasta]
```
ou use  `git init`  se ja existir a pasta

```bash
$ git init
```
 
 ---

 Verifica o status de alterações
 ```bash
$ git status
```

---

 Traquear todos arquivos
 ```bash
$ git add -A
```

---

 Fazer commits
```bash
$ git commit -am "[comentario_aqui]"
```

 Fazer commits remoto (importante)
```bash
$ git push -u origen master
```
---

Visualizar lista de todos os commits
```bash
$ git log
```

---

Visualizar modificações no arquivo
```bash
$ git diff
```

---


## Branches
Visualizar, adicionar, trocar, deletar.

<br>

Visualizar todas as branch
```bash
$ git branch
```

Criar nova branch
```bash
$ git branch [nome_branch]
```

Mudar de branch
```bash
$ git checkout [nome_branch]
```

Deletar branch local
```bash
$ git branch -D [name_branch]
```

Deletar branch remoto
```bash
$ git push origin :[name_branch]
```

---

## Revertendo Modificações
`git-reset` - Redefine o __HEAD__ atual para a condição especificada

 _`--soft`_

 Volta no __HEAD__ especifico, com os commits preparadas no `git status.` _(muito usado)_

exemplo
```bash
$ git reset --soft [<commit>]
```

 _`--mixed`_

 Volta no __HEAD__ especifico, mas não a árvore de trabalho (ou seja, os arquivos alterados são preservados, mas não marcados para um commit) e relata o que não foi atualizado. Esta é a ação predefinida.

exemplo
```bash
$ git reset --mixed [<commit>]
```

 _`--hard`_

 Volta no __HEAD__ especifico deletando todos os `commits` mais recentes. _(menos usado)_

exemplo
```bash
$ git reset --hard [<commit>]
```

---

## Git e GitHub
Conectando git com github. [+Detalhes](https://docs.github.com/pt/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

1. Abrir Git Bash.

2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu GitHub.
```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

 O comando criará uma nova chave SSH, usando o e-mail fornecido como uma etiqueta. (só apertar enter)
```bash
> Generating public/private rsa key pair.
```

3. Quando aparecer a solicitação "Enter a file in which to save the key" , presssione Enter. O local padrão do arquivo será aceito.

```bash
> Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]com"
```

4.
```bash
> Enter passphrase (empty for no passphrase): [Digite uma senha ou não]
```
```bash
> Enter same passphrase again: [Novamente]
```

5. Copie a chave prublica gerada dentro do arquivo `.ssh`.

6. Cole a chave dentro de `SSH and GPS keys` do GitHub. 

7. Conecte o repositório local com o remoto.
```bash
$ git remote add origin [url_remota]
```

---

## Git revert
Voltar para um commit sem perder os atuais. Salvador das sexta-feiras

```bash
$ git revert --no-edit [number_commit]
```

---

## Pull
Puxandos alterações feitas remotamente.

```bash
$ git pull origin [branch]
```

---

## Clone
Clonando repositorios remotos.

```bash
$ git clone [url_projeto]
```

---


Feito com :purple_heart: by [Wanderson Oliveira](https://github.com/wanderson1873)