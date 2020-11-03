---
date: 2020-10-05 2:17 AM +0000
keywords:
  - web fonts
  - font-face
  - local
  - performance
category: tech
language: pt
title: Otimizando Fontes Customizadas com local()
subtitle:
description: Neste drop abordo um recurso CSS que otimiza o carregamento de
  fontes customizadas e que pode melhorar o tempo de carregamento do seu site.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1601775573/Titulo_Image_Site_qeaehv.jpg
draft: false
audiencecall: "Fala pessoal! Blz!? Bora começar a semana com um Drop? "
informaldesc: "⚡️ E no de hoje falei sobre como potencialmente otimizar o
  carregamento das suas aplicações web através de um recurso CSS relativamente
  simples, mas útil, durante a utilização de fontes customizadas.  "
---

👉 Utilize **SEMPRE** `local()` ao declarar o `src` da `@font-face`.

😉 Assim você otimiza o carregamento da página ao evitar downloads extras **CASO** as fontes utilizadas estejam instaladas no seu dispositivo do usuário.

```css
@font-face {
  font-family: "AmazingFont";
  src: local("AmazingFont"), url("AmazingFont.woff2"), url("AmazingFont.woff");
}
```

😋 Legal, né? E apesar do aspecto simples de uso, é um recurso que faz muita diferença quando acionado.
