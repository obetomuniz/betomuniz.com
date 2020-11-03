---
title: Resource Prioritization
subtitle: preload
description: Neste drop falo sobre como a diretiva "preload" da especificação
  Resource Prioritization funciona e quando é mais recomendado utilizá-la
date: 2020-08-01 2:17 AM +0000
keywords:
  - resource
  - prioritization
  - preload
  - performance
category: tech
language: pt
---

👨‍💻 `preload` na especificação **Resource Prioritization** nos permite expressar ao Browser recursos que devem ser literalmente processados e baixados antes de qualquer outro.

👉 Recomenda-se sua utilização em recursos bloqueantes ou necessários para renderização do layout inicial.

```html
<link rel="preload" href="critical.css" as="style" />
```
