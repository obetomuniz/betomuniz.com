---
title: BarcodeDetector API
subtitle: ""
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1603811465/Titulo_Image_uyo7rz.jpg
description: Neste Drop falo sobre o suporte e funcionamento da BarcodeDetector API.
publish_date: 2020-10-30 2:17 AM +0000
keywords:
  - barcode
  - código de barras
  - shape detection api
  - web
audiencecall: Fala devs, beleza?
informaldesc: " 📶 Explorando ainda mais os recursos propostos pela *Shape
  Detection API*, no Drop de hoje falei sobre a *BarcodeDetector API*, que por
  sua vez nos ajuda extrair dados de QR Codes e Código de Barras diretamente da
  web. "
category: tech
language: pt
draft: false
---

⚡️ O padrão **BarcodeDetector API** foi criado para possibilitar a leitura de **QR Codes e Código de Barras** na web.

⚛️ Para código de barras (ou padrões 1D), os formatos suportados são: **EAN-13, EAN-8, UPC-A, UPC-E, Code-39, Code-93, Code-128, ITF, e Codabar**.

⚛️ E para padrões 2D, os formatos suportados são: **QR Code, Data Matrix, PDF-417, e AZTEC**.

🤯 Uma curiosidade é que a API também faz o parsing automático quando possível de dados como Telefone, URL, vCards, e-mails, geolocalização entre outros.

```javascript
const barcodeDetector = new BarcodeDetector({
  formats: [
    'code_128',
    'code_39',
    'qr_code',
    ...
  ]
});

const barcodes = await barcodeDetector.detect(img);
```

👉 E apesar dessa API já ser suportada no [Chrome e no Edge,](https://caniuse.com/mdn-api_barcodedetector) vale acompanhar a evolução dela em outros browsers antes de adotá-la sem polyfills.

😋 Interessante, né?
