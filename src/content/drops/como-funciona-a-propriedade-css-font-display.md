---
draft: true
date: 2020-11-10 1:16 PM -0200
keywords:
- font-display
- css
- web font
- font-face
category: tech
language: pt
title: Como funciona a propriedade CSS font-display?
subtitle: ''
description: Neste drop explico o propósito e comportamento de cada estado da propriedade
  CSS "font-display".
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1605022831/1_jqy9ts.jpg

---
⛲️ `font-display` é uma propriedade CSS usada dentro do contexto `@font-face` para declaração de web fonts customizadas que permite controlar o ciclo de vida de carregamento e renderização de web fonts.

```css
@font-face {
  font-family: "Custom";
  src: url("/fonts/Custom-webfont.woff2") format("woff2"),
       url("/fonts/Custom-webfont.woff") format("woff");
  font-display: block;
}
```

💡 Ao declarar `font-display`, podemos configurar quando e como exibir textos baseado em alguns modelos:

✍️ `auto`: Deixa as definições de quando e como exibir textos com o browser

✍️ `block`: Faz com que o browser desenhe o texto, mas sem exibí-lo, e somente após o carregamento da web fonte, o exibe.

✍️ `swap`: Exibe o texto com uma web font alternativa e previamente configurada até que a web font principal seja carregada.

✍️ `fallback`: Instrui ao browser um estado intermediário aos modos `auto` e `swap`, pois faz com que o texto seja ocultado por 100ms, e se a web font principal não foi carregado, exibe uma web font alternativa por 3 segundos esperando que a web font principal seja carregada, no contrário, mantem a fonte alternativa.

✍️ `optional`: Tem o mesmo comportamento da `fallback`, porém leva a velocidade de conexão e dispositivo do usuário em consideração e exibe o que for mais conveniente pro contexto.