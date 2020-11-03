---
date: 2020-10-12 2:17 AM +0000
keywords:
  - promise
  - javascript
  - finally
category: tech
language: pt
title: Como funciona Promise.finally() no JavaScript?
subtitle:
description: Neste drop exemplifico o funcionamento do método .finally() em
  promises do JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1602430648/Titulo_Image_Site_1_mbiakw.jpg
draft: false
audiencecall: "E aí pessoal, blz?"
informaldesc: "👉 No *Drop* de hoje falei sobre o método `.finally()`, uma
  adição do ES2018 para melhorar a maneira que lidamos com promises no
  JavaScript. "
---

🌟 Introduzido no ES2018, **Promises** agora podem usufruir de um novo recurso para controlar o fluxo de operações através do método `.finally()`.

👉 A proposta do `Promise.finally()` é executar operações independentemente da execução dos métodos `.then()` e `.catch()`.

⚡️ Essa proposta é muito semelhante com a abordagem [try {} catch {} finally {}](https://betomuniz.com/drops/try-catch-finally-statements-no-javascript), a diferença é que a declaração `finally {}` consegue retornar valores e `Promise.finally()` não, `Promise.finally()` consegue retornar apenas exceções via `throw`.

```javascript
let loading = true

fetch('https://...')
  .then((response) => { ... })
  .catch((error) => { ... })
  .finally(() => { loading = false })
```

😉 Legal, né?
