---
draft: true
date: 2021-01-21 5:06 PM -0200
keywords: []
category: tech
language: pt
title: Cross-Origin Resource Policy
subtitle: ''
description: Neste drop explico como funciona o mecanismo Cross-Origin Resource Policy
  e como ele complementa a especificação CORB para deixar sua aplicação web segura.
featured: ''

---
**🛎 Cross-Origin Resource Policy** ou **CORP** é um mecanismo complementar  
 ao **Cross-Origin Read Blocking**, e só funciona para requisições definidas como `no-cors`.

🔐 Para habilitar esse _cross-origin checker_, o servidor precisa enviar o header `Cross- Origin-Resource-Policy` com o valor `same-origin` ou `same-site`.

👍 Com este header definido, o browser invalidará requisições `no-cors` de domínios com origem ou esquema de url diferente da origem da requisição.

👉 Essa proposta é muito útil contra ataques maliciosos do tipo **Meltdown** e **Spectre**.