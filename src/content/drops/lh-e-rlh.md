---
title: LH e RLH
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598819747/Text_atijuq.jpg
description: Neste drop falo das unidades de medida LH e RLH do CSS e
  exemplifico como podem ser úteis para trabalhar com tipografia e ícones.
publish_date: 2020-09-02 2:17 AM +0000
keywords:
  - lh
  - rlh
  - css
audiencecall: Fala galera, beleza?
informaldesc: >-
  ✨ No drop de hoje falei de duas novas unidades CSS: A *LH* e *RLH*. 


  🧩 Ambas são bastante úteis ao se trabalhar com componentes complexos que envolvem textos. Espero que gostem.
category: tech
language: pt
---

⚡️ [LH](https://www.w3.org/TR/css-values-4/#lh) e [RLH](https://www.w3.org/TR/css-values-4/#rlh) são novas unidades de medidas no CSS que permitem a exploração da propriedade `line-height` como medida referencial.

**👉 LH** representa o `line-height` do elemento que está controlando o contexto.

**👉 RLH** representa o `line-height` do elemento pai mais próximo que possui definição `line-height` ou o `line-height` padrão do próprio `<html>`.

<!-- <Img
  src="https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598818619/css-lh-unit_i42gbe.png"
  author="webplatform.news"
  authorURL="https://webplatform.news/issues/2020-04-29"
/> -->

🧩 No exemplo, o ícone com valor de `1lh` preenche totalmente a altura, pois o elemento que controla o contexto tem o `line-height` computado pelo texto `Lorem ipsum`.

🧩 Quando o ícone usa o valor `1em`, o mesmo não preenche totalmente a altura, pois `em` utiliza-se da definição `font-size` do texto `Lorem ipsum`.

😋 Muito útil, não é?