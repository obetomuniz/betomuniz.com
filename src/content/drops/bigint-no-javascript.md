---
title: BigInt no JavaScript
description: Neste drop falo um pouco sobre como funciona BigInt's no JavaScript
  e o porque são úteis.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598238776/Text_1_jj5zju.jpg
date: 2020-08-25 2:17 AM +0000
keywords:
  - bigint
  - javascript
  - web
category: tech
language: pt
---

🔢 **BigInt** no JavaScript é um modelo nativo de **representação** de números inteiros maiores que 64bits (e.g `Number.MAX_SAFE_INTERGER`), pois números acima dessa capacidade de armazenamento não podem ser armazenados via JavaScript.

👉 **BigInt** podem ser definidos adicionando um `n` no fim de um número ou através de `BigInt`.

```javascript
const bigInt = 10n;
const anotherBigInt = BigInt(10);
```

😋 **BigInt's** são bastante úteis, principalmente ao se trabalhar com números grandes e que requerem máxima precisão, como em sistemas financeiros.
