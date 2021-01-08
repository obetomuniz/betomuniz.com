---
draft: true
date: 2021-01-08 3:04 PM -0200
keywords:
- html
- desenvolvimento web
- download
category: tech
language: pt
title: Como funciona o atributo "download" da tag <a> no HTML?
subtitle: ''
description: Neste drop falo sobre o atributo "download" suportado pela tag <a> do
  HTML.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1610126267/Titulo_Image_grtcse.jpg

---
⏬ O atributo `download` da tag `<a>` do HTML instrui ao browser que o recurso definido no atributo `href` deve ser baixado e não navegável.

👍 Somente URLs de mesma origem de domínio ou schemas `blob:` e `data:` declarados no `href` são suportadas.

📝 O atributo `download` pode ser informado com ou sem valor. Quando informado com valor, este será o nome do arquivo a ser baixado.

😗 O atributo `download` é suportado por praticamente todos os browsers atuais, menos o IE11.

```html
<a href="..." download="image.png">
  Baixar Imagem
</a>
```