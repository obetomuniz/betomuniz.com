---
draft: false
date: 2020-11-13 3:58 PM -0200
keywords:
- textdetector api
- shape detection api
- ocr
category: tech
language: pt
title: TextDetector API
subtitle: ''
description: Neste Drop falo sobre a TextDetector API, um recurso que possibilita
  realizar reconhecimento de textos em imagens (OCR) diretamente do Browser.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1604513332/Titulo_Image_zcce9e.jpg

---
🔎 A **TextDetector API** identifica caracteres legíveis em imagens, ou seja, textos em imagens através de técnicas de OCR.

🤯 Aplicações com este tipo de recurso vão desde ferramentas para melhorar a acessibilidade web até a tradução em tempo real de outdoors ou menus de restaurantes internacionais para língua nativa, extração de conteúdo em livros e documentos. A criatividade no modo que usamos textos como informação é o limite.

```javascript
const textDetector = new TextDetector();

const texts = await textDetector.detect(bitmapImg);
```

**O uso atualmente ainda é recomendado com polyfills**, como o [tesseract.js](https://tesseract.projectnaptha.com/ "tesseract.js") ou ativando a flag `chrome://flags/#enable-experimental-web-platform-features` no Google Chrome.