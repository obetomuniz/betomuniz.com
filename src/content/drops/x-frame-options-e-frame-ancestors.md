---
date: 2020-08-06 2:17 AM +0000
keywords:
  - clickjacking
  - cybersec
  - csp
  - xfo
category: tech
language: pt
title: X-Frame-Options e frame-ancestors
subtitle:
description: Neste drop falei sobre ataques Clickjacking e como se proteger deles.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1596428266/xfo_ha2trv.png
draft: false
audiencecall:
informaldesc:
---

🕹 [Ataques Clickjacking](https://pt.wikipedia.org/wiki/Clickjacking) mascaram sites ou partes do mesmo dentro de iframes a fim de capturar dados sensíveis do usuário.

🤩 Configure os headers `X-Frame-Options` e `Content-Security-Policy: frame-ancestors` para limitar uso de sites em iframes e evitar fraudes Clickjacking.
