---
title: "CSS Tips: user-select e selection"
date: "2020-06-19"
path: "/drops/css-tips-user-select-e-selection/"
description: "Já ouviu falar dos recursos ::selection e user-select no CSS? Confira esse drop."
keywords: "css, user-select, selection, dicas, tips"
category: "tech"
lang: "pt"
drops: true
---

<div class="drop">

Resolvendo um “bug” no meu site, lembrei q...

🤯 A declaração CSS abaixo permite "desabilitar" a seleção de texto via teclado e mouse de um site

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

<div class="default_mb">
<video class="post-video" style="min-height: auto; margin-bottom: 0;" src="https://video.twimg.com/tweet_video/Ea5_ou1XgAAeAz8.mp4" width="100%" controls autoplay loop playsinline></video>
</div>

<center class="center-original-content">
<a href="https://twitter.com/obetomuniz/status/1274097486068678656" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>
