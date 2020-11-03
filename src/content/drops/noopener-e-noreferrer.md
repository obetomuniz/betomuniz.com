---
title: noopener e noreferrer
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598382624/Text_Image_gwwcfi.jpg
description: Neste drop falo da utilidade das diretivas noopener e noreferrer no
  combate contra ataques Phishing.
publish_date: 2020-09-01 2:17 AM +0000
keywords:
  - phishing
  - web
  - segurança
  - cybersec
audiencecall: Fala pessoal, beleza?
informaldesc: ⚡️ No drop de hoje falei sobre a declaração *rel="noopener
  noreferrer"* em links e também sobre como ela  nos ajuda manter a segurança de
  navegação nos links em nossos sites.
category: tech
language: pt
---

👉 Ao criar links nos seus sites que utilizam `target="_blank"`, use sempre a declaração `rel="noopener noreferrer"`.

🐿 **noopener** remove o contexto do objeto `window.opener.location` durante a navegação de um site para o outro para evitar que o site de destino tenha acesso a dados sensíveis do site de origem.

🤓 **noreferrer** remove o contexto do [header Referrer](https://betomuniz.com/drops/referrer-policy) enviado pelo Browser durante a navegação de um site para o outro.

```html
<a target="_blank" rel="noopener noreferrer" href="https://..."> Seu Link </a>
```

😋 Super simples, mas super útil. Use esses recursos sem moderação.