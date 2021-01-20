---
draft: false
date: 2021-01-20 4:40 PM -0200
keywords:
- cors
- cross-origin
- browser
- security
category: tech
language: pt
title: Cross-Origin Resource Sharing
subtitle: ''
description: Neste drop abordo Cross-Origin Resource Sharing (CORS) falando sobre
  seu funcionamento e uso.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1611168076/1_ywmnne.jpg

---
🔐 **Cross-Origin Resource Sharing** ou **CORS** é um mecanismo que visa criar um ambiente lógico de segurança no que diz respeito ao modo que consumimos conteúdo da web via browsers.

⚡️ A proposta principal do **CORS** é instruir que o browser valide e como validará a origem de uma requisição.

🛎 A origem de **uma requisição pode ser definida por dominio específico ou genérica** através do header HTTP `Access-Control-Allow-Origin`.

```css
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: *
```