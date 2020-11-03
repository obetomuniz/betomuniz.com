---
title: Atomics no JavaScript
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1599422987/Titulo_Image_1_krcacc.jpg
description: Neste drop falo sobre o objeto Atomics, um recurso bem útil para
  controlar race conditions ao se trabalhar com abordagens possíveis de
  multi-threading do JavaScript.
publish_date: 2020-09-08 2:17 AM +0000
keywords:
  - multi-threading
  - javascript
  - atomics
audiencecall: Oi pessoal, beleza?
informaldesc: 😋  No drop de hoje falei sobre Atomics, um recurso bem bacana
  para controlar race conditions ao se trabalhar com abordagens possíveis de
  multi-threading do JavaScript, como SharedArrayBuffer que comentei ontem.
  Espero que gostem.
category: tech
language: pt
---

💥 Com o advento de algumas [abordagens multi-threading do JavaScript](https://betomuniz.com/drops/sharedarraybuffer-no-javascript), um problema comum desse tipo de cenário surgiu, as _race conditions_.

👉 **race conditions** basicamente são resoluções desordenadas de operações paralelas, que por sua vez, necessitam ser ordenadas para correto funcionamento.

⚡️ O objeto **Atomics** surge no JavaScript justamente para nos permitir controlar a ordem que queremos que operações paralelas sejam resolvidas e assim garantir a integridade dos dados resultantes.

🎩 No exemplo abaixo da biblioteca [sleep-synchronously](https://github.com/sindresorhus/sleep-synchronously/blob/master/index.js#L4), qualquer operação que estiver acontecendo em paralelo será imediatamente pausada por 1 segundo aguardando a resolução da declaração `Atomics.wait`.

```javascript
// ...

Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);

// ...
```

👨‍💻 Esse tipo de uso pode ser útil durante a escrita dos testes das nossas aplicações.

👨‍🎨 Sensacional isso, né?