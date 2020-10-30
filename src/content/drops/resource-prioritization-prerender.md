---
title: Resource Prioritization
subtitle: prerender
description: Neste drop falo um pouco da diretiva "prerender" para Resource
  Prioritization,que apesar de ter o uso indicado com moderação, pode sim trazer
  benefícios aos nossos usuários.
publish_date: 2020-07-30 2:17 AM +0000
keywords:
  - resource
  - hints
  - prioritization
  - prerender
  - web
  - html
  - desenvolvimento web
  - webdevelopment
category: tech
language: pt
---

💬 Nem sempre controlamos como carregamos uma página web, mas tecnologias como a diretiva `prerender` prometem resolver este problema.

```html
<link rel="prerender" href="https://meusite.com/dashboard" />
```

🗣 Nessa abordagem de **priorização de recursos**, podemos **pré carregar páginas web inteiras no cache** e otimizar acessos posteriores nessas páginas.

🆕 É literalmente como carregar a URL no `href` do exemplo acima numa nova aba virtual.

🚨 E como **grandes poderes trazem grandes bugs**, EVITE aplicar `prerender` em telas pouco utilizadas.

⚠️ Aliás, mesmo `prerender` sendo [especificação web](https://www.w3.org/TR/resource-hints/#prerender), o **suporte é baixo** e existem [discussões](https://groups.google.com/a/chromium.org/g/blink-dev/c/0nSxuuv9bBw) para combiná-la com outras abordagens de **Resource Prioritization**, então não deixe de acompanhar essas discussões.
