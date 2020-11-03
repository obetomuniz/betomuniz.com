---
title: Cookies e Ataques XSS
description: Neste drop falo sobre como proteger seu site de Cookies mal
  configurados para evitar Ataques XSS.
date: 2020-08-07 2:17 AM +0000
keywords:
  - samesite
  - httponly
  - cookies
  - cybersec
  - xss
category: tech
language: pt
---

🍪 Se mal configurados, Cookies permitem [Ataques XSS](https://betomuniz.com/drops/ataques-xss).

🔒 Para cada Cookie na aplicação, use o **header HTTP Set-Cookie** com:

👉 `Secure` para aceitá-lo somente via HTTPS.

👉 `httpOnly` para não listá-lo no Browser via **document.cookie**.

👉 `SameSite` para limitar o contexto de uso dele.
