---
title: "JS-in-CSS: Houdini"
date: "2019-10-16"
path: "/blog/js-in-css-houdini/"
description: "Conheça o CSS Houdini. A proposta que promete mudar tudo o que conhecemos sobre desenvolvimento CSS."
keywords: "css, web, desenvolvimento, houdini"
category: "tech"
lang: "pt"
---

![Marca do CSS Houdini](https://user-images.githubusercontent.com/1680157/66880657-384bbb00-ef9a-11e9-9461-5722979ab303.png)

Velhos tempos aqueles em que as discussões sobre CSS eram apenas sobre como compactar um arquivo `.css` ou sobre o uso de `!important`.

Hoje, com demandas mais complexas na web, torna-se cada vez mais complicado escolher o caminho correto para resolver as coisas.

Seja para quem está iniciando ou para quem já é experiente.

## Dias passados...

Com o sucesso da componentização na web através dos conceitos propostos pelos _Web Components_, _React.js_, _Vue.js_, _Angular.js_ entre outros, é possível afirmar que hoje também pensamos assim enquanto estamos trabalhando com CSS.

Até pouco tempo atrás, não faltavam palestras e artigos sobre _BEM_, _SMACSS_, _OOCSS_, _Atomic CSS_, que por sua vez, apenas otimizam a escrita do CSS, falhando bastante, e por limitações técnicas, na melhoraria da própria dinâmica do CSS.

## Hoje…

O tempo passou, e evoluímos ainda mais a forma de escrever CSS, focando inclusive em tentativas de resolver essa falta de dinâmica do mesmo.

Com isso, hoje o mercado caminha com três vertentes principais:

<a href="https://vue-loader-v14.vuejs.org/pt_BR/features/scoped-css.html" target="_blank" rel="noopener noreferrer">_Scoped CSS_</a>, <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">_CSS Modules_</a> e <a href="https://itnext.io/thinking-in-styled-components-e230ea37c52c" target="_blank" rel="noopener noreferrer">_Styled Components_</a>.

E veja só, não estou falando de técnica A ou biblioteca B, muito menos que uma é melhor do que a outra ou que existem somente estas abordagens, estou apenas citando as com conceitos mais sólidos e aceitos.

Mas para além destes conceitos, há algo mais inovador surgindo e que promete dar um passo definitivo no dinamismo do CSS.

Estou falando do **CSS Houdini**.

## CSS Houdini

Já pensou em poder ter a mesma capacidade do Browser de controle do CSS? É isso que o Houdini quer oferecer.

E não se deixe enganar pela definição simples, pois o suporte vai desde a criação de propriedades para extender o CSS até a possibilidade de escrever blocos de lógica dentro so próprio CSS, indo bem além de que uma _CSS Variable_ ou uma função `calc()` faz atualmente.

```css
.el {
  --color: cyan;
  --multiplier: 0.24;
  --pad: 30;
  --slant: 20;
  --background-canvas: (ctx, geom) => {
    let multiplier = var(--multiplier);
    let c = `var(--color)`;
    let pad = var(--pad);
    let slant = var(--slant);

    ctx.moveTo(0, 0);
    ctx.lineTo(pad + (geom.width - slant - pad) * multiplier, 0);
    ctx.lineTo(pad + (geom.width - slant - pad) * multiplier + slant, geom.height);
    ctx.lineTo(0, geom.height);
    ctx.fillStyle = c;
    ctx.fill();
  };
  background: paint(background-canvas);
  transition: --multiplier .4s;
}
.el:hover {
  --multiplier: 1;
}
```

E para conceitualizar, <a href="https://developer.mozilla.org/en-US/docs/Web/Houdini" target="_blank" rel="noopener noreferrer">CSS Houdini</a> é um conjunto de especificações desenvolvidas por uma força de trabalho da W3C que visa corrigir limitações impostas ao CSS no passado pelos browsers devido a falta de segurança, más escolhas e incapacidades tecnológicas da época.

Portanto, se hoje gastamos tempo definindo a melhor escolha para modularizar nosso código CSS, espere por discussões baseadas em onde iremos adicionar lógica de manipulação CSS.

Ah! E se você quiser ver na prática e até saber como utilizar as propostas do CSS Houdini desde já, <a href="https://houdini.glitch.me/" target="_blank" rel="noopener noreferrer">acesse este link</a>.

## Conclusão

E com isso, encerro essa reflexão de onde viemos e para onde vamos com o CSS, pois mesmo com as especificações do CSS Houdini ainda em definição, todas visam apresentar um futuro concreto do CSS, e por consequência, do desenvolvimento web. Sendo assim, vamos ficar atentos nessa novidade.

▲