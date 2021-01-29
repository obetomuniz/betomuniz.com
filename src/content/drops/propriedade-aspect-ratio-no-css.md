---
draft: false
date: 2021-01-29 5:20 PM -0200
keywords:
- css
- image
- performance
- html
category: tech
language: pt
title: Propriedade aspect-ratio no CSS
subtitle: ''
description: Neste drop dou detalhes sobre a propriedade CSS aspect-ratio, seu propósito
  e também dicas de uso.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1611948159/Titulo_Image_i03i3b.jpg

---
⚡️ A nova propriedade CSS `aspect-ratio` introduz a **todos** os elementos no HTML a possibilidade de dimensionamento automático.

```css
.square { aspect-ratio: 1 / 1; }

.rectangle { aspect-ratio: 3 / 1; }

.video { aspect-ratio: 16 / 9; }

.ultrawide { aspect-ratio: 21 / 9; }

.intrinsicsize { 
  aspect-ratio: attr(width) / attr(height);
}
```

🗣 Sem a propriedade CSS `aspect-ratio`, somente alguns elementos possuem cálculo automático de dimensionamento.

📝 Por exemplo a tag `<img />` , que quando possui pelo menos o valor de `width`  explicitamente configurado, implicitamente pode calcular o valor de `height`  e vice-versa.

🤩 Agora até mesmo a tag `<div>`  pode apresentar esse tipo comportamento de auto dimensionamento.

📣 Além disso, a nova propriedade CSS `aspect-ratio`  facilita a criação de interfaces responsivas, dinâmicas e inclusive a adoção de boas práticas no uso de imagens na web, pois permite redimensionar precisamente uma imagem baseada na taxa de proporção original dela, para assim melhorar a experiência do usuário e até métricas de performance no [_Lighthouse_ ao não adotar imagens desproporcionais](https://developers.google.com/web/updates/2017/10/lighthouse#aspect).