---
draft: true
date: 2020-12-04 12:37 AM -0200
keywords:
- iife
- javascript
- funções imediatas
- recursividade
- recursão
category: tech
language: pt
title: O que são IIFE ou Funções Imediatas no JavaScript?
subtitle: ''
description: Neste drop explico o que são e como funcionam as IIFE no JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1605149883/Titulo_Image_n6d7a9.jpg

---
😁 **IIFE**, ou **Immediately-invoked Function Expressions**, ou **Funções Imediatas** é um _Design Pattern_ que invoca e executa funções assim que as mesmas são criadas em seu runtime.

😎 IIFE's geralmente estão atraladas com o desejo de não poluir o objeto global, e até mesmo por isso, é um ótimo _Design Pattern_ para isolar lógicas e declarações.

```javascript
;(function thisIsANamedIIFE() { 
    let nome = "Beto Muniz";
})();
```

😋 Esse padrão é muito usado durante a criação de bibliotecas JavaScript.