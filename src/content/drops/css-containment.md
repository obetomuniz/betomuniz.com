---
title: CSS Containment
description: No drop de hoje abordei a técnica CSS Containment que otimiza a
  renderização de elementos na página ignorando elementos já renderizados ao
  detectar novas alterações.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1597535335/Text_Image_2_g8vdoj.jpg
publish_date: 2020-08-19 2:17 AM +0000
keywords:
  - css
  - contain
  - containment
category: tech
language: pt
---

📦 A propriedade CSS `contain` permite informar ao Browser partes do layout que podem ser otimizadas e como elas podem ser otimizadas.

🤯 Útil para garantir processamento de elementos inseridos dinamicamente.

😋 Útil para evitar repaint desnecessários de partes já renderizadas.

```css
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;
```
