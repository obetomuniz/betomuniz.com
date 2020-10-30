---
title: globalThis
description: Neste drop falo da propriedade globalThis, que permite acessar
  diretamente o objeto global de aplicações JavaScript de maneira segura e
  confiável.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598233382/globalthis_hvwp97.jpg
publish_date: 2020-08-25 2:17 AM +0000
keywords:
  - javascript
  - global
  - this
  - globalthis
category: tech
language: pt
---

🌎 `globalThis` padroniza o acesso ao objeto global de aplicações JavaScript, seja no server-side ou client-side.

👉 Muito útil em aplicações isomórficas.

⚡ No browser, diferente do server e por segurança, não é uma referência direta do objeto global, mas sim um Proxy dele.

```javascript
globalThis.fetch("https://...");
```
