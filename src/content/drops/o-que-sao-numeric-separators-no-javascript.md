---
publish_date: 2020-09-30 2:17 AM +0000
keywords:
  - numeric
  - separators
  - javascript
  - bigint
  - hexadecimal
category: tech
language: pt
title: O que são Numeric Separators no JavaScript?
subtitle:
description: Neste drop falo sobre os Numerics Separators, um padrão que
  facilita o trabalho com números no JavaScript, principalmente, números
  extensos.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1601436655/Titulo_Image_Site_1_l55mnh.jpg
draft: false
audiencecall: Fala aí gente! Beleza?
informaldesc: >-
  🔢 No drop de hoje falei sobre os Numeric Separators, um padrão super simples,
  mas interessante que visa facilitar a maneira que lidamos com números no
  JavaScript. 


  ⭐️ Ficou show! Espero que gostem.
---

🔢 [Numeric Separators](https://github.com/tc39/proposal-numeric-separator) é uma notação que serve para melhorar a legibilidade de números.

🤯 Imagine ler e definir o número de zeros no número `1000000000000` toda vez durante a resolução de um algoritmo?

👍 Arriscado, né? **Um zero extra ou faltando pode fazer a diferença dependendo do seu sistema**.

🤔 Agora imagine utilizar `_` entre as centenas?

```javascript
const n = 1_000_000_000_000;

console.log(n === 10 ** 12 && n === 1000000000000);
// true
```

🤩 Bem melhor! 🤩

💡 E vale lembrar que também servem para notações binárias (`0b1010_0001_1000_0101`), hexadecimais (`0xA0_B0_C0`), [BigInt](https://betomuniz.com/drops/bigint-no-javascript) (`1_000n`), etc.

😉 Legal, né?
