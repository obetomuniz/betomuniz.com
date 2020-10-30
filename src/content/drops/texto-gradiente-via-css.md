---
title: "Texto Gradiente via CSS"
publish_date: 2020-07-16 2:17 AM +0000
description: "Neste drop demonstro como obter Texto Gradiente usando apenas 3 propriedades CSS. É muito simples mesmo! Confere lá."
category: "tech"
language: pt
keywords:
  - texto gradiente
  - css
---

🎨 Sabia que já é possível obter **textos com efeito gradiente** apenas com **CSS**?

🧪 Experimente a declaração abaixo em algum texto e irá obter os mesmos resultados do exemplo.

```css
background-image: linear-gradient(90deg, #663399 0%, #dc3939 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: #ffffff47;
text-fill-color: #ffffff47;
```

![Demonstração do Exemplo acima](https://user-images.githubusercontent.com/1680157/87638776-ba7c3200-c71a-11ea-9ef7-1659896db894.gif)

*PS: Não funciona no **IE9** (Novidade *😂*) e não remova os prefixos. Até o **Firefox** está usando o `-webkit-`.*
