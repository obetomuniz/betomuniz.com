---
title: Dica CSS
subtitle: user-select e selection
description: Já ouviu falar dos recursos ::selection e user-select no CSS?
  Confira esse drop.
publish_date: 2020-06-19 2:17 AM +0000
keywords:
  - css
  - user-select
  - selection
  - dicas
  - tips
category: tech
language: pt
---

🤯 Resolvendo um “bug” no meu site, lembrei que a declaração CSS abaixo permite "desabilitar" a seleção de texto via teclado e mouse de um site

```css
* {
  user-select: none;
}
```

🤩 Já essa outra permite decorar a seleção de texto

```css
*::selection {
  color: white;
  background: blueviolet;
}
```

<!-- <Video src="https://video.twimg.com/tweet_video/Ea5_ou1XgAAeAz8.mp4" /> -->

🎩 CSS é incrível, né?
