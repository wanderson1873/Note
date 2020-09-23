
# 📝 Iniciando com o Node.JS

Note é o meu cadernido de anotaçôes pessoal onde escrevo tuturiais ou scripts.

<br>

---
## Primeiro passo: Arquivos e pastas

Na pasta do projeto, cria um arquivo `server.js` (o nome é opcional) e duas pastas `views` e `public`. Na pasta views ficara todos os arquivos `njk`, Na pasta public ficara todos os arquivos `css` e `js`.

---

## Segundo passo: Dependências

Instale as dependências

```js
//Modulos do node.js
npm init -y
```

```js
//Instalando o express
npm install 
```

```js
//Instalando o nodemon
npm install -D nodemon
```

Se não for usar o Tamplate Nunjucks não é preciso instalar a proxima dependência

```js
//Instalando o nunjucks
npm install nunjucks
```

---

## Terceiro passo: Configurando 

Agora vamos configurar o arquivo `server.js`.

```js
const express = riquere('express')
const server = express()
const nunjucks = riquere('nunjucks')

// Tamplate engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

// root main
server.get("/", function() {})

server.listen(5000, function() {
    console.log("server is running!")
})
```

---


Feito com :purple_heart: by [Wanderson Oliveira](https://github.com/wanderson1873)