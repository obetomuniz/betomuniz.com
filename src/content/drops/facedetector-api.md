---
draft: true
date: 2020-11-05 11:11 PM -0200
keywords:
- face detection api
- shape detection api
- web api
- javascript
category: tech
language: pt
title: FaceDetector API
subtitle: ''
description: Neste drop falo sobre a FaceDetector API, abordo suas capacidades para
  detecção facial diretamente da web com recursos nativos e também suas limitações.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1604454186/Titulo_Image_fqqybz.jpg

---
🤖 A **FaceDetector API** permite identificar rostos humanos em imagens.

⚡️ A **identificação é feita** de forma nativa através de recursos já disponíveis em sistemas como Android, iOS, MacOS e Windows.

```javascript
const faceDetector = new FaceDetector({
  maxDetectedFaces: 3,
  fastMode: false
});

const faces = await faceDetector.detect(bitmapImg);
```

🎚 Atualmente a **FaceDetection API** permite priorizar velocidade ao invés de precisão e também configurar o número máximo de rostos a serem identificados para otimizar a performance com base nos objetivos de cada aplicação.

**🕶 Essa API não substitui algoritmos de reconhecimneto facial**, mas facilita a implementação deles entre outros, como sistemas de _tagging_ em fotos, sistemas de _cropping_ automático baseados em rostos, sistema de _overlay_ para desenhar e muito mais.

**💡 Ainda é necessário o uso com polyfills**, como o [face-api.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html "face-api.js") ou ativando no chrome com a flag `chrome://flags/#enable-experimental-web-platform-features`.

🤯 Incrivel, né?