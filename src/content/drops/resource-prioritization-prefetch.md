---
title: Resource Prioritization
subtitle: prefetch
description: Neste drop falo como a diretiva "prefetch" nos possibilita informar
  ao Browser recursos interessantes de baixa prioridade para download paralelo
  com recursos mais prioritários.
publish_date: 2020-07-31 2:17 AM +0000
keywords:
  - resource
  - prioritization
  - prefetch
category: tech
language: pt
---

🤯 A diretiva `prefetch` permite informar ao Browser recursos interessantes em nossas aplicações que podem ser baixados com recursos mais prioritários caso não atrapalhe o download deles.

😋 `prefetch` usa "oportunidades de download" e otimiza o carregamento da página.

```html
<link
  rel="prefetch"
  as="font"
  type="font/woff2"
  href="icones-dentro-do-dropdown.woff2"
/>
```

💬 Útil, né?
