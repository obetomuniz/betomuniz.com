---
title: Iniciando com Node Webkit
page_title: Iniciando com Node Webkit
document_title: Beto Muniz — Iniciando com Node Webkit
date: 2014-08-18
url: /blog/iniciando-com-node-webkit/
collection: blog
layout: blog/post.hbs
description:  Abordagem feita para iniciantes e interessados em aprender mais sobre Node Webkit.
keywords: node-webkit, nodejs, webkit, javascript, iniciantes, tutorial
---
"Antes tarde, do que nunca" já dizia a frase...

Depois de tanto tempo, consegui começar a escrever artigos (técnicos ou não) em meu blog pessoal. Para mim isso é uma realização e uma satisfação, pois acredito que além de usar estes artigos para **fixar meus estudos**, também poderei auxiliar algumas pessoas, com conteúdo em português do que gosto de estudar. E sinceramente espero tornar isso uma prática comum.

Mas deixa eu parar de melodrama e partir para o que interessa.

----

## O que é Node Webkit?

Escolhi falar de Node Webkit neste primeiro post, porque percebi uma crença de algumas pessoas de que esta tecnologia é de fato muito "revolucionária" para nosso ambiente atual de desenvolvimento, porém ainda se fala pouco dela. E afinal, o que é **[Node Webkit](https://github.com/rogerwang/node-webkit)**?

Sendo bem direto, é um runtime desenvolvido pela Intel e que teve seu código aberto em 2007. Mas para responder esta pergunta melhor, é interessante começar falando justamente do que dá o seu significado, ou seja, seu nome.

A primeira parte, ***node***, vem da integração com o [NodeJS](http://nodejs.org/), que por sua vez é uma plataforma desenvolvida sobre a engine de javascript do [Chrome](http://www.google.com/intl/pt-BR/chrome/browser/) de codinome **[V8](https://code.google.com/p/v8/)**.

A segunda parte, ***webkit***, refere-se ao [Webkit](https://www.webkit.org/), que basicamente é um projeto open source de um *browser engine* muito poderoso e que já foi utilizada por navegadores famosos como Google Chrome, Opera e Safari, mas atualmente é aplicada apenas por este último.


## Legal, mas qual a utilidade do Node Webkit?

Entendendo do que **node-webkit** é feito, explica-se que ele basicamente é a fusão do NodeJS com o Webkit.

Logo, a utilidade desta fusão é de proporcionar o desenvolvimento de **Aplicações Desktop**, utilizando-se de todo o poder que ambas as tecnologias podem proporcionar, como por exemplo, utilizar HTML, CSS e Javascript (*leia-se Server Side e Client Side*), para o desenvolvimento de aplicações desktops robustas.

![](http://www.reactiongifs.com/wp-content/uploads/2013/07/Dr-Steve-Brule.gif)

> *E Mais uma vez o Javascript quebra paradigmas e trás tecnologias web para um novo universo.*


## Mas como iniciar os estudos?

Atualmente existem várias formas de se trabalhar com *node-webkit*, seja através de [tasks](https://www.npmjs.org/package/grunt-node-webkit-builder) para tasks runners, [bundles](https://www.npmjs.org/package/nodewebkit) ou através da instalação [nativa](https://github.com/rogerwang/node-webkit/wiki/How-to-run-apps), porém neste post vou fazer um passo-a-passo de uma maneira bem simples e multiplataforma utilizando um módulo do [NPM](https://www.npmjs.org).

Para tal, vamos utilizar o pacote **[node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder)**, que possui apenas o NodeJS e o NPM instalados na máquina como dependências.

**1)** Partindo do principio que você tem o NodeJS e o NPM instalados, para instalr o *node-webkit-builder* em nosso ambiente, digite o seguinte comando no terminal:

```sh
$ [sudo] npm install node-webkit-builder -g
```

**2)** E Voilá! Com a ferramenta instalada com sucesso, você agora possui o ambiente mínimo para compilar e rodar nossa aplicação em desenvolvimento.

----

## Demo Time!

Agora que você possui um ambiente instalado, vamos criar um aplicativo *Hello World*.

**1)** Primeiramente, crie um diretório chamado **hello-world**.

**2)** Dentro do diretório *hello-world* crie um arquivo **index.html** e **package.json**

No arquivo *index.html* coloque o seguinte código:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node.js <script>document.write(process.version)</script>.
  </body>
</html>
```

No arquivo *package.json* coloque o seguinte código:

```json
{
  "name": "nw-hello-world",
  "version": "0.0.0",
  "main": "index.html",		// ( Obrigatório ) Este arquivo será requisitado pelo runtime na sua inicialização
  "window":{				// ( Opcional ) Este objeto informa para o runtime como serão as configurações da janela.
    "width": 800,
    "height": 600
  }
}
```
**3)** E por fim, dentro do diretório *hello-world*, execute o seguinte comando no terminal:

```sh
$ nwbuild --run ./
```

Se algo igual ou semelhante a imagem abaixo aparecer na sua tela, é porque tudo ocorreu bem.

![](http://i.imgur.com/gUdiWXr.png )

**BÔNUS (Windows/Mac OSX):** Para transformar sua aplicação num arquivo binário e executavél pelo seu sistema operacional, faça os seguintes passos:

**1)** Ainda no diretório *hello-world*, digite o seguinte comando:
```sh
$ nwbuild -p osx,win ./
```
**2)** Ao fim do processo, uma pasta chamada *build* será criada e dentro dela uma pasta chamada `nw-hello-world` com pastas chamadas `osx` e `win` e os respectivos executáveis para cada um dos sistemas operacionais dentro delas.

----

Mas enfim, vou parar por aqui. Pois como é meu primeiro post, acho que ficou grande, mas deu para contemplar um pouco o que essa tecnologia aborda. Em breve postarei mais sobre Node Webkit e também outras ferramentas que utilizo.

Ah! E muito obrigado a todos pela leitura. E já sabe, qualquer dúvida é só deixar nos comentários.

▲

### Referências:

- [Wiki do Node Webkit](https://github.com/rogerwang/node-webkit/wiki)
- [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder)
