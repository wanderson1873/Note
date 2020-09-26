
# 📝 Comandos Git
Principais comandos no git para usar no dia-a-dia. Usando Git e GitHub.

<br>

---

## Primeiros comandos básicos

- Para criar um novo repositório

```bash
git init [nome_da_pasta]
```
ou use  `git init`  se ja existir a pasta

```bash
git init
```
 
 ---

 - Varificar se houve alguma alteração

 ```bash
git status
```

---

 - Traquear todos arquivos
 
 ```bash
git add -A
```

---

 - Fazer commits

```bash
git commit -am "[comentario_aqui]"
```

---

- Visualizar lista de todos os commits

```bash
git log
```
---

- Visualizar branch

```bash
git branch
```
---

## Revertendo Modificações
`git-reset` - Redefine o __HEAD__ atual para a condição especificada

 _`--soft`_

 Volta no __HEAD__ especifico, com os commits preparadas no `git status.` _(muito usado)_

exemplo
```bash
git reset --soft [<commit>]
```

 _`--mixed`_

 Volta no __HEAD__ especifico, mas não a árvore de trabalho (ou seja, os arquivos alterados são preservados, mas não marcados para um commit) e relata o que não foi atualizado. Esta é a ação predefinida.

exemplo
```bash
git reset --mixed [<commit>]
```

 _`--hard`_

 Volta no __HEAD__ especifico deletando todos os `commits` mais recentes. _(menos usado)_

exemplo
```bash
git reset --hard [<commit>]
```


```bash
git reset [<modo>] [<commit>]
```

---


Feito com :purple_heart: by [Wanderson Oliveira](https://github.com/wanderson1873)