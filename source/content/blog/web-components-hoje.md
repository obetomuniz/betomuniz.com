---
title: Web Components! Hoje!
page_title: Web Components! Hoje!
document_title: Beto Muniz — Web Components! Hoje!
date: 2014-09-16
slug: web-components-hoje
url: /blog/web-components-hoje/
collection: blog
layout: blog/post.hbs
description:  Abordagem pessoal feita para quem deseja iniciar os estudos sobre o mundo que envolve Web Components. E feedback para se começar a estudar o assunto desde já!
keywords: web, web-components, components, web, javascript, iniciantes
---
## TL;DR

Antes de qualquer coisa, quero dizer que a principal motivação de fazer este post surgiu de uma observação que fiz sobre o mercado de desenvolvimento e sobre o impacto que certas tecnologias emergentes tendenciam a alterar, e muito, a forma que nós desenvolvedores Front End teremos que trabalhar e estudar daqui pra frente.

Tentarei ser bastante sucinto com relação a conceitos técnicos, pois pretendo salientar os tópicos de forma mais pessoal, até porque existem inúmeros posts conceituais do assunto na web e também porque futuramente vou fazer posts mais aprofundados sobre alguns tópicos a seguir (e.g. No fim do post deixarei alguns links).

Mas vamos lá...

## Web components, um padrão criado por padrões

![Web components, um padrão criado por padrões](http://i.imgur.com/P7DVXbD.png)

Falar de Web Components, é o mesmo que falar de vários assuntos ao mesmo tempo, sem dúvidas nem nesse post e provavelmente em nenhum post relacionado você encontrará tudo sobre o assunto, aliás, o que geralmente é encontrado são referências replicadas, poucos são os artigos diferenciados ou que abordam assuntos mais técnicos e aprofundados sobre o tema.

Mas claro, irei falar dos tópicos relacionados ao padrão Web Componentes que não podem faltar em nenhum post, e estes são: Custom Elements, Templates, Shadow DOM e HTML Imports.

Irei abordar cada um destes tópicos a seguir (e um pouquito mais...)

## Custom Elements

**Custom Elements** talvez seja o padrão que cria mais assimilação para a maioria com relação aos padrões dentro de Web Components.

E isso é muito natural, pois Custom Elements possibilita de forma bem explícita a criação de elementos diferenciados, transformando o desenvolvedor num "web maker", ou seja, o desenvolvedor deixa de ficar limitado a apenas `<button>`, `<div>`, etc. Podendo criar seus próprios elementos HTML com estrutura, comportamento e estilo único.

Já pensou em criar, enfim, um elemento `<tab>` ou `<pagination>`? Deixaria bem mais semântico seu código, né?

Por exemplo, dê uma olhada na estrutura do Carousel do Twitter Bootstrap:

```html
<div id="carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src="..." alt="...">
    </div>
    <div class="item">
      <img src="..." alt="...">
    </div>
    ...
  </div>

  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
```

Imagine poder encapsular todo esse *"divnation"* ou *"listnation"* junto com logica e estilo do Carousel e exibir apenas isso publicamente:

```html
<my-carousel>
  <img src="images/x.jpg" alt="imagem X">
  <img src="images/y.jpg" alt="imagem Y">
  <img src="images/z.jpg" alt="imagem Z">
  ...
</my-carousel>
```

Bem melhor, concorda? E repare principalmente que agora temos um elemento customizado chamado: `<my-carousel>`. Mas explicar isso fica a cargo dos próximos tópicos.  :)

## Templates

Antes de falar sobre o novo padrão para **Templates**, é importante também mostrar como atualmente nós fazemos o controle de templates. E para isso, observe o seguinte exemplo:

```html
<script id="entry-template" type="text/x-handlebars-template">
    template content
</script>
```

E este outro:

```html
<div hidden>
    template content
</div>
```

Talvez em primeiro momento pra você estas sejam formas "elegantes" de se trabalhar com um pequeno pedaço de código e obter controle do mesmo, além de também poder reutilizá-lo (afinal, é um template), mas na verdade, tais aplicações são *"gambiarras bonitinhas"*, que como o Flash um dia representou a única opção para implementar vídeos, mas que hoje não é extremamente necessário, pois possuímos a tag `<video>`, a especificação de Web Components trás consigo uma nova forma de definir pequenos pedaços de códigos reutilizáveis, e para isso, basta utilizarmos a nova tag `<template>`. E digo mais, o principal *plus* de se utilizar esta *feature*, é que ela deixa seu conteúdo inerte, ou seja, se você possui uma tag `<img src="imagem.jpg">` dentro da tag `<template>` que tecnicamente faria a requisição de seu source, não precisará fazer "magias" para controlar essa requisição, pois o browser, irá fazer isso pra você e liberar o request apenas quando você quiser.

Veja um exemplo de aplicação:

```html
<template id="mycard">
  <img src="images/me.jpg">
  <div class="name">Beto Muniz</div>
</template>
```

Muito simples não é? Não sei você, mas eu acho muito f*******a!!! E ainda não terminamos...Continue lendo, pois o proximo tópico é sensacional.

## Shadow DOM

Bom, depois de um breve momento de *frenesi*, duas dúvidas surgem: Tenho um elemento customizado e com um template, posso usar ele em qualquer lugar agora? Possuo agora, um Web Component?

A resposta é: Ainda não. oO

