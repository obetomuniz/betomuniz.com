---
date: 2020-09-16 2:17 AM +0000
keywords:
  - css
  - texts
  - columns
  - textos
category: tech
language: pt
title: CSS Columns
subtitle:
description: Neste drop falei sobre CSS Columns, um recurso muito pouco falado,
  mas muito útil na diagramação de textos.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1600174782/Titulo_Image_Site_lgvpvb.jpg
draft: false
audiencecall: Faala galera, beleza?
informaldesc: 🖍 No drop de hoje falei sobre o conjunto de propriedades CSS
  Columns, um recurso bem legal para quando precisamos lidar com textos longos e
  complexos. Ficou bem legal, espero que gostem 😍
---

⚡️ A propriedade `columns` do CSS permite diagramar o fluxo de textos em colunas.

🎩 Com a propriedade `columns` podemos configurar a **largura mínima** de cada coluna e o **número esperado de colunas**.

```css
.texto {
  columns: 100px 3;
}
```

🗣 Outra forma de definir CSS Columns, é através do conjunt de propriedade `column-*`.

```css
.texto {
  column-gap: 100px;
  column-count: 3;
  column-rule: 4px double #663399;
}
```

```video
https://res.cloudinary.com/beto-muniz/video/upload/v1600174990/Kapture_2020-09-15_at_09.54.22_gywzye.mp4
```

👨‍🎨 Bacana, né?
