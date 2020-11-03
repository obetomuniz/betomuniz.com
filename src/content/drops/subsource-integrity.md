---
title: Subsource Integrity
description: Neste drop abordo como e o porque devemos adotar verificações
  Subsource Integrity em nossos scripts externos.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1597032330/Text_Image_lkn2xs.jpg
date: 2020-08-10 2:17 AM +0000
keywords:
  - subsource
  - integrity
  - xss
  - cdns
category: tech
language: pt
---

🔐 **Subsource Integrity** garante o consumo seguro de scripts externos validando o conteúdo desses scripts.

👉 `integrity` armazena um estado criptografado do conteúdo a ser baixado para comparação após o download.

👉 `crossorigin="anonymous"` desabilita cookies no download do script.

```html
<script
  integrity="sha384-Q5wFTPC/kyhbXJt5..."
  crossorigin="anonymous"
  src="https://unpkg.com/react@16/umd/react.js"
></script>
```
