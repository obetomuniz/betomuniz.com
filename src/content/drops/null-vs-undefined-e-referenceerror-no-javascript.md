---
draft: true
date: 2020-12-09 1:27 AM -0200
keywords:
- javascript
- 'null'
- undefined
- 'ReferenceError '
category: tech
language: pt
title: Null vs Undefined (e ReferenceError) no JavaScript
subtitle: ''
description: Neste drop falo sobre o comportamento das declarações primitivas "null"
  e  "undefined" e também do erro ReferenceError no JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1605238826/Titulo_m6afut.jpg

---
😀 `ReferenceError` é um tipo de erro que retorna `ReferenceError: {nome da variável} is not defined` quando uma variável é invocada, mas ainda não foi declarada.

😁 `undefined` é atribuído para uma variável ou **propriedade** de objeto quando estes são declarados sem valor atribuído.

😆 `null` é um tipo de atribuição de variável, tal como, números, strings, objetos entre outros, porém com a finalidade de **DEFINIR** explicitamente uma variável com valor vazio/nulo (🤦‍).

😊 `null` e `undefined` são valores primitivos no JavaScript, tal como String, Number, etc.

😎 `null` e `undefined` são considerados **_falsy_**, assim como `NaN`, `“”` (string vazia) entre outros, ou seja, são falsos quando em contextos booleanos. Porém não são estritamente iguais, ou seja, `null` NÃO é igual a `undefined`.

🤩 Toda função no JavaScript retorna `undefined` por padrão, exceto se o mesmo for explicitamente declarado com `return`.