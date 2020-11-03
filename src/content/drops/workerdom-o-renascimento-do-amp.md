---
title: "WorkerDOM"
subtitle: "O renascimento do AMP"
publish_date: 2019-04-29 2:17 AM +0000
xdescription: "Um drop sobre as vantagens do uso conjunto de Accelerated Mobile Pages (AMP) e WorkerDOM."
category: tech
language: pt
keywords:
  - amp
  - workerdom
---

Neste drop você vai descobrir a relação de dois assuntos independentes, mas que se **complementam** dependendo da ótica que você abordá-los, **Accelerated Mobile Pages** e **WorkerDOM**.

E direto ao ponto...

## Accelerated Mobile Pages

**Accelerated Mobile Pages**, ou melhor, **AMP**, é um framework de normas criadas pelo **AMP Project**, que através de alguns **web components**, fornecem soluções para otimização na renderização de páginas web.

O foco principal do AMP Project são dispositivos móveis, mas pela natureza universal da web, a maioria dos efeitos são refletidos no desktop também.

## WorkerDOM

A **WorkerDOM** é uma biblioteca open source **JavaScript** escrita em **TypeScript** e criada pelo AMP Project com a proposta de utilizar a **Web Worker API** para possibilitar o uso de arquiteturas de multiprocessamento (programação _multi-thread_) no desenvolvimento web.

Atualmente, **sem a WorkerDOM**, somos limitados a focar apenas na otimização de arquiteturas _single-thread_ para manipulação do DOM para reduzir o custo de processamento.

Já **com a WorkerDOM**, podemos **também** otimizar a velocidade de processamento, uma vez que a biblioteca almeja oferecer **todas** as APIs de manipulação contidas no **Document Object Model (DOM)** via **Web Workers** para que assim seja possível criar instâncias (_threads_) secundárias do DOM para manipulações intermediárias do mesmo e deixar apenas mutações necessárias para a instância principal do DOM.

Por fim, a WorkerDOM nos permite utilizar todos os recursos de processamento disponíveis e adotar vantagens da **programação concorrente** na web, que principalmente em dispositivos móveis, são imediatamente perceptíveis.

## O renascimento do AMP com WorkerDOM

Apesar do envolvimento do AMP Project na criação da biblioteca WorkderDOM, por sua natureza conceitual, a biblioteca não será integrada como solução exclusiva do AMP Project, mas sim com uma recomendação de uso genérico no desenvolvimento web, ou seja, sem dependência dos AMP Web Components.

E nesta perspectiva, vemos que **a biblioteca WorkerDOM é um passo adiante na missão de oferecer uma melhor experiência para o usuário e uma renovação dos meios de abordagem do AMP Project, oferencendo mais perspectiva de futuro e poder para o mesmo.**

Toda via, já é possível experimentar a biblioteca WorkerDOM em conjunto com React, Angular, Vue ou com as atuais soluções do AMP Project.

## Demos

Não irei desenvolver nenhuma demonstração prática, pois no repositório da biblioteca WorkerDOM existem uma variedade delas, porém destaco a [react-map](https://github.com/ampproject/worker-dom/tree/master/demo/react-map) e a [filtered-hydration](https://github.com/ampproject/worker-dom/tree/master/demo/filtered-hydration), pois respectivamente exemplificam a interoperabilidade com ferramentas atuais do mercado e com técnicas recomendadas pelo AMP Project.

## Bônus: WorkerDOM vs VDOM

Como não é o foco do drop, vou deixar um link nas referências explicando o que é **VDOM (Virtual DOM)**, mas como estamos falando sobre isolamento do processamento de operações no DOM em instâncias independentes da _main thread_ do DOM, é comum confundir WorkerDOM e VDOM, porém no caso do WorkerDOM, mesmo isolando as operações DOM em _threads_ diferentes, as operações de manipulação do DOM continuarão acontecendo, ou seja, VDOM e WorkerDOM podem coexistir. E certamente é algo sem precedentes em termos de performance na manipulação do DOM.

E era isso pessoal, se gostou do drop e do assunto, deixa um comentário.

### Referências

- [https://github.com/ampproject/worker-dom](https://github.com/ampproject/worker-dom)
- [https://amp.dev](https://amp.dev)
- [https://blog.amp.dev/2018/08/21/workerdom/](https://blog.amp.dev/2018/08/21/workerdom/)
- [https://developers-br.googleblog.com/2018/09/workerdom-simultaneidade-em-programacao.html](https://developers-br.googleblog.com/2018/09/workerdom-simultaneidade-em-programacao.html)
- [https://www.loxodrome.io/post/worker-dom/](https://www.loxodrome.io/post/worker-dom/)
- [https://news.ycombinator.com/item?id=18117387](https://news.ycombinator.com/item?id=18117387)
- [https://qiita.com/shisama/items/711fdf30316364b48a61](https://qiita.com/shisama/items/711fdf30316364b48a61)
- [https://speakerdeck.com/cramforce/workerdom-javascript-concurrency-and-the-dom](https://speakerdeck.com/cramforce/workerdom-javascript-concurrency-and-the-dom)
- [https://www.youtube.com/watch?v=XyVQfqmx2CI](https://www.youtube.com/watch?v=XyVQfqmx2CI)
- [https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API)
- [https://developer.mozilla.org/en-US/docs/Web/Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM)
- [https://github.com/Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom)

▲