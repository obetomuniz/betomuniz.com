---
publish_date: 2020-09-17 2:17 AM +0000
keywords:
  - bitwise
  - javascript
  - operadores
  - operators
  - right
  - left
  - zero
category: tech
language: pt
title: Operadores Bitwise Shift no JavaScript
subtitle:
description: Neste drop abordo de forma breve o que são e como se comportam
  Operadores Bitwise Shift, um tema relativamente denso, mas extremamente
  interessante de se conhecer dentro do JavaScript.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1600178580/Titulo_Image_Site_1_twky3b.jpg
draft: false
audiencecall: E aí gente, beleza?
informaldesc: >-
  💥 No drop de hoje compilei ao máximo e expliquei o que são e como se
  comportam *Operadores Bitwise Shift* no JavaScript.


  👉 Apesar desse ser um assunto relativamente denso e teórico, acredito que ficou beeem legal. Espero que gostem, e fica à dica para se aprofundarem mais nisso caso se interessem.
---

👨‍🔬 Conceitos teóricos a parte, **operadores bitwise**, como o nome já faz referência, são operações efetuadas bit a bit em dados númericos e sempre baseadas em 32bits.

💡 Esse tipo de operador é útil em algoritmos de _checksum_ que validam a integridade dos dados, máquinas de estados, criptografia, cálculos com cores, etc.

🗣 Falarei apenas dos **Operadores Bitwise Shift** `<<`, `>>` e `>>>`, que são utilizados para deslocar bits da esquerda pra direita.

> Dica de pesquisa: Existem outros operadores bitwise.

👇 Considerando que `170` em 32 bits é `00000000000000000000000010101010`, vejamos as seguintes definições:

## Left Shift

`<<` ou _Left Shift_ recebe `x` e `y` para `x << y`. Enquanto `x` é o número inteiro a ser processado, `y` é o número de bits a ser deslocado a partir da esquerda para direita.

```text
170 << 3

(000)00000000000000000000010101010(***)
(***)00000000000000000000010101010(000)

R: 00000000000000000000010101010000
```

<small>
  Exemplo retirado de <wbr />
  <a href="https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators">
    blog.logrocket.com
  </a>
</small>

## Right Shift

`>>` ou _Right Shift_ recebe `x` e `y` para `x >> y`. Enquanto `x` é o número inteiro a ser processado, `y` é o número de bits a ser deslocado a partir da direita para esquerda.

```text
170 >> 3

(***)00000000000000000000000010101(010)
(000)00000000000000000000000010101(***)

R: 00000000000000000000000000010101
```

<small>
  Exemplo retirado de <wbr />
  <a href="https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators">
    blog.logrocket.com
  </a>
</small>

## Zero-Fill Right Shift

`>>>`ou _Zero-Fill Right Shift_ é semelhante a `>>`, com a diferença que sempre irá popular `0` na definição esquerda do bit, `>>` pode ser `0` ou `1`.

`>>>` recebe `x` e `y` para `x >>> y`. Enquanto `x` é o número inteiro a ser processado, `y` é o número de bits a ser deslocado a partir da direita para esquerda.

```text
170 >>> 3

(***)00000000000000000000000010101(010)
(000)00000000000000000000000010101(***)

R: 00000000000000000000000000010101
```

<small>
  Exemplo retirado de <wbr />
  <a href="https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators">
    blog.logrocket.com
  </a>
</small>
