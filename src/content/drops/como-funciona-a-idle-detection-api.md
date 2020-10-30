---
publish_date: 2020-10-07 2:17 AM +0000
keywords:
  - idle
  - user
  - usuário
  - detection
  - detecção
  - web
  - api
category: tech
language: pt
title: Como funciona a Idle Detection API?
subtitle:
description: Neste drop falo como a Idle Detection API funciona e como usufruir
  desse recurso em nossas aplicações web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1601858045/Titulo_Site_1_j6hxtp.jpg
draft: false
audiencecall: E aew pessoal! Blz?
informaldesc: >-
  👨‍💻 No drop de hoje falei sobre como podemos através da Idle Detection API
  identificar a presença ou não dos nossos usuários em nossas aplicações.


  👉 Também dou alguns exemplos sobre como utilizar esse tipo de recurso e muito mais.
---

👉 A **Idle Detection API** permite com que aplicações identifiquem interações do usuário como movimento do mouse, click, digitação no teclado entre outros.

⚡️ Esse recurso é útil por exemplo, na otimização de performance de uma aplicação, pois possibilita parar processos pesados temporariamente.

😋 Outros exemplos são soluções como "Usuário digitando" em chats, aplicações que ocultam/exibem a interface na ausência/presença do usuário, etc.

```javascript
const idle = new IdleDetector();

// idle.userState
// Retorna se o usuário está `active` ou `idle`

// idle.screenState
// Retorna se o sistema está `locked` ou `unlocked`

idle.addEventListener("change", () => {
  const { userState, screenState } = idle;
  console.log(`${userState} - ${screenState}`);
});
```

✨ A **Idle Detection API** se parece com a [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API), mas a **Idle Detection API** identifica a presença do usuário mesmo sem foco na página.

🧪 E como ainda é um recurso novo, sendo o Chrome 86 o único já com suporte, recomenda-se o uso com um polyfill, como o [idle.ts](https://github.com/dropbox/idle.ts).
