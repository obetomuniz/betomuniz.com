---
title: Above-The-Fold
subtitle: Descomplicando o Critical Path
description: Neste drop falo sobre a técnica Above-The-Fold e a importância em
  adotá-la para otimização do carregamento de nossas páginas web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1595814845/Edh9qQ8XgAAAIPT_vamkdi.jpg
date: 2020-07-22 2:17 AM +0000
keywords:
  - css
  - critical
  - path
  - above-the-fold
category: tech
language: pt
---

📁 A técnica _Above-The-Fold_ consiste na extração de declarações CSS críticas para renderização do layout visto durante o carregamento inicial de uma página.

⏬ Declarações não críticas são deixadas num outro contexto (geralmente um arquivo `.css` diferente do principal) para carregamento assíncrono.

⏳ Com isso, otimizamos a experiência de carregamento, pois o browser terá em mãos o CSS necessário para renderização do layout inicial.

⏱ Essa técnica é essencial para otimizar o índice [First Content Paint](https://web.dev/first-contentful-paint) das nossas páginas web.

!["Alt Text"](https://user-images.githubusercontent.com/1680157/88011717-7314ed80-caee-11ea-99c2-16caf15a715b.jpg "Beto Muniz - https://livebook.manning.com/book/web-performance-in-action/chapter-4")
