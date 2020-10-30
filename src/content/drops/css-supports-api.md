---
publish_date: 2020-09-24 2:17 AM +0000
keywords:
  - css
  - "@supports"
  - supports
  - api
  - web
category: tech
language: pt
title: CSS @supports
subtitle:
description: Neste drop falo como a CSS @supports API pode nos ajudar a entregar
  declarações CSS mais performáticas, legíveis e amigáveis ao browser.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1600655901/Titulo_Site_1_posour.jpg
draft: false
audiencecall: E aí gente, blz!?!
informaldesc: ⭐️ No Drop de hoje vou falar um pouquinho sobre como a CSS
  `@supports` API pode ser bastante útil para reduzir o processamento do CSS
  pelo browser e também nos servir como verificador para executar somente regras
  CSS em um determinado browser. Espero que gostem 😉
---

🗣 Através da CSS `@supports` API podemos verificar se determinada feature existe ou não em um browser.

🤯 Com essa abordagem, podemos reduzir drasticamente a carga aplicada ao parser CSS durante momentos críticos como [paints e repaints](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/), já que não declaramos propriedades "opcionais" que ele eventualmente irá tentar processar.

💡 E também podemos remover [vendor prefixes](https://www.lifewire.com/css-vendor-prefixes-3466867) das nossas declarações principais para dentro do contexto do @supports ao usar essa funcionalidade para verificarmos qual é o browser atual.

```css
@supports (content-visibility: hidden) {
  .myClass {
    content-visibility: hidden;
  }
}

/* Funciona só no Safari */
@supports (-webkit-hyphens: none) {
  .myClass {
    color: #0000ff;
  }
}
```

💬 Legal, né?
