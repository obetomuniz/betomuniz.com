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
description: Neste drop explico o propósito e o comportamento de cada estado da propriedade
  CSS "font-display".
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1605022831/1_jqy9ts.jpg

---
⛲️ `font-display` é uma propriedade CSS usada no contexto `@font-face` para controlar o ciclo de vida de carregamento e renderização de _web fonts_.

```css
@font-face {
  font-family: "Custom";
  src: url("/fonts/Custom-webfont.woff2") format("woff2"),
       url("/fonts/Custom-webfont.woff") format("woff");
  font-display: block;
}
```

💡 Ao declarar `font-display`, podemos configurar **quando** **e** **como** exibir textos baseado nos seguintes modelos:

✍️ `auto`: Deixa o comportamento de exibição de _web fonts_ customizadas com o browser.

✍️ `block`: Faz com que o browser desenhe o texto sem exibí-lo até que a _web font_ customizada carregue completamente.

✍️ `swap`: Exibe o texto com uma web font alternativa previamente configurada até que a _web font_ principal seja carregada.

✍️ `fallback`: Coloca o browser num estado intermediário aos modos `auto` e `swap` ao tratar com a _web font_ decarada, pois faz com que o texto seja ocultado por 100ms, e se a _web font_ principal não foi carregado nesse tempo, exibe uma _web font_ alternativa previamente configurada por 3 segundos, e se nesse tempo a _web font_ principal não for carregada, mantem a fonte alternativa.

✍️ `optional`: Tem mesmo comportamento do modo `fallback`, porém leva a velocidade de conexão e dispositivo do usuário em consideração e exibe o que for mais conveniente pro contexto.