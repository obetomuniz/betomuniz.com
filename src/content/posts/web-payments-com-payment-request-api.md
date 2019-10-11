---
title: "Web Payments com Payment Request API"
date: "2018-05-19"
path: "/blog/web-payments-com-payment-request-api/"
description: "Abordagem sobre a Payment Request API. Uma API Web pouco falada que surge para otimizar a experiência dos usuários em compras online."
keywords: "web, payments, payment request, api, javascript, chrome, firefox, edge, safari, google, microsoft, apple, android, ios"
category: "tech"
---

Fala galera! Para começar este post, gostaria de dizer que após um período sem postar muita coisa (nada), finalmente agora vou conseguir separar um tempinho para escrever mais, e tentarei de agora em diante postar mais sobre o que sinto vontade de compartilhar ou algo que estou estudando. Seja aqui no meu blog ou em qualquer outro lugar das interwebs da vida :)

Mas vamos ao que interessa…

## Payment Request API

Neste post irei abordar uma API Web pouco falada e que surge para nos ajudar a trabalhar com compras online. Estou falando da **Payment Request API**.

A Payment Request API soluciona um dos maiores problemas para a experiência do usuário quando é necessário envolvê-lo em processos de compras online, no caso o **Checkout**.

![Exemplo grotesco de Checkout](https://cloud.githubusercontent.com/assets/1680157/22496270/88b6a584-e82f-11e6-8556-5e76d527a8de.gif)

Sendo uma etapa crucial do processo de compra online, o Checkout é o momento onde precisamos coletar diversos dados delicados e críticos para o sucesso da compra, e em alguns casos, somos obrigados a solicitar o preenchimento de inúmeros campos de informação, que nem sempre possuem usabilidade amigável para que o fluxo de preenchimento seja fácil e contínuo, sem contar a falta de padrão, uma vez que cada lojista investe um modo de imersão diferente, que inconscientemente, gera diferentes rumos para algo que não deveria possuir tantas variações e nem muita complexidade, pois consequentemente, problemas nesta etapa geram menos conversões.

E é exatamente neste cenário que a Payment Request API entra, pois ela propõe normalizar de forma amigável, performática e intuitiva a implementação de um sistema de checkout para compras online, principalmente no que se diz respeito a experiência mobile do usuário, que cá entre nós, geralmente é horrível, mesmo quando se tem algum tipo de experiência projetada.

## Então Payment Request API não é um novo meio de pagamento!?

Isso mesmo, Payment Request API não vem para normalizar os meios de pagamentos ou ser uma gateway, a Payment Request API é apenas um intermediário que oferece uma interface de usuário rica e otimizada com componentes nativos do browser que facilitam o engajamento na coleta e disponibilização de dados do usuário, tais como o número de cartão de crédito, o endereço de entrega, o email e muitos outros recursos que tem como finalidade melhorar a experiência e a conversão do usuário, além de simplificar de alguma forma a integração do ambiente de vendas do lojista com os meios de pagamentos de terceiros.

<iframe width="100%" class="post-video" src="https://www.youtube.com/embed/hmqZxP6iTpo" frameborder="0" allowfullscreen></iframe>

![](https://cloud.githubusercontent.com/assets/1680157/22496370/54aff258-e830-11e6-994e-42acd848e91c.png)

## Legal! E qual é o suporte atual dessa API nos browsers?

Bom, mesmo já sendo um padrão web, a Payment Request API ainda tem passado por algumas alterações em termos de especificação, mas devido ao seu objetivo ser bastante enriquecedor para a experiência do usuário, a mesma já está sendo implementada de forma bastante ativa e intensificada por browsers como Google Chrome, Microsoft Edge e Mozilla Firefox.

No caso da Apple com o Safari, existe sim um interesse indireto, pois a Apple possui a Apple Pay JS, uma SDK proprietária de integração do Apple Pay com proposta muito similar a da Payment Request API, porém nada ainda muito promissor em termos de web standards, mas nada muito distante também.

E por falar em "X’s Pay", a Google e a Microsoft também estão muito focadas para que suas implementações da Payment Request API sejam flexíveis o bastante para que seja possível integrar a API com o Android Pay, Microsoft Wallet e outros métodos customizados de pagamento. Nas atuais implementações da API é plenamente possível realizar integrações com o Android Pay e Microsoft Wallet.

Mas a pergunta que não quer calar mesmo é: Já podemos usar? E a resposta é SIM, pois mesmo ainda não sendo suportada totalmente (como várias outras APIs na plataforma web #vivacomisso), ainda assim é possível utilizar o recurso desde já, e para não deixar este post muito longo, segue um simples, mas poderoso code sample de como habilitar a funcionalidade:

```javascript
if (!window.PaymentRequest) {
  // Caso não seja ainda suportado pelo browser, o recomendado é utilizar um form normal de checkout como fallback.
  console.log("Este browser não suporta a Payment Request API! :(")
} else {
  const request = new PaymentRequest(
    [
      {
        supportedMethods: ["visa", "mastercard"],
      },
    ],
    {
      displayItems: [
        {
          label: "Playstation VR",
          amount: {
            currency: "BRL",
            value: 2899,
          },
        },
      ],
      total: {
        label: "Total",
        amount: {
          currency: "BRL",
          value: 2899,
        },
      },
    }
  )
    .show()
    .then(function fulfilled(data) {
      console.log(data)
    })
    .catch(function rejected(error) {
      console.error(error)
    })
}
```

Facinho não é? E para deixar mais claro, preparei um [demo](https://obetomuniz.github.io/paymentrequestapi-demo/) cheio de comentários que pode ser analisado [aqui](https://github.com/obetomuniz/paymentrequestapi-demo). Dá uma conferida nele depois de terminar de ler o post, pois adicionei várias outras possibilidades promovidas pela Payment Request API.

## FAQ e Curiosidades

E para finalizar, dêem uma olhada na lista abaixo, pois selecionei uma série de questionamentos e curiosidades que fui encontrando sobre o tema nas minhas pesquisas e estudos:

### Quais são os requisitos para utilização da Payment Request API atualmente?

- Utilizar o Chrome for Android 53 e superiores ou Microsoft Edge do Windows Insider Preview 14986 e superiores.
- Servidor com HTTPS, localhost ou file:///

### Todos os métodos de pagamento são aceitos?

Atualmente não é possível por exemplo habilitar pagamento via Boleto ou Bitcoin, mas como mencionei no post, em breve a API irá otimizar a flexibilidade de integrações. No caso do Chrome, algo sobre isso será lançado por volta de Abril e Julho de 2017.

### É possível aplicar códigos promocionais?

Atualmente não, pois de maneira similar a questão de métodos de pagamentos, ainda existe pesquisa sendo feita para saber a melhor forma de incluir isso, a recomendação é aplicar o cupom antes ou depois da chamada da API.

### É possível fazer a chamada da Payment Request API em um `<iframe>`?

Sim, basta você adicionar o atributo `allowpaymentrequest` no `iframe`, porém não encontrei nenhuma referência com relação ao Microsoft Edge, mas a partir do Chrome 57 já é possível.

### Existem Polyfills para utilização desta API em browsers antigos?

Atualmente não.

### A implementação atual é a final?

Talvez, porém existem shim’s que permitem utilizar a API desde já, e assim, mesmo que futuramente alguma grande mudança aconteça, ainda assim será possível continuar utilizando versões antigas da implementação até que sejam colocadas como `deprecated` e removidas pelos browsers.

### É possível configurar endereço de entrega e o tipo de frete?

Sim. Confira como fazer isso e muito mais no meu [demo](https://github.com/obetomuniz/paymentrequestapi-demo).

### É possível habilitar no Desktop?

No Microsoft Edge sim, basta ter a versão que já citei acima. No Chrome, a promessa é que será habilitado até a metade de 2017.

### Alguém já está utilizando?

Sim, grandes vendors como Groupon, Mobify, Shopify, WWF, WooCommerce, WP Engine, Pure Formulas, KFIT, The Washington Post, Zalora, Get Your Guide entre outros.

## F.I.M

E é isso pessoal, curtiram o post ou tem algo para contribuir para o tema? Deixe seu comentário, é sempre bom receber feedbacks para poder orientar o rumo dos próximos posts.

### Referências:

- [Eventbrite Tech Talk: New Payment Request API in Chrome](https://www.youtube.com/watch?v=jgJdpM-RaVw)
- [Web Payments (Chrome Dev Summit 2016)](https://www.youtube.com/watch?v=U0LkQijSeko)
- [Payment Request API: an Integration Guide](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/)
- [Payment Request API (W3C Documentation)](https://w3c.github.io/browser-payment-api/#introduction)
- [
  Bringing Easy and Fast Checkout with Payment Request API](https://developers.google.com/web/updates/2016/07/payment-request)
- [Integrating Android Pay into Payment Request](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/android-pay)
- [PaymentRequest.shippingAddress](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/shippingAddress)
- [Simpler web payments: Introducing the Payment Request API](https://blogs.windows.com/msedgedev/2016/12/15/payment-request-api-edge/#uCvMD0dsI7x0JFcu.97)
- [Mobile Payments with the Payment Request API](https://mobiforge.com/design-development/mobile-payments-with-the-payment-request-api)

▲
