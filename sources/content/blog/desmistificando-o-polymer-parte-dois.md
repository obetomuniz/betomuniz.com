---
title: "Desmistificando o Polymer : Parte 2"
page_title: "Desmistificando o Polymer:"
page_subtitle: "Olá Polymer"
current_title: "Beto Muniz — Desmistificando o Polymer : Parte 2"
date: 2014-11-16
url: /blog/desmistificando-o-polymer-parte-2/
collection: blog
template: blog/post.html
description:  XPTO
draft: true
keywords: web-components, desmistificando, iniciando, tutorial, polymer
---

Antes de começar este post, quero salientar que este é um assunto que eu particularmente adoro, mas isso não importa muito pra ninguém...então vamos ao que interessa...vamos **Desmistificar o Polymer**.  :)

### Mas primeiro...

Mas antes de começar a falar sobre o Polymer, vale a pena esclarecer o principal assunto que ele aborda e que basicamente é: **Web Components**.

## Web Components

Para resumir de uma forma bem objetiva, visto que eu já tenho um post que fala sobre Web Components e que você pode conferir [aqui]().
Web Components nada mais é que um padrão guarda-chuva desenvolvido pela [W3C]() e que propõe a solução de um problema não tão novo na web, que é o de Componentização.

### Legal! Mas qual o cenário atual desta forma de Componentização proposta pela W3C?

De acordo com as guidelines, todas as especificações do padrão estão finalizadas, mas nem todos os browsers atuais implementaram, dê uma olhada na seguinte tabela e veja a atual situação disso:

![Are We Componentized Yet?]

Esta tabela foi tirada do site *[Are We Componentized Yet?]()*, que é um site bem legal para quem quer acompanhar mais sobre o estado atual de implementações dos padrões oficiais de Web Components.

### O problema...

