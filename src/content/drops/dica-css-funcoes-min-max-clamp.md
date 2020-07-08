---
title: "Dica CSS"
subtitle: "min(), max() e clamp()"
date: "2020-07-08"
path: "/drops/dica-css-funcoes-min-max-clamp/"
description: "Neste drop falo de três funções CSS muito úteis para o desenvolvimento web responsivo/adaptativo."
keywords: "css, dicas, min, max, clamp, responsive, web, adaptativo"
category: "tech"
lang: "pt"
drops: true
---

<div class="drop">

🗣 A função CSS `min()` retorna o **MENOR** valor declarado.

📱 Numa viewport **768px** de largura:

`min(10vw, 100px)` retorna **10vw**.

🖥 Numa viewport **1024px** de largura:

`min(10vw, 100px)` retorna **100px**.

🗣 Estranhamente, `min()` é bem útil pra controlar o valor **MÁXIMO** desejado.

<center class="center-original-content">
<a href="https://twitter.com/i/status/1280835273601974277" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>

<div class="drop">

🗣 A função CSS `max()` retorna o **MAIOR** valor declarado.

📱 Numa viewport **768px** de largura:

`max(10vw, 100px)` retorna **100px**.

🖥 Numa viewport **1024px** de largura:

`max(10vw, 100px)` retorna **10vw**.

🗣 `max()` é muito útil pra controlar o valor **MÍNIMO** desejado,

<center class="center-original-content">
<a href="https://twitter.com/i/status/1280895931878170624" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>

<div class="drop">

🗣 A função CSS `clamp()` retorna o valor **DENTRO DE UM LIMITE** mínimo e máximo.

🖼 A declaração abaixo numa imagem:

`width: clamp(50px, 100%, 500px)`

Retorna **100%** da largura do container até atingir **50px** ou **500px**

🗣 **clamp()** é bem útil na criação de interfaces responsivas.

<center class="center-original-content">
<a href="https://twitter.com/i/status/1280967898127831040" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>
