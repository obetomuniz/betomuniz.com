---
title: "Pattern Guard"
publish_date: 2020-06-23 2:17 AM +0000
description: "Neste drop falo sobre as vantagens do uso do Pattern Guard."
category: "tech"
language: pt
keywords:
  - pattern guard
---

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

<Drop>


Aliás, não usem `fn` ou `n` para declarar funções e variáveis. A não ser que o "editor" de vocês limite o uso de apenas 280 caracteres 🤣