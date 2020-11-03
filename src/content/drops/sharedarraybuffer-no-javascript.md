---
title: SharedArrayBuffer no JavaScript
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1599421768/Titulo_Image_ayoywv.jpg
description: Neste drop abordo o objeto SharedArrayBuffer, um recurso que aplica
  características de multi-threading ao ambiente de desenvolvimento JavaScript.
publish_date: 2020-09-07 2:17 AM +0000
keywords:
  - javascript
  - multi-threading
  - sharedarraybuffer
  - bytes
audiencecall: E aí gente, beleza? Espero que estejam aproveitando bem o feriado.
informaldesc: >-
  😋 Mas vamos de drop, porque tem muita coisa pra falar 😋


  🧵 E no drop de hoje falei sobre o objeto *SharedArrayBuffer*, um recurso bem poderoso, mas que por sua natureza especifica de problemas, é pouco comentado. Espero que gostem de conhecer esse recurso, que inclusive, aplica características de multi-threading ao ambiente de desenvolvimento JavaScript.
category: tech
language: pt
---

🧵 **SharedArrayBuffer** introduz ao JavaScript mecanismos para gerenciamento de memória.

⚡️ Por padrão, o tratamento de memória é feito _automagicamente_ pelo engine JavaScript do Browser.

🤯 Com o objeto **SharedArrayBuffer** podemos fazer tal tipo de controle manualmente, possibilitando assim criar aplicações com aspecto
**concorrente, mais performáticas e modernas**.

```js
const buffer = new SharedArrayBuffer(tamanhoEmBytes);
```

👉 **Esse tipo de condição não é tão comum, e possui diretrizes de segurança para uso**, mas dependendo da aplicação que você tem, principalmente aplicações com aspectos **_real-time_ ou para processamento massivo de objetos (na ordem dos 100.000)**, esse recurso pode ser bem útil.