---
title: Ataques XSS
subtitle: ""
description: Neste drop abordo o que são ataques XSS e como são realizados.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1596425211/Social_pnx1ei.png
publish_date: 2020-08-03 2:17 AM +0000
keywords:
  - xss
  - cybersec
  - websec
  - security
  - stored
  - reflected
  - dom
  - cross-site scripting
category: tech
language: pt
---

🕷 Conhecer o funcionamento de **ataques Cross-Site Scripting (XSS)** é necessário para entender como vulnerabilidades em nossas aplicações web permitem executar códigos maliciosos através do browser para obter dados sensíveis dos usuários.

<Drop>


📝 **Reflected XSS**

👉 Este tipo de ataque XSS utiliza parâmetros da URL ou dados enviados via POST em formulários para injetar e executar scripts maliciosos.

<Drop>


📝 **Stored XSS**

👉 Acontece quando códigos maliciosos são persistidos pelo atacante no lado do servidor de uma aplicação e são executados pelo usuário (vítima) quando ele acessa essa aplicação infectada

<Drop>


📝 **DOM XSS**

👉 Este tipo de ataque acontece quando a aplicação manipula o DOM de forma incorreta, e assim permite que algum script enviado via parâmetro na URL use essa brecha para injetar código malicioso.
