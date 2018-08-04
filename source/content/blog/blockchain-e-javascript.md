---
title: "Blockchain e JavaScript"
page_title: "Blockchain e JavaScript"
document_title: Beto Muniz — Blockchain e JavaScript
date: 2018-08-04
url: /blog/blockchain-e-javascript/
collection: blog
layout: blog/post.hbs
description: Saiba o estado atual da combinação promissora entre Blockchain e JavaScript.
keywords: blockchain, javascript, ark, lisk, lsk, ethereum, web3js, truffle
---

Se você chegou neste post achando que iria aprender mais sobre [Bitcoin](https://pt.wikipedia.org/wiki/Bitcoin), [Ethereum](https://www.ethereum.org/), [Solidity](https://en.wikipedia.org/wiki/Solidity), [web3.js](https://github.com/ethereum/web3.js/) e todo o feijão com o arroz que já existe por aí. Sinto muito, mas você achou errado!

![Achou Errado!](https://user-images.githubusercontent.com/1680157/43661914-56307034-973a-11e8-96e1-b18a3b23508d.jpg)

Neste post irei falar sobre o que tem de mais novo sobre a relação extremamente promissora, e até mesmo, revolucionária entre **JavaScript** e **Blockchain**.

Para isso, irei fundamentar o conteúdo em duas tecnologias emergentes que promovem esta união. A [Lisk](https://lisk.io/) e a [ARK](https://ark.io/).

## Mas o que é "Blockchain"? 🤯

Não irei aprofundar muito nisso, pois a parte técnica é vasta, e muita gente já mastigou esse assunto o bastante para deixá-lo o mais compreensivo possível. Sendo assim, sem enrolação...

**Blockchain**, em bom português, é o conceito que tem como principal proposta resolver a segurança de transações e registros digitais. Funciona como um grande banco de dados "público" baseado no preceito de consenso entre duas partes ([P2P](https://pt.wikipedia.org/wiki/Peer-to-peer)) dentro de uma rede que garante imutabilidade e disponibilidade.

## E para que serve exatamente essa tal Blockchain?

A verdade é que não exista UMA Blockchain, uma vez sendo um conceito, o mesmo é aplicável em diversos cenários em que o mesmo, em definição já feita no tópico anterior, resolve.

E sim, quando digo isso, basicamente quero dizer que blockchain não existe apenas para [fintechs](https://pt.wikipedia.org/wiki/Fintech) e criptomoedas.

Eu poderia enumerar dezenas de aplicações blockchain possíveis, tais como, redes sociais, plataformas de blog, internet das coisas, porém recomendo apenas acessarem essas listagens de trabalhos no [AngelList.co](https://angel.co/jobs#find/f!%7B%22keywords%22%3A%5B%22blockchain%22%5D%2C%22remote%22%3Atrue%7D) e essa outra no [CryptoJobs](https://crypto.jobs/) para exemplos práticos.

## Tá! E o JavaScript?

Compreendendo a aplicabilidade diversificada do blockchain como conceito, fica claro que não estamos limitados a utilizar apenas uma tecnologia para alcançar o objetivo conceitual, e é ai que começa a verdadeira confusão.

Hoje em dia, arremetemos que para utilizarmos Blockchain com JavaScript, o único caminho viável será utilizando tecnologias como:

  - Ethereum
  - Solidity (E demais linguagens compiladas na EVM para Smart Contracts)
  - web3.js
  - [truffle](https://github.com/trufflesuite/truffle)
  - ...

Porém isso é um grande equívoco, pois já existem tecnologias blockchain que almejam eliminar qualquer abstração entre **conceito** (Blockchain) e **utilização** (JavaScript).

Aliás, veja [neste post](https://medium.com/digitalcrafts/programming-blockchain-in-javascript-8051cab272da) como você mesmo pode implementar a sua própria Blockchain com JavaScript em poucas linhas de código.

E agora sim, olhando para o grande mercado, atualmente existem dois grandes players investindo fortemente nesta (perfeita) união homogênea entre JavaScript e Blockchain.

## Lisk

<img src="https://user-images.githubusercontent.com/1680157/43661987-94609988-973a-11e8-9756-6d725695eda6.png" style="box-shadow: none" />
Lisk é uma implementação blockchain 100% escrita em JavaScript e voltada para o suporte nativo da linguagem.

O principal argumento para o foco no JavaScript dado pela comunidade que desenvolve a Lisk, é pelo fato de que JavaScript é uma das linguagens mais utilizadas no mundo, e ir por este caminho, tornará mais acessível e amigável o uso das soluções blockchain para a maioria dos desenvolvedores.

Além disso, Lisk utiliza-se principalmente de um conceito chamado de [Sidechain](https://pt.wikipedia.org/wiki/Sidechain), possibilitando assim a construção de aplicações blockchain mais complexas, modernas e seguras do que o atual mercado permite.

Mas como nem tudo são rosas, um longo [roadmap](https://www.reddit.com/r/Lisk/comments/7fe4ux/lisk_development_roadmap/) até os 100% das operações precisará ser percorrido, porém até o fim deste ano de 2018 será lançado o suporte completo para [aplicações decentralizadas](https://livecoins.com.br/o-que-sao-dapps-e-qual-sua-importancia/) dentro do ecossistema Lisk.

## ARK
<img src="https://user-images.githubusercontent.com/1680157/43661989-947f9234-973a-11e8-9571-ca50b2580764.png" style="box-shadow: none" />

ARK é uma plataforma, que tem uma missão semelhante a Lisk, que é a de facilitar a adoção em massa de aplicações blockchain como solução conceitual de tecnologia, porém ela vai além do JavaScript, pois deseja gerar um ambiente flexível, adaptável e escalável para que qualquer linguagem **E** blockchain possa se comunicar.

A relação da ARK com JavaScript é criada através de um [client](https://github.com/ARKEcosystem/ark-js), fazendo com que o [roadmap](https://ark.io/roadmap) da ARK esteja bem mais avançado que a Lisk.

Atualmente, o ecossistema passa por uma relevante mudança de arquitetura, e com o lançamento da ARK Core V2, será inclusive possível criar [Smart Contracts](https://en.wikipedia.org/wiki/Smart_contract) com JavaScript 🤩.

#### E é isso... 

Para não ficar um post muito longo, que fique claro que *Blockchain está para o JavaScript como o JavaScript está para Blockchain*. 

E saiba que o mercado blockchain brasileiro já está aquecido, inclusive haverá utilização significativa nas eleições deste ano.

Por fim, futuramente irei trazer mais posts sobre Lisk, ARK, Ethereum, ÐApps entre outras curiosidades relacionadas ao mundo das criptomoedas e blockchains.

▲

### Referências:

- [Lisk Academy](https://lisk.io/academy/welcome-to-the-lisk-academy/what-is-the-lisk-academy-intro)
- [O que é Blockchain](https://www.techtudo.com.br/noticias/2017/11/o-que-e-blockchain.ghtml)
- [What is Bitcoin?](https://www.blockchain.com/learning-portal/bitcoin-faq)
- [What is Ethereum?](https://www.blockchain.com/learning-portal/ether-basics)
- [Como implementar Blockchain em JavaScript](https://tableless.com.br/como-implementar-blockchain-em-javascript/)