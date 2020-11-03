---
title: Referrer-Policy
description: Neste drop falo como o header Referrer-Policy nos ajuda a proteger
  a integridade de dados de nossos usuários durante a navegação web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1597534767/Text_Image_1_avqitj.jpg
date: 2020-08-20 2:17 AM +0000
keywords:
  - referrer
  - security
  - cybersec
  - segurança
  - web
category: tech
language: pt
---

👉 O header `Referrer-Policy` informa o conteúdo da URL de origem, e precisa ser bem configurado, para manter segurança e privacidade dos acessos numa aplicação.

💣 Sites sem essa proteção, podem expor dados sensíveis da url anterior para scripts maliciosos através do `document.referrer`.

```html
<meta name="referrer" content="origin" />

<a href="https://test.com" referrerpolicy="origin"> ... </a>

<a href="https://test.com" rel="noreferrer"> ... </a>
```
