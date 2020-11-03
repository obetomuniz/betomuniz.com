---
title: Propriedade CSS
subtitle: content-visibility
description: Neste drop falo como a propriedade CSS content-visibility ajuda o
  browser informando a ele o que deve ser renderizado no carregamento da página.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1597536383/cv_kbmfdc.jpg
date: 2020-08-19 2:17 AM +0000
keywords:
  - css
  - above-the-fold
  - critical rendering path
  - ""
category: tech
language: pt
---

👉 A propriedade CSS `content-visibility` possibilita informar ao motor de renderização do Browser quais partes do layout da página estarão fora do campo de visão inicial do usuário

😍 Com isso o browser ignora essas partes do layout e otimiza drasticamente o tempo de renderização.

```css
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;
```
