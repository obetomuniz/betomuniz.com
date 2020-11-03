---
title: Dica CSS
subtitle: "position: sticky"
description: "Neste drop abordo a declaração CSS `position: sticky` e falo como
  ela possibilita manter elementos fixos relativos à barra de rolagem."
date: 2020-07-23 2:17 AM +0000
keywords:
  - css
  - ui
  - sticky
  - position
category: tech
language: pt
---

👉 `position: sticky` é uma declaração CSS híbrida (fixed/relative) que nos permite manter elementos fixos no layout de forma relativa à posição da barra de rolagem e ao elemento-pai do elemento usando a declaração **sticky**.

🔄 Para definir o offset que torna o elemento **sticky** fixo ou relativo, utilizamos as propriedades `top`, `bottom`, `left` e `right`.

```css
.sticky-element {
  position: sticky;
  top: 0;
}
```

💡 No exemplo abaixo, apliquei `position: sticky` na seção **Share** e a propriedade `top: 0` para definir que o offset **superior** da barra de rolagem ativará o comportamento fixo da seção **Share** ao ser alcançado durante a rolagem.

![](https://user-images.githubusercontent.com/1680157/87885417-3bbe1800-c9ec-11ea-9648-8b9ca2fb9f1c.gif)

😉 Bem legal, né?
