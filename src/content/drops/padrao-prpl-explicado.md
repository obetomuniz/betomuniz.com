---
draft: false
date: 2021-02-19 7:08 PM -0200
keywords:
- webperf
- prpl
- push
- render
- pre-cache
- lazy-load
category: tech
language: pt
title: Padrão PRPL explicado
subtitle: ''
description: Neste drop falei sobre o padrão PRPL, uma abordagem para entrega de páginas
  web rápidas do carregamento ao uso.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1613768922/0_qzqryl.jpg

---
🗣 **PRPL** é um padrão que promove boas práticas para carregamento e uso de páginas web que focam em entregar experiências performáticas aos seus usuários.

👉 As 4 letras representam os aspectos do padrão, que são:

## (P)ush ⚡️

**Push** (ou Preload) determina que os recursos mais importantes devem estar disponíveis o mais breve possível no ato de carregar uma página web.

`<link rel=preload>` entre outras técnicas de **Resource Prioritization** são muito úteis para este fim.

## (R)ender ⚡️

**Render** determina que o conteúdo da página web comece a ser renderizado o mais rápido possível.

Usar scripts (ou styles) críticos de forma inline e não-críticos com arquivos externos e/ou `<script async>` é útil para este fim, pois agiliza o **First Paint** da página.

## (P)re-cache ⚡️

**Pre-cache** determina que recursos com potencial de reutilização pelo usuário durante a navegação de uma página web sejam armazenados pelo browser para futura reutilização.

**Service Workers** (Cache API ) podem ser bem úteis para este fim.

## (L)azy-load ⚡️

**Lazy-load** determina que o carregamento de recursos e a renderização de partes de páginas web sejam adiados até que o usuário os acesse diretamente.

Entre outras técnicas, usar o atributo `loading=lazy` é útil para aplicar esse aspecto em `<img>` e/ou `<iframe>`.