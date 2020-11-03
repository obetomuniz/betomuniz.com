---
title: Proxy Pattern no JavaScript
description: Neste drop abordo o objeto Proxy, um modelo nativo para trabalhamos
  com o Proxy Pattern no JavaScript
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598235427/proxy_hctzmt.jpg
publish_date: 2020-08-27 2:17 AM +0000
keywords:
  - proxy
  - pattern
  - javascript
category: tech
language: pt
---

🎩 O **objeto Proxy** no JavaScript trás de forma nativa o [Proxy Pattern](<https://pt.wikipedia.org/wiki/Proxy_(padr%C3%B5es_de_projeto)>) para que possamos interceptar e modificar objetos primitivos ou não.

📓 **Use Proxy para criar bibliotecas** nas suas aplicações **ou extender bibliotecas de terceiros** de forma elegante e segura.

```javascript
const arr = [1, 2, undefined];

const arrProxy = new Proxy(arr, {
  get: function (item, property) {
    if (property === "xpto") return "xpto";

    return item[property];
  },
});

arrProxy.xpto; // "xpto"
arrProxy.filter(Boolean); // [1, 2]
```