Infelizmente, você ainda não pode pegar este elemento e sair aplicando em todos os projetos que você possui, pois de certa forma o escopo dele está "público", ou seja, uma regra CSS ou uma manipulação Javascript no DOM feita dentro do escopo de sua aplicação, pode influenciar e causar um comportamento indesejado do seu elemento, mas não desanime, pois é possível delimitar um escopo do seu próprio elemento e para isso foi criada uma solução chamada de **Shadow DOM**.

![Feliz](http://i.imgur.com/KK4PVCl.gif)

Basicamente, o padrão Shadow DOM foi pensado para permitir certa independência e isolamento do componente, para que o mesmo seja assegurado de que nada externamente e fora dos planos do que foi pensado para o elemento seja modificado.

Vejamos o exemplo da tag `<video>`: *(sim, a tag `<video>`, como outras, foram feitas utilizando-se dos conceitos de Web Components)*:

![Shadow DOM](http://i.imgur.com/DfxfEY2.png)

Verifique que ela possui uma declaração #shadow-root, e é a partir desta declaração que o "confinamento" do comportamento do seu elemento é respeitada pelo browser e por sua aplicação, sem contar também que a partir desta declaração uma subárvore de DOM é criada, o que também evita assimilar este padrão ao uso de `<iframe>`.

Mas já pensou se no nosso caso, não fosse possível criar este isolamento? Todos os controles por exemplo da tag `<video>` seriam afetados caso você criasse uma regra CSS ou manipulação global via Javascript para o elemento `div`, e é por isso, que para mim, este padrão é o que mais representa que acabamos de criar um componente totalmente independente e pronto para ser usado em qualquer projeto.

E para fins didáticos, a saída do exemplo anterior seria a seguinte:

![Imgur](http://i.imgur.com/vCbH9Oi.png)

## HTML Imports

Bacana, agora que temos um DOM *(kkk)* e um pequeno "mundo" sobre nosso controle, falta ainda ter a possibilidade de empacotar, distribuir, compartilhar e reutilizar de forma simples, e claro, sem precisar recorrer a "gambiarras" ou soluções defasadas.

E para este problema, o padrão **HTML Imports** surgiu.

Pense que um problema *secular* do mundo web, que é trazer o conceito de "includes" para o HTML foi sanado de forma inteligente, e de uma vez por todas, sendo assim, não é necessário usar `<iframe>` ou AJAX de forma direta em um documento para importação e injeção de marcação, estilo e comportamento, para tudo isso, bastará usar a seguinte declaração:

```html
<link rel="import" href="customelements/my-carousel.html">
```

E assim, podemos declarar o mesmo elemento em qualquer lugar e momento dentro da página.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="import" href="customelements/my-carousel.html">
</head>
<body>

    <my-carousel>
      <img src="images/x.jpg" alt="imagem X">
      <img src="images/y.jpg" alt="imagem Y">
    </my-carousel>

    <my-carousel>
      <img src="images/a.jpg" alt="imagem A">
      <img src="images/b.jpg" alt="imagem B">
    </my-carousel>

</body>
</html>
```

***NOTA:*** Cada declaração tem seu próprio escopo, vide o exemplo da tag `<video>`, logo não será necessário usar IDs ou mágicas de identificação como as do exemplo a seguir:

![Handlebars Metamorph Markup](http://i.imgur.com/NHvbPU4.png)

## E espera, ainda não acabou!

Antes de concluir o post, quero lembrar que os tópicos que abordei são oficialmente considerados como base do padrão Web Components, mas outros também são muito importantes, pois criam um ecossistema bem rico para se trabalhar com componentes e alguns que gostaria de pontuar são: **Object.observe()**, **Pointer Events**, **Pointer Gestures**, **Web Animations**, **MutationObserver**... Enfim... Estes são os mais importantes para mim, mas existe uma lista bem grande de outros conceitos que podemos enriquecer ainda mais a criação de um Web Component.

## Mas a moral da historia é...

![Sério](http://i.imgur.com/4QejmOW.gif)

A moral deste post é que como eu disse no começo dele, Algumas tecnologias emergentes estão mudando e muito a forma como nós iremos desenvolver daqui pra frente aplicações web, e pensando a longo prazo, hoje, ou talvez agora, seja o melhor momento para começar a estudar tais tecnologias, pois atualmente temos muito conteúdo novo chegando como as implementações do padrão ES6, Web Components, WebGL, WebRTC, etc. E ter conhecimento deles, colocará o desenvolvimento Client Side num nível, onde não existirá mais a velha comparação entre o sobrinho e o Web Desenvolvedor. E por isso, pense bastante, use uma ou duas horas do seu dia ou semana e estude algum desses conceitos, sem dúvidas em um longo prazo você verá a diferença desses conhecimentos para o seu perfil profissional.

E é isso, falei muito, mas falei tudo que eu queria e como eu queria, espero que tenham gostado. Qualquer dúvida ou caso queria agregar mais para o post, é só comentar.

▲

### Referências:

- [WebComponents.org](http://webcomponents.org/)
- [CustomElements.io](http://customelements.io/)
- [github.com/webcomponents](https://github.com/webcomponents)
- [A Guide to Web Components](http://css-tricks.com/modular-future-web-components/)
- [Web Components: Introdução](http://tableless.com.br/web-components-introducao/)
- [A future called Web Components](http://vimeo.com/97308701)
- [Web Components é uma Revolução?](http://www.akitaonrails.com/2014/07/06/web-components-e-uma-revolucao#.VBZtoZNdVY-)
