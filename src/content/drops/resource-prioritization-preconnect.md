---
title: Resource Prioritization
subtitle: preconnect
description: 'Neste drop sobre Resource Prioritization falo da diretiva
  "preconnect" e como ela nos ajuda a melhorar a experiência de performance em
  aplicações web resolvendo DNS, TLS e  TCP. '
publish_date: 2020-07-30 2:17 AM +0000
keywords:
  - resource
  - prioritization
  - preconnect
  - performance
  - dns
  - tls
  - tcp
category: tech
language: pt
---

👉 Das inúmeras vantagens de utilizar as técnicas de **Resource Priorization,** uma que se destaca é a diretiva `preconnect`.

```html
<link rel="preconnect" href="https://cdn.exemplo.com" />
```

Com a `preconnect` podemos antecipar quais conexões HTTP o **Browser** deve resolver o [DNS](https://pt.wikipedia.org/wiki/Sistema_de_Nomes_de_Dom%C3%ADnio), [TLS](https://pt.wikipedia.org/wiki/Transport_Layer_Security) e [TCP](https://pt.wikipedia.org/wiki/Transmission_Control_Protocol) antes de qualquer outra, visando assim melhorar a [experiência de performance do usuário](https://siliconangle.com/2019/05/23/million-dollar-millisecond-lowering-life-death-latency-dx-cubeconversations/).

E como exemplo de uso, podemos configurar no valor do atributo `href` o domínio dos [CDNs](https://pt.wikipedia.org/wiki/Rede_de_fornecimento_de_conte%C3%BAdo) utilizados nas nossas aplicações web ou domínios de possíveis conexões HTTP geradas por interação do usuário.

![](https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1595993153/Untitled_olf369.png)

🤓 Bem massa esse funcionalidade, né?