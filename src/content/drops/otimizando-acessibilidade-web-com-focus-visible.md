---
draft: true
date: 2020-11-20 3:58 PM -0200
keywords:
- focus-visible
- acessibilidade web
- acessibilidade
- a11y
category: tech
language: pt
title: Otimizando Acessibilidade Web com :focus-visible
subtitle: ''
description: Neste drop explico como funciona a nova pseudo-classe :focus-visible
  no CSS e mostro como ela nos ajuda a melhorar acessibilidade web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1604944964/Titulo_Image_jbgemd.jpg

---
🔎 `focus-visible` é uma nova pseudo-class CSS que aplica estilos de foco em elementos focáveis baseado nos modelos que o próprio browser usa para definir seus estilos padrões de foco.

💡 A diferença da `:focus-visible` e do `:focus`, é que com `:focus`, **qualquer modalidade de foco herdará tal estilo**, já com `:focus-visible`, **apenas onde o browser aplica estilos de foco herdarão** as regras CSS declaradas.

```css
.btn:focus-visible {
  outline: 4px dashed rebeccapurple;
}
```

👉 Se o desenvolvedor aplica `outline: none;` em botão via `.btn:focus`, seja no ato de click, tap ou de seleção deste botão via tecla `tab` no teclado, o estilo de foco padrão do browser será ocultado.

👉 Já usando `.btn:focus-visible`, o desenvolvedor não modifica os atos de foco padrões do browser para _click_ e _tap_ do botão e aplica estilos somente nos atos de seleção via teclado para auxiliar usuários que usam ferramentas assistivas ou o teclado para navegar.

⭐️ Vale lembrar que estilos de foco via _click_, _tap_ e teclado variam de elemento para elemento e de _browser_ para _browser_. Um exemplo são os elementos `<input>` e `<a>` que tem comportamento de foco diferente do elemento `<button>`. Portanto, evite regras genéricas.