---
publish_date: 2020-08-28 2:17 AM +0000
keywords:
  - share
  - api
  - web
  - javascript
category: tech
language: pt
title: Web Share API
subtitle:
description: Neste drop falo da Web Share API, uma Web API que visa facilitar o
  compartilhamento de conteúdo através da web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598236494/Text_Image_k3aue5.jpg
draft: false
audiencecall: Ei gente, beleza?
informaldesc: >-
  🕸 Sabia que existe uma maneira super simples e nativa nos browsers para
  compartilhamento de conteúdo em redes sociais ou entre contatos? 


  💬 Estou falando da *Web Share API* e é sobre essa Web API que falei hoje no meu drop. Confira!
---

🕸 A **Web Share API** promove acesso ao fluxo natural de compartilhamento de conteúdo da plataforma em que estamos executando aplicações web.

```javascript
navigator.share({
  title: "...",
  url: "...",
  text: "...",
});
```

<!-- <Img src="https://webdev.imgix.net/web-share/wst-send.png" author="web.dev" authorURL="https://web.dev/web-share/" /> -->

✨ Infelizmente, a **Web Share API ainda não possui total suporte nos browsers**, mas se achou interessante, recomendo a biblioteca ["share-api-polyfill"](https://github.com/on2-dev/share-api-polyfill) do [@felipenmoura](https://twitter.com/felipenmoura) que permite simular o comportamento da Web Share API em browsers que ainda não oferecem suporte nativo.
