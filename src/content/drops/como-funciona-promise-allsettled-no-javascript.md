---
publish_date: 2020-10-15 2:17 AM +0000
keywords:
  - promises
  - promise
  - javascript
  - allsettled
category: tech
language: pt
title: Como funciona Promise.allSettled no JavaScript?
subtitle:
description: Neste drop explico o funcionamento do método Promise.allSettled no JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1602458273/Titulo_Image_Site_1_fuz23k.jpg
draft: false
audiencecall: Fala aí gente, blz?
informaldesc: >-
  ⭐️ No *Drop* de hoje explico com funciona o novo método trazido pelo ES2020
  chamado `Promise.allSettled`.


  ⚡️ Também explico a diferença entre `Promise.allSettled` e `Promise.all`.


  😋 Ficou bem legal. Espero que gostem.
---

🌟 `Promise.allSettled` é um método que, dado um array de promises, **retorna o resultado de todas as promises após a resolução delas**, mesmo se alguma delas for rejeitada ou sofrer exceções.

```javascript
const p1 = Promise.resolve(5);
const p2 = Promise.reject("Exceção");
const promises = [p1, p2];

Promise.allSettled(promises).then((results) =>
  console.log("Resultados:", results)
);
```

🤯 Semelhante ao já conhecido método `Promise.all`, que por sua vez, dado um array de promises, espera a resolução de todas, e **somente as retorna por completo se nenhuma exceção for retornada**, e **no caso de haver exceções, retorna somente a primeira exceção encontrada**.

🤩 `Promise.allSettled` e `Promise.all` coexistem muito bem para diferentes problemas.
