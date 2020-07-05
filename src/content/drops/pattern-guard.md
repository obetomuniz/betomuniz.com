---
title: "Pattern Guard"
date: "2020-06-23"
path: "/drops/pattern-guard/"
description: "Neste drop falo sobre as vantagens do uso do Pattern Guard."
keywords: "pattern, guard"
category: "tech"
lang: "pt"
drops: true
---

<div class="drop">

🤩 Parece bobo, mas o pattern Guard é um dos que mais uso, afinal:

```javascript
function fn(n) {
  if (!isDefined(n)) {
    throw new Error("Number not defined")
  }

  ...

  if (n % 2 === 0) {
    return "Pair"
  }

  return "Odd"
}
```

Código mais claro e menos complexo do que com if-else’s

<center class="center-original-content">
<a href="https://twitter.com/obetomuniz/status/1275432767694802945" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>

<div class="drop">

Aliás, não usem `fn` ou `n` para declarar funções e variáveis. A não ser que o "editor" de vocês limite o uso de apenas 280 caracteres 🤣

<center class="center-original-content">
<a href="https://twitter.com/obetomuniz/status/1275433467346640896" target="_blank" rel="noopener noreferrer">See original content</a>
</center>

</div>

</div>