---
title: Dica CSS
subtitle: min(), max() e clamp()
description: Neste drop falo de três funções CSS muito úteis para o
  desenvolvimento web responsivo/adaptativo.
date: 2020-07-08 2:17 AM +0000
keywords:
  - css
  - dicas
  - min
  - max
  - clamp
  - responsive
  - web
  - adaptativo
category: tech
language: pt
---

🗣 A função CSS `min()` retorna o **MENOR** valor declarado.

📱 Numa viewport **768px** de largura:

`min(10vw, 100px)` retorna **10vw**.

🖥 Numa viewport **1024px** de largura:

`min(10vw, 100px)` retorna **100px**.

🗣 Estranhamente, `min()` é bem útil pra controlar o valor **MÁXIMO** desejado.

<Drop>

🗣 A função CSS `max()` retorna o **MAIOR** valor declarado.

📱 Numa viewport **768px** de largura:

`max(10vw, 100px)` retorna **100px**.

🖥 Numa viewport **1024px** de largura:

`max(10vw, 100px)` retorna **10vw**.

🗣 `max()` é muito útil pra controlar o valor **MÍNIMO** desejado.

<Drop>

🗣 A função CSS `clamp()` retorna o valor **DENTRO DE UM LIMITE** mínimo e máximo.

🖼 A declaração abaixo numa imagem:

`width: clamp(50px, 100%, 500px)`

Retorna **100%** da largura do container até atingir **50px** ou **500px**

🗣 **clamp()** é bem útil na criação de interfaces responsivas.
