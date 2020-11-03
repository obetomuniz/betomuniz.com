---
title: Dica React
subtitle: '"as" prop e styled-components'
description: Neste drop dou uma dica bem útil para aplicar reusabilidade em
  nossos projetos através da biblioteca styled-components. Confere lá.
date: 2020-07-17 2:17 AM +0000
keywords:
  - css
  - user-select
  - selection
  - dicas
  - tips
category: tech
language: pt
---

🗣 Sabia que é possível alterar a tag de um componente criado com a biblioteca **styled-components** sem perder estilos ou ter que criar outro componente?

👉 Basta usar a propriedade `as`, bem assim ó: 👇

```jsx
import styled from "styled-components";

const TextoEstilizado = styled.p`
   {
    /* Estilos CSS do seu componente de texto */
  }
`;

const App = () => <TextoEstilizado as="span">Meu Texto</TextoEstilizado>;
```

🎨 No caso, o componente `TextoEstilizado` originalmente declarado como `p` passará a ser renderizado com um `span`.

👉 Isso é muito útil pra manter a semântica de marcação e vários outros casos de reusabilidade.

😜 Legal, né?
