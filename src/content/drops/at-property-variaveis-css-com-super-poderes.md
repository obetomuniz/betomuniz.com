---
title: "@property"
subtitle: Variáveis CSS com super poderes
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1598822450/Text_Image_wyx6s0.jpg
description: Neste drop falo sobre a nova definição CSS @property que visa
  extender o uso das atuais CSS Variables.
publish_date: 2020-09-04 2:17 AM +0000
keywords:
  - css
  - property
  - variáveis
  - variables
  - propriedades
audiencecall: Faala gente, beleza? Espero que todo mundo por aí esteja bem 😷
informaldesc: 😁 E pra encerrar a semana, segue esse drop super legal sobre uma
  nova definição CSS chamada *@property*. Com ela poderemos extender o atual uso
  das famosas _CSS Variables_.
category: tech
language: pt
---

📣 `@property` é uma nova CSS API trazida pelo conjunto de especificações [CSS Houdini](https://betomuniz.com/drops/js-in-css-houdini) que visa dar "super poderes" para a atual maneira que definimos propriedades customizadas no CSS.

```css
@property --colorPrimary {
  syntax: "<color>";
  initial-value: magenta;
}

body {
  /* Fallback necessário para browsers que não dão suporte. */
  --colorPrimary: magenta;
}

.text {
  color: var(--colorPrimary);
}
```

⚡️ Como visto na definição da API, com `@property` podemos ir além de _strings_, pois podemos também configurar o tipo do dado contido na propriedade CSS customizada através do campo **syntax** e também predefinir valores através do campo **initial-value**.

🎩 Bem legal, né? Mas por ainda ser uma especificação em definição, confira o suporte [aqui](https://caniuse.com/#search=property) e acompanhe a sua evolução.
