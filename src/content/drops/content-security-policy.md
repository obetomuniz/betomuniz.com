---
title: Content Security Policy
description: Neste drop falo sobre o header HTTP Content Security Policy e como
  ele pode nos proteger contra ataques XSS.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1596509354/Social_nftbvw.png
date: 2020-08-04 2:17 AM +0000
keywords:
  - csp
  - xss
  - content-security-policy
category: tech
language: pt
---

💂‍♀️ **Content Security Policy (CSP)** é um header HTTP que permite detalhar de onde recursos (estilos, scripts, etc) podem ser aplicados em um site

🕷 CSP é muito eficiente contra ataques **cross-site scripting (XSS)**

👏 Adote CSP, mas evite as diretivas **unsafe-inline** ou **unsafe-eval**

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https:; ..."
/>
```
