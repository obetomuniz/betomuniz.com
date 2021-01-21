---
draft: true
date: 2021-01-21 4:52 PM -0200
keywords:
- corb
- cybersec
- csrf
- meltdown
- spectre
category: tech
language: pt
title: Cross-Origin Read Blocking
subtitle: ''
description: 'Neste drop falo sobre as mecânicas relacionadas ao Cross-Origin Read
  Blocking, um recurso muito útil contra alguns ataques maliciosos na web '
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1611255266/1_tbynfp.jpg

---
🔐 Por definição, **Cross-Origin Read Blocking** valida requisições do browser antes mesmo de serem requisitadas no servidor. Tudo isso utilizando o _MIME type_ da requisição como regra de validação.

⚡️ Por exemplo, uma requisição do tipo **style** deve fornecer o _MIME type_ **text/css**, caso contrário, será bloqueada.

😋 Para habilitar este recurso, o browser espera que o servidor envie o header HTTP `X-Content-Type-Options` com o valor `nosniff`.

📝 Essa proposta é muito útil contra ataques do tipo **CSRF**, **Meltdown** e **Spectre**.