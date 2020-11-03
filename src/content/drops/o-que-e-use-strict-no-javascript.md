---
publish_date: 2020-10-09 2:17 AM +0000
keywords:
  - use
  - strict
  - javascript
  - ecmascript
category: tech
language: pt
title: O que é "use strict" no JavaScript?
subtitle:
description: 'Neste drop falo sobre como funciona e o porque o "use strict"
  existe no JavaScript.'
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1601858476/Titulo_Image_Site_xuyidf.jpg
draft: false
audiencecall: Ei gente, blz?
informaldesc: >-
  💡 No *Drop* de hoje falei sobre o funcionamento do recurso `"use strict"`
  dentro do contexto do JavaScript. Ficou bem bacana 😋


  🏖 E bom final de semana pessoal 😋
---

⚡️ Em poucas palavras, ao usar `"use strict"` no topo de seus scripts, você literalmente ativa o "modo moderno" do JavaScript.

👉 Dado um arquivo `index.js`:

```javascript
"use strict";

// seus scripts

```

🤯 **Sem esse recurso declarado, o browser utilizará recursos criados antes do EcmaScript 5 (2009)** visando a retrocompatibilidade, mas pensando em versões posteriores até a atual, esses mesmos recursos foram modificados, modernizados e otimizados, ou seja, são melhores e mais seguros.

✨ Sendo assim, se sua aplicação é atual, utilize **SEMPRE** `"use strict"` no topo dos seus scripts JavaScript e garanta o uso de recursos modernos.