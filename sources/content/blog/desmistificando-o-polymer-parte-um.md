---
title: "Desmistificando o Polymer : Parte 1"
page_title: "Desmistificando o Polymer:"
page_subtitle: "Olá Polymer!"
current_title: "Beto Muniz — Desmistificando o Polymer : Parte 1"
date: 2014-11-16
url: /blog/desmistificando-o-polymer-parte-1/
collection: blog
template: blog/post.html
description:  Primeiro post de uma série que visa desmistificar o Polymer.
keywords: web-components, desmistificando, iniciando, tutorial, polymer
---

Antes de começar, queria salientar que este é um assunto que particularmente eu adoro, mas isso não importa muito pra ninguém e em segundo lugar, este post é apenas o primeiro de uma série de posts sobre o Polymer...então vamos ao que interessa...vamos **Desmistificar o Polymer**. :)

### Mas primeiro...

Antes de começar a falar sobre o Polymer, vale a pena esclarecer o principal assunto que ele aborda e que basicamente é: **Web Components**.

## Web Components

Para resumir de uma forma bem objetiva, visto que eu já tenho um post que fala sobre Web Components e que você pode conferir [aqui](http://betomuniz.com/blog/web-components-hoje/).
Web Components nada mais é que um padrão guarda-chuva desenvolvido pela [W3C](http://www.w3.org/) e que propõe a solução de um problema não tão novo na web, que é o de Componentização.

### Legal! Mas qual o cenário atual desta forma de Componentização proposta pela W3C?

De acordo com as guidelines, todas as especificações do padrão estão finalizadas, mas nem todos os browsers atuais implementaram, dê uma olhada na seguinte tabela e veja a atual situação disso:

![Are We Componentized Yet?](https://cldup.com/XTWXxSfR1f-3000x3000.png)

Esta tabela foi tirada do site [Are We Componentized Yet?](http://jonrimmer.github.io/are-we-componentized-yet/), que é um site bem legal para quem quer acompanhar mais sobre o estado atual de implementações dos padrões oficiais de Web Components.

### O problema...

Vale a pena observar na tabela anterior dois problemas nítidos, **Safari** e **Internet Exploerer**. Infelizmente, no caso do Internet Explorer, nenhum dos padrões foi implementado até o momento, mas já existe dentro do roadmap do browser esta proposta e isso você pode conferir [aqui](https://status.modern.ie), mas com relação ao Safari, a Apple já está em fase de desenvolvimento dos padrões dentro do browser. Porém, mesmo entre os browsers que já implementaram, existem alguns problemas de incompatibilidade, como por exemplo o Firefox ainda ter bugs com relação ao Chrome, e este por sua vez é o melhor para testar os padrões debaixo do guarda-chuva do Web Components até o momento. Mas sabe o que é incrivel nisso tudo?

### É que já tem gente usando...

Dois exemplos clássicos são:

[![Salesforce](https://cldup.com/DsaaEFSm9O-2000x2000.png)](https://developer.salesforce.com/blogs/developer-relations/2014/10/chart-components-google-polymer-force-com.html)

E o Github:

[![Github](https://cldup.com/nBb-yGIiGw-2000x2000.png)](http://webcomponents.org/articles/interview-with-joshua-peek/)

Mas depois de ler tudo que eu escrevi neste post até agora, é normal ficar assim...

![Absurdo](https://cldup.com/cNElqlWi8V.gif)

É ...eu mesmo, quando vi pela primeira vez, achei meio insano, e me perguntei: como é que eles fazem para utilizar estes padrões Web Components se ele ainda não é suportado por todos os browsers? E a resposta dessa pergunta faz agente cair em um tópico não muito agradável, mas muito natural no mundo web e que basicamente é o uso de **Polyfills**.

### Polyfills

Para quem não sabe, polyfiils são coberturas de código para implementações nativas que não existam no browser corrente, ou seja, são *"emulações"* de funcionalidades para um desenvolvimento linear entre os browsers. Alguns exemplos de frameworks que usam bastante a técnica é jQuery, AngularJS, MomentJS entre outros, é dificil encontrar um bom framework atualmente que não utiliza-se de polyfills para dar suporte a todos os browsers...

E essa é a deixa pro Polymer...

![Desmistificando o Polymer](https://cldup.com/Sx6Ix2oKtt-3000x3000.png)

## O que é o Polymer?

O **[Polymer]()** basicamente é uma biblioteca desenvolvida e mantida pela *Google* que entrega inúmeros recursos de forma bem prágmatica e rica para o desenvolvimento de Web Components em browsers atuais.

### Mas ainda fica bem superficial...

Para entender a realidade dessa *biblioteca*, temos que entender como ela funciona e para falar sobre isso, devemos conhecer as **Polymer Layers**.

## Polymer Layers

As Polymer Layers basicamente são camadas de atuação do Polymer e para entender melhor, esta imagem ilustra o que estou dizendo, com apenas uma observação que atualmente o *platform.js*, mudou seu nome para *webcomponents.js* em prol de um desacoplamento do Polymer e também para modularização do mesmo:

![Polymer Layers](https://cldup.com/ioU7a7W9UC-3000x3000.png)

E falando um pouquinho sobre cada camada, o que temos basicamente é:

**Foundation:** Esta camada é onde atua o Polyfill que o Polymer utiliza. É aqui que fica a responsabilidade de promover uma consistência de trabalho nos diversos browsers com o Polymer.<br>
**Core:** Como o nome já arremete, é a camada de controle, ou seja, o que cria uma interação rica com o polyfill e também com a API de desenvolvimento de elementos do Polymer.<br>
**Elements:** É a camada onde o Polymer oferece uma API para desenvolvimento de Elementos e também de elementos previamentes desenvolvidos para facilitar o trabalho com ele, para que agente não fique reinventando a roda.

E dando um pouquinho mais de atenção para a camada *Elements*... é bom destacar que para o Polymer...

> "Everything is an element."

Isso em primeiro momento é estranho ou sem sentido, mas quando você olha para a estrutura de elementos oferecidos pelo Polymer, é notório que ele entrega vários tipos de elementos e em diversos campos de atuação, e para conferir isso você pode acessar [aqui](https://www.polymer-project.org/docs/start/usingelements.html).

*(Ainda nesta série de posts, irei abordar mais sobre os elementos disponibilizados pelo Polymer)*.

Mas tendo em mente que o Polymer já oferta um pacote interessante de elementos, ele também permite criar e extender elementos de forma bem declarativa e utilizando-se de todo o workflow que ele oferece, caindo assim na filosofia de *eliminar o boilerplate* e não apenas oferecer coisas prontas.

### E como isso acontece?

Veja a imagem abaixo e tenha em mente que essa é a forma nativa de se criar Web Components, porém vale lembrar que utilizando-se dessa regra, você **não** entrega um Web Component para funcionar no Safari e nem no Internet Explorer, além de não poder utilizar-se de outros recursos que a web moderna oferece, como [Mutation Observer](https://www.polymer-project.org/docs/start/platform.html), [Web Animation API](https://www.polymer-project.org/platform/web-animations.html), [Pointer Events](https://www.polymer-project.org/docs/polymer/touch.html) entre outros.

![Hello World utilizando-se da implementação nativa](https://cldup.com/DOsd6cyah8.thumb.png)

Agora veja como é feito com o Polymer, e agora sim, utilizando-se de vários recursos que a web moderna oferece de forma simples e integrada a Web Components.

![Hello World com Polymer](https://cldup.com/pMrZ_IkaBS-3000x3000.png)

Bem melhor não é? Muito mais declarativo, semântico e simples, pois através do elemento `<polymer-element>`, você consegue criar um contexto pro seu Web Component trazendo a tag `<template>` para dentro do escopo de criação, além de poder aplicar esquemas como Two-way data biding, Animação nativa, Isolamento real do elemento por causa do Shadow DOM entre outros conceitos conhecidos.

E sinceramente ao ver como é simples trabalhar com Polymer, gosto de olhar para o seguinte gif:

![É Mágico](https://cldup.com/5ODe87BLee.gif)

Mágico!!! Mas não no sentido de você não saber o que está acontecendo, mas pela forma que a ferramenta te possibilita trabalhar e como eu já disse, com o melhor que a web moderna oferece.

### Sei que agora você quer aprender, mas a pergunta é: Como?

 Depois desse overview sobre o Polymer, o próximo passo é: Como iniciar agora os estudos com Polymer e também assuntos relacionados a Web Components? E para tal, indico os seguintes links:

[Polymer Project](): Nada melhor que o próprio site, visto que existe uma documentação muito bem feita e também exemplos, porém também é interessante falar que nele você encontrará inúmeros artigos de aplicação de conceitos com Polymer e também relacionados a Web Components;<br>
[WebComponents.org](): Não só por causa que faço parte da organização WebComponents.org, mas também pelo fato de ser um grande hub de informação relacionado ao assunto Web Components, lá você encontra inúmeros artigos, apresentações, slides, ferrametas e referências;<br>
[CustomElements.io](): E por fim, o CustomElements.io é um repósitorio de Elementos disponibilizados pela comunidade, lá você poderá compartilhar o seu elemento e também analisar elementos criados por outras pessoas e é ai que você tem a chance de aprender com a comunidade convenções e também técnicas para criação de Web Components. <br>

Mas além destes links, é importante seguir pessoas que estão diretamente em contato com o desenvolvimento do Polymer e também contribuindo para o projeto e entre estes segue alguns membros:

[@ebidel](https://twitter.com/ebidel)<br>
[@zenorocha](https://twitter.com/zenorocha)<br>
[@addyosmani](https://twitter.com/addyosmani)<br>
[@rob_dodson](https://twitter.com/rob_dodson)<br>
[@PascalPrecht](https://twitter.com/PascalPrecht)<br>
[@eduardolundgren](https://twitter.com/eduardolundgren)<br>
[@sindresorhus](https://twitter.com/sindresorhus)<br>
[@passy](https://twitter.com/passy)

E eu: [@obetomuniz](https://twitter.com/obetomuniz) :)

Também gostaria de deixar o link de uma videocast que fiz sobre o Polymer, onde abordo praticamente tudo que direi nesta série, porém com muito mais detealhes:

<iframe class="post-video" src="//www.youtube.com/embed/Lf-n6d7hfPs" frameborder="0" allowfullscreen></iframe>

Também deixo o link de um Codelab que dei no GDG-BH no evento [It's Hackademic with Polymer](http://itshackademic.com/):

<iframe class="post-video" src="//www.youtube.com/embed/CwiTIYBUHTY?start=3377" frameborder="0" allowfullscreen></iframe>

Mas isso não é tudo, como eu disse, está é uma série e para ler o próximo post,  basta clicar [aqui](), pois lá eu exibo uma lista de fatores que colocam o Polymer em uma posição de vantagem com relação a outras tecnologias e também exibo o motivo de escolher o Polymer como principal meio para criação de Web Components.

E é isso, pessoal espero que tenham gostado da leitura, mas qualquer dúvida sobre o assunto e/ou sugestão, deixe seu comentário, feedbacks sempre são bem-vindos. E por fim, deixo a seguinte mensagem:

**Vamos componentizar!  o/**

&#10017;

<!-- ### Referências: -->
