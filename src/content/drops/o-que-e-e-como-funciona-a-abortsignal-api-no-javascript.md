---
date: 2020-10-16 2:17 AM +0000
keywords:
  - abortsignal
  - javascript
  - web
  - api
  - fetch
category: tech
language: pt
title: O que é e como funciona a AbortSignal API no JavaScript?
subtitle:
description: Neste drop falo sobre como funciona e o propósito da AbortSignal
  API dentro do JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1602459313/Titulo_Image_Site_2_cppizm.jpg
draft: false
audiencecall: E aí pessoal, blz?
informaldesc: >-
  💜 E no drop de hoje falei sobre a *AbortSignal API*, uma API pouco comentada,
  mas que possuí uma aplicação bem interessante para operações assíncronas como
  requisições HTTP e muito mais. Espero que gostem.


  🌟 Ah! E Segunda não tem Drop em texto, pq o Drop será em... *VÍDEO!* ⚡️
---

😋 [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) é uma Web API que permite cancelar operações assíncronas em execução.

👉 Muito útil para cancelamento de downloads, melhores controles para processos de persitência de dados entre outros casos.

🤔 Uma curiosidade é que a **Fetch API** possui uma API built-in para justamente permitir uma integração de maneira nativa para cancelamento de requições HTTP.

```javascript
const controller = new AbortController()
const signal = controller.signal
const cancelButton = document.querySelector(
 '.cancelButton'
)

cancelButton.addEventListener('click', function() {
  controller.abort()
})

fetch(url, { signal }).then(function(response) {
 ...
})
```

🤩 Legal, né?
