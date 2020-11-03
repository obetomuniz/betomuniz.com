---
date: 2020-09-26 2:17 AM +0000
keywords:
  - try
  - catch
  - finally
  - javascript
category: tech
language: pt
title: Try-Catch-Finally Statements no JavaScript
subtitle:
description: Neste drop abordo o funcionamento das declarações Try-Catch-Finally
  no JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1600657693/Titulo_Subtitulo_Site_xbkare.jpg
draft: false
audiencecall: Yay gente! Blz?
informaldesc: >-
  😁 Preparados para o final de semana? Não sem um dropzin, né? 


  💥 E no Drop de hoje falei sobre o funcionamneto das declarações Try-Catch-Finally no JavaScript. Ficou bem bacana, espero que gostem. 


  😉 E até a próxima semana com mais Drops.
---

⚡️ `try { } catch (e) {} finally { }` no JavaScript nos permite:

⭐️ **testar** (`try`) determinada lógica a fim de executá-la com **sucesso** e;

⭐️ Em caso de **exceção** (`catch`) expor o **erro** (`e`) e oferecer um caminho alternativo a exceção inicialmente projetada e;

⭐️ Definir uma **rotina padrão** (`finally`) independente de sucesso ou exceção.

💡 Recentemente, o valor `e` da declaração `catch` passou a ser [opcional](https://caniuse.com/?search=try%20catch%20optional) na maioria dos browsers.

```javascript
try {
  if (randomVar) {
    console.log("It works!");
  } else {
    throw new Error("Ops!!!");
  }
} catch (e) {
  console.error("My Error is:", e);
} finally {
  console.log("All try-catch-finally statements are done");
}
```
