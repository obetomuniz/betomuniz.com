---
date: 2020-08-05 2:17 AM +0000
keywords:
  - xss
  - cybersec
  - x-content-type-options
category: tech
language: pt
title: X-Content-Type-Options
subtitle:
description: Neste drop falo sobre o header HTTP X-Content-Type-Options e como
  ele nos ajuda contra ataques XSS.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1596428358/X-Content-Type-Options_fjeogz.png
draft: false
audiencecall:
informaldesc:
---

📝 `X-Content-Type-Options` é um header HTTP, e quando informado com o valor **nosniff**, limita o processamento de arquivos de estilos e scripts até que o servidor informe o [MIME type](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/MIME_types) correto ao browser.

👉 É um recurso obrigatório contra [ataques cross-site scripting (XSS)](https://betomuniz.com/drops/ataques-xss)
