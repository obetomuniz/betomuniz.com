---
date: 2020-09-14 2:17 AM +0000
keywords:
  - avif
  - webp
  - webdev
category: tech
language: pt
title: AVIF
subtitle: Superando o formato WebP
description: Neste drop falo do AVIF, um novo formato de imagem otimizado para
  web que promete ser mais potente do que o WebP.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1599780123/Titulo_Subtitulo_Image_Site_1_mc7a8a.jpg
draft: false
audiencecall: E aí pessoal, tudo joia?
informaldesc: "😋 No drop de hoje abordei o novo formato de imagem que está
  dando o que falar no desenvolvimento web: O *AVIF*. Dá uma lida no drop e
  entenda o porque de todo essa agitação. Ficou bem legal."
---

👉 **AVIF** ou **AV1 Image File Format**, é um novo padrão de compressão de imagens proposto pela [Netflix](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4) que suporta [SDR, HDR](https://www.viewsonic.com/library/photography/what-is-hdr-hdr-vs-sdr/) e [WCG](https://www.cnet.com/how-to/what-is-wide-color-gamut-wcg/).

⚡️ Além de imagens estáticas e transparência, AVIF suporta até imagens animadas como formatos como [GIF](https://pt.wikipedia.org/wiki/GIF), [APNG](https://pt.wikipedia.org/wiki/Animated_Portable_Network_Graphics) e [WebP](https://betomuniz.com/drops/webp) já suportam.

🧐 Seu uso para desenvolvimento web tem sido extremamente incentivado, principalmente agora com suporte do [Chrome 85](https://www.chromestatus.com/feature/4905307790639104) e do [Firefox 77](https://www.reddit.com/r/firefox/comments/gegafv/psa_firefox_77_beta_includes_avif_the_av1_image/).

👇 E pra começar a utilizar AVIF, primeiro é preciso coverter as imagens que você possuir em outros formatos para AVIF (recomendo o serviço [convertio.co](https://convertio.co/) ou algum plugin baseado no seu sistema de build para automatizar esse processo).

💥 Em seguida, utilize a declaração HTML abaixo para garantir o fornecimento do formato em browsers que já suportam.

```html
<picture>
  <source srcset="imagem.avif" type="image/avif" />
  <source srcset="imagem.webp" type="image/webp" />
  <img src="imagem.jpg" alt="Descrição da Imagem" />
</picture>
```
