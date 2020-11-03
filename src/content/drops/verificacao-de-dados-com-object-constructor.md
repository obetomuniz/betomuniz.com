---
date: 2020-09-10 2:17 AM +0000
keywords:
  - javascript
  - data typing
  - typing
  - types
  - tipos
  - dados
  - tipagem
category: tech
language: pt
title: Verificação de dados com Object Constructor
subtitle:
description: "Neste drop falo sobre o Object Constructor e como ele pode ser
  útil na verificação dos tipos de dados com JavaScript."
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1599425884/Titulo_Image_2_pst5os.jpg
draft: false
audiencecall: E aí gente! Beleza?
informaldesc: "📣 No drop de hoje abordei uma das diversas técnicas para
  verificação de tipos de dados com JavaScript puro. "
---

👉 **Sabia que dá pra verificar o tipo do valor de uma váriavel com JavaScript** utilizando o seguinte recurso? 👇

```javascript
const mySet = new Set([1,2,3])
mySet.constructor === Set // true

const myText = 'Text'
myText.constructor === String // true

const myNumber = 1
myNumber.constructor === Number // true

...
```

📖 Nessa abordagem, exploramos o [Object Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) do valor originalmente atribuído.

😋 Legal, né?