Vale a pena observar na tabela anterior dois problemas nítidos, **Safari** e **Internet Exploerer**. Infelizmente, no caso do Internet Explorer, nenhum dos padrões foi implementado até o momento, mas já existe dentro do roadmap do browser esta proposta e isso você pode conferir [aqui](https://status.modern.ie), mas com relação ao Safari, a Apple já está em fase de desenvolvimento dos padrões dentro do browser, porém mesmo entre os browsers que já implementaram existem alguns problemas de incompatibilidade, como por exemplo o Firefox ainda ter bugs com relação ao Chrome, e este por sua vez é o melhor para testar os padrões debaixo do guarda-chuva do Web Components. Mas sabe o que é incrivel nisso tudo?

### É que já tem gente usando...

Dois exemplos clássicos são:

![Salesforce]

E o Github:

![Github]

Mas depois de ler tudo que eu escrevi neste post até agora, é normal ficar assim...

![Absurdo]

É ...eu mesmo, quando vi pela primeira vez, achei meio insano, e me perguntei: como é que eles fazem para utilizar estes padrões Web Components se ele ainda não é suportado por todos os browsers? E a resposta dessa pergunta faz agente cair em um tópico não muito agradavel, mas muito natural no mundo web e que basicamente é o uso de **Polyfills**.

### Polyfills

Para quem não sabe, polyfiils são coberturas de codigo para implementações nativas que não existam no browser corrente, ou seja, são *"emulações"* de funcionalidades para um desenvolvimento linear entre os browsers.

Mas é ai que o Polymer entra...

## O que é o Polymer

O **[Polymer]()** basicamente é uma biblioteca desenvolvida e mantida pela *Google* que entrega inúmeros recursos de forma bem prágmatica e rica para o desenvolvimento de Web Components em browsers atuais.

## Mas ainda fica bem superficial...

Para entender a realidade dessa *biblioteca*, temos que entender como ela funciona e para falar sobre isso, devemos entender as **Polymer Layers**

## Polymer Layers

As Polymer Layers basicamente são camadas de atuação do Polymer e para entender melhor, esta imagem ilustra perfeitamente o que estou dizendo:

![Polymer Layers]

E falando um pouquinho sobre cada camada, o que temos basicamente é:

Foudation: Esta camada é onde atua o Polyfill que o Polymer utiliza. É aqui que fica a responsabilidade de promover uma consistência de trabalho com o Polymer.
Core: Como o nome já arremete, é a camada de controle, ou seja, o que cria uma interação rica com o polyfill e também com a API de desenvolvimento do Polymer.
Elements: É a camada onde o Polymer oferece uma API para desenvolvimento de Elementos e também de elementos previamentes desenvolvidos para facilitar o trabalho com ele, para que agente não fique reinventando a roda.

E dando um pouquinho mais de atenção para a camada *Elements*... é bom destacar que para o Polymer...

> Everything is an element.

Isso em primeiro momento é estranho ou sem sentido, mas quando você olha para a estrutura de elmentos polymer, nós vemos que ele entrega vários tipos de elementos e para ilustrar isso, irei dar alguns exemplos:

### Elementos Não-visuais

Uma das categorias de elementos, são os elementos não-visuais e entre estes estão os:

#### Elementos de Dados *(Data Elements)*

**&lt;core-ajax&gt;**: Um elemento que controla requisições ajax com callbacks entre outros recursos.<br>
**&lt;core-localstorage&gt;**: Um elemento wrapper da funcionalidade nativa *LocalStorage*

#### Elementos de Animações *(Animation Elements)*

**&lt;core-animation&gt;**: É um elemento que basicamente utiliza css3 e JavaScript para aplicar animação em objetos do DOM.<br>
**&lt;core-animation-prop&gt;**: Defini uma propriedade CSS para animar de qualquer objeto do DOM.

Mas além destes, existem outros inúmeros elementos não visuais, mas além de elementos não-visuais, também temos a disposição elementos visuais, por exemplo:

### Elementos Visuais

#### Paper Elements

**&lt;paper-slider&gt;**: É um elemento que simula do &lt;input type=&quot;slider&quot;&gt; utilizando o Material Design.<br>
**&lt;paper-spinner&gt;**: É um elemento que entrega o spinner proposto pelo Material Design.

#### Core Elements

**&lt;core-collapse&gt;**: É um elemento que entrega o controle de conteudo via collapse.<br>
**&lt;core-icon&gt;**: É um elemento que permite instaciar um set de icones oferecidos pelo Polymer.

E vale lembrar que além desses elementos que apresentei, existe uma outra série de elementos e que você pode conferir [aqui](https://www.polymer-project.org/docs/elements/).

Mas tendo em mente que o Polymer oferta um pacote interessante de elementos, ele também permite criar e extender elementos de forma bem declarativa e utilizando-se de todo o workflow que ele oferece, caindo ma filosofia de *eliminar o boilerplate* e não apenas oferecer coisas prontas.

### E como isso acontece?

Veja o modelo abaixo e tenha em mente que essa é a forma nativa de se criar Web Components, porém vale lembrar que utilizando-se dessa regra, você não entrega um Web Component para funcionar no Safari e nem no Internet Explorer, além de não poder utilizar-se de outros recursos que a web moderna oferece, como Mutation Observers, Web Animation API, Pointer Events entre outros.

![Hello World Nativo]

Agora veja como é feito com o Polymer, e agora sim, utilizando-se de vários recursos que a web moderna oferece.

![Hello World Polymer]

Bem melhor não é? Muito mais declarativo, semântico e simples, pois através do elemento `<polymer-element>`, você consegue criar um contexto pro seu Web Component trazendo a tag `<template>` para dentro do escopo de criação além de poder aplicar esquemas como Two-way data biding, Animação nativa, Isolamento real do elemento por causa do Shadow DOM entre outros conceitos conhecidos.

E sinceramente ao ver como é simples trabalhar com Polymer, gosto de olhar para o seguinte gif:

![Its Magic]

Mágico!!! Mas não no sentido de você não saber o que está acontecendo, mas pela forma que a ferramenta te possibilita trabalhar e como eu já disse, com o melhor que a web moderna oferece.

Mas mesmo com tudo o que já disse até o momento, o Polymer ao ser criado, gerou diversas dúvidas com relação ao que ele oferece, irei tentar levantar cada uma, mas caso tenha mais, sinta-se a vontade de colocar nos comentários.

## Polymer FAQ

### Apenas um polyfill?

Polymer tem sim o melhor polyfill para se trabalhar com Web Components nos browsers atuais, mas como já apresentado colocado anteriormente, ele não é apenas um Polyfill, isso é apenas uma camada de atuação dele. E prova disso é o isolamento total do polyfill da biblioteca. Você por exemplo, pode usar o polyfill que o polymer usa e desenvolve sem chamar o polymer e criar elementos de forma nativa, mas com a vantagem de fazer eles funcionarem no Safari e Internet Explorer.

### O polymer é um framework killer?

Não, na verdade o Polymer não é um framework em nenhuma de suas camadas de atuação, visto que o foco do Polymer é entregar um desenvolvimento mais linear, pragmático e rico de Web Components, ou seja, você poderá utilizar o Polymer com qualquer framework ou biblioteca, e por isso não veio para matar nenhum framework ou biblioteca, sem contar que ele é totalmente Framworkless.

### O Polymer é o próximo AngularJS?

Não, a finalidade do Polymer, como eu disse anteriormente é para o desenvolvimento de Web Components e o AngularJS tem como proposito principal o desenvolvimento de Aplicações Ricas através da oferta de Services, Rotas, Models entre inúmeros outros recursos, mas nada impede a utilização do Polymer com Angular, visto que ambos tem propósito diferente e beneficios diferentes.

### AngularJS Directives e EmberJS Components já atendem tudo que estes novos padrões pregam. Pra que usar Polymer para isso?

Infelizmente a realidade de ambos recursos do Angular e Ember respectivamente são semelhantes, mas não atendem o que os padrões abaixo do padrão Web Components oferecem, por exemplo quando o assunto é isolamento do componente, utilizando o Angular e o Ember você tem isolamento apenas a nível de Framework e apenas isola o JavaScript, mas utilizando o Polymer, você isola CSS, HTML e JavScript a nível de browser, ou seja, segurança e isolamento de aplicação total do seu componente.

### Ouvi elementos? Então o Polymer é o próximo Twitter Bootstrap?

Não mesmo, ele oferece sim componentes prontos, mas seguindo a filosofia de eliminação de boilerplate, onde ele permite você também criar elementos e ursufrir de todos os elementos que ele oferece, pense nos elementos que ele oferece apenas como blocos de construção que estão ai apenas para serem utilizados e inclusive recriados, mas não apenas isso.

### O Polymer é o Material Design da Google?

Não, mas a Google por utilizar-se de do Material Design como padrão de aplicação, nada mais sensato que utilizar o Material Design nas aplicações do Polymer, ou seja, nos elementos visuais oferecidos por ele, mas resumindo, o Polymer não é o Material Design, porém é um caminho para utilização do conceito.

### Mas isso é muito futurista, o Polymer é uma ferramenta do futuro?

Não mesmo, justamente porque ele já está pronto para ser utilizado, com as devidas cautelas, mas não tem nada de futurista no que estou dizendo neste post, pois até como exemplifiquei, já tem gente grande usando esses padrões.

Mas é isso, tudo certo né? Lembrando que qualquer outra dúvida ou sugestão, escreva no comentário, quem sabe eu não adiciono aqui também? :)

![Gif Joinha]

### Irado! Estou, mas ainda não estou convencido

Já foi dito o que ele é, como funciona, o que ele não é, mas quais são os principais motivos para utilização do Polymer?

**Produtividade**: Já que cria abstrações incríveis para criação de components, além de fornecer componentes prontos.<br>
**Declarativo**: Como já exemplificado, ele é beeeeem declarativo. Facilita bastante desenvolver Web Components ricos.<br>
**Manutenível**:<br>
**Reusável**:<br>
**Extensível**:<br>
**Interoperável**:<br>
**Acessível**:<br>
**Componentizado**:<br>
**Testável**:<br>
**Leve**:<br>

![Gif OMG]

### Sei que agora você quer aprender, mas a pergunta é: Como?

[Polymer Project]():
[WebComponents.org]():
[CustomElements.io]():

E várias pessoas como:

@ebidel
@zenorocha
@addyosmani
@rob_dodson
@PascalPrecht
@eduardolundgren
@sindresorhus
@passy

And me: @obetomuniz :)

Também gostaria de deixar o link de uma videocast que fiz sobre o Polymer, onde abordo praticamente tudo que digo nesse post, porém com muito mais detealhes:

[link do video]()

Também deixo o link de um Codelab que dei no GDG-BH no evento It's Hackademic Polymer:

E é isso pessoal, quaisquer dúvidas sobre o assunto e sugestões, basta deixar nos comentários.

Espero que tenham gostado...

## E vamos componentizar o/

&#10017;

### Referências:
