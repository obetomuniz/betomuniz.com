---
title: Screen Reader Only
subtitle: Otimização para Leitores de Tela com CSS
description: Neste drop falo da técnica Screen Reader Only, que visa otimizar o
  suporte das nossas aplicações web para leitores de tela utilizando apenas CSS.
publish_date: 2020-07-22 2:17 AM +0000
keywords:
  - sro
  - a11y
  - screen reader only
category: tech
language: pt
---

🗣 Screen Reader Only (SRO) é uma técnica utilizada para criação de contextos adicionais via textos que somente leitores de telas irão interpretar.

<p>


👉 [De acordo com a
WebAIM](https://webaim.org/techniques/css/invisiblecontent/#offscreen) , só
precisamos criar a seguinte declaração CSS para posterior reutilização:

</p>


```css
.sr-only {
  position: absolute;
  left: -10000px;
  top: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

🤯 E pra exemplificar, imagine links de Login visualmente fáceis de escolher entre Google, Facebook ou Twitter, porém textualmente não utilizam impossíveis, pois não possuem palavras que os dê significado.

![Lista de Links de Login](https://user-images.githubusercontent.com/1680157/87884573-71133780-c9e5-11ea-9357-a2976375ec4d.png)

😌 E é ai que entra o SRO pra diferenciá-los, pelo menos em leitores de telas. Bastaria fazer algo parecido com o código abaixo:

```html
<ul>
  <li>
    <a href="...">
      <i class="google" aria-hidden="true" />
      <span class="sr-only">Login com Google</span>
    </a>
  </li>
  <li>
    <a href="...">
      <i class="facebook" aria-hidden="true" />
      <span class="sr-only">Login com Facebook</span>
    </a>
  </li>
  <li>
    <a href="...">
      <i class="twitter" aria-hidden="true" />
      <span class="sr-only">Login com Twitter</span>
    </a>
  </li>
</ul>
```

👍 Viu? Prático, simples e bastante útil.