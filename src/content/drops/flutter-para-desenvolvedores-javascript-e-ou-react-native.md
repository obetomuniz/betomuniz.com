---
title: "Flutter para desenvolvedores JavaScript e/ou React Native"
publish_date: 2019-01-15 2:17 AM +0000
description: "Um drop sobre Flutter para desenvolvedores JavaScript e/ou React Native."
category: tech
language: pt
keywords:
  - javascript
  - flutter
  - react native
---

## O início

Partindo de que estamos em 2019 e de que mesmo estudando 24 horas por dia ainda não saberíamos de quase nada.

Este drop visa quebrar preconceitos de quem ainda está em dúvida sobre investir tempo aprendendo Flutter (ou outra tecnologia).

#### O atual estado do JavaScript (resumido)

E pra compreender um pouco desse bloqueio mental (ou auto sabotagem de conhecimento), nada melhor do que entender o estado atual dessa linguagem que tanto amamos e que tanto nos dá orgulho (e uns dinheirinhos também). **O JavaScript**.

Para isso, precisamos reconhecer que mesmo o JavaScript sendo universal e onipresente, ele não é perfeito.

> 😮 Por que o Beto está falando isso do meu precioso?

Por que o JavaScript nem sempre consegue resolver os problemas que criamos para ele... Quer um exemplo? Tipos.

**Tipos em JavaScript**

JavaScript é uma linguagem dinamicamente tipada. E o que isso implica no seu uso?

- Debugging complicado;
- Otimizações são mais caras;
- Performance inferior se comparada com linguagens estaticamente tipadas;
- Garantia superficial de checagem de dados - e feita em tempo de execução;
- Menos verboso, o que por sua vez, facilita o aprendizado.

E qual seria a opção de uma linguagem dinamicamente tipada? Linguagens estaticamente tipadas, e isso implica em:

- Performance superior se comparada com linguagens dinamicamente tipadas;
- Otimizações nativas, ou seja, não demandam nenhum trabalho adicional para entregar um bom código;
- Segurança de dados, uma vez que a checagem é feita em tempo de compilação;
- Debugging melhorado;
- Linguagens extremamente verbosas, o que aumenta a curva de aprendizado e a produtividade no início.

> E por que este é um bom exemplo de problema que criamos para o JavaScript?

Por que é cada vez mais considerado uma boa prática aplicar os benefícios de linguagens estaticamente tipadas no JavaScript.

E entre as soluções mais famosas temos [TypeScript](https://www.typescriptlang.org/) e [Flow](https://flow.org/), mas podemos incluir [PureScript](https://www.purescript.org/) e [Reason](https://reasonml.github.io/), que vão pra outra direção, mas seguem a mesma visão: **Otimizar a entrega do JavaScript**.

E pelo bem ou pelo mal, estas soluções modificam completamente ou parcialmente o modo que escrevemos, trabalhamos e pensamos em JavaScript.

E pra ficar claro meu ponto, **Dart é até mais fácil e poderoso do que algumas dessas tentativas de melhorias do JavaScript**.

Portanto, **Dart não é o problema para aprender Flutter para um desenvolvedor JavaScript**.

Estamos em 2019 pessoal, aprender novas tecnologias ou idiomas computacionais devem ser parte do nosso cotidiano, não podemos tratar isso como problema.

#### Mas vamos falar do que interessa? Bora!

Dando um pouco de direção nisso tudo, irei levantar agora os pontos que irão ajudar desenvolvedores JavaScript e/ou React Native no início dos estudos sobre Flutter.

E para os desenvolvedores Flutter/Dart, peço bom senso, pois é um drop para iniciantes, ou seja, divergências de conceitos podem aparecer, pois a idéia é ser didático e desmistificar Flutter através de assimilações com JavaScript e/ou React Native.

### O que é Flutter?

[Flutter](https://flutter.io) é um framework open-source para criação de aplicações móveis através da linguagem Dart.

Sua proposta é escrever uma única base de código que poderá ser utilizada para iOS e Android através de um ecossistema de desenvolvimento rápido, flexível e performático.

### Flutter vs. React Native

Beleza, agora que sabem o que é Flutter e sua proposta, para os que já conhecem React Native, sei que vão se perguntar:

> Então ele é igual ao React Native?

E a resposta é: **Não**, são soluções completamente diferentes.

Tudo bem que de ambos prometem a mesma coisa, mas na prática, divergem na forma que solucionam o problema que se propuseram resolver.

Enquanto o React Native aplica o conceito de [bridge](https://facebook.github.io/react-native/docs/communication-ios) o tempo todo, [Flutter elimina isso completamente em produção](https://medium.com/inloopx/native-apps-with-flutter-and-react-native-8d300805b3c6) através de determinados processos de compilação oferecidos pela linguagem Dart.

Com Flutter a dependência de um "tradutor" entre o Reino Nativo e o Reino Dart é feita de forma inteligente no ambiente de desenvolvimento e apenas em benefício de funcionalidades como o Hot Reload entre outras praticidades para um desenvolvimento amigável.

### E porque Flutter usa Dart?

Bom, abaixo segue um resumão das justificativas dadas pelo time de desenvolvimento do Flutter ao escolher Dart como linguagem padrão, e sim, testaram outras, inclusive JavaScript.

- Dart é open-source;
- Dart é [AOT](https://en.wikipedia.org/wiki/Ahead-of-time_compilation), ou seja, o processo de compilação acontece antes do processo de execução da aplicação;
- Dart é [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation), ou seja, o processo de compilação pode acontecer durante o processo de execução. Inclusive, isso é utilizado por um poderoso recurso, o Hot Reload, que irei falar um pouco mais a frente;
- Dart possui otimizações para execução de animações e transições em 60fps entre outras dezenas de otimizações built-in e nativas;
- Dart possui características de linguagens dinâmicas e estáticas;
- Tree shaking real, ou seja, você não precisa adicionar nenhuma complexidade para carregar APENAS os recursos que precisa;
- A implementação OOP é real através de classes e interfaces, e com funcionalidades adicionais;
- [Overload de operador](https://en.wikipedia.org/wiki/Operator_overloading);
- Melhor uso de [Generics](https://blog.sethladd.com/2012/01/generics-in-dart-or-why-javascript.html);
- Possui praticamente todas as features existentes no TypeScript, e claro, também compila para JavaScript. O que é importante, já que é possível [desenvolver para web usando Dart](https://webdev.dartlang.org/);
- Dart foi influênciada por [C#, Erlang, JavaScript e Smalltalk](https://www.educba.com/typescript-vs-dart/), o que facilita seu aprendizado e adoção.

E com todas estas e muitas outras características modernas e flexíveis, Dart se provou uma boa aposta.

Mas para uma melhor compreensão, recomendo fortemente a leitura [deste artigo](https://hackernoon.com/why-flutter-uses-dart-dd635a054ebf). Nele você entenderá os detalhes da escolha da linguagem Dart para o Flutter.

E nessa altura do drop, agora é hora de assimilar o mundo JavaScript e/ou React Native com Flutter.

### Widgets vs. React Components

[Flutter Widgets](https://flutterbyexample.com/flutter-widgets/) são blocos de código reutilizáveis, ou seja, são equivalentes aos React e/ou React Native Components. Sem mais, nem menos. Simples assim.

Uma coisa importante de dizer, é que os Widgets estão para o Flutter, como a água está para o vinho, ou seja, Widgets são partes fundamentais para se compreender o Flutter, até existe uma afirmativa que diz que "Widgets são tudo em Flutter", o que não deixa de ser verdade.

### Stateless e Stateful Widgets

**Stateless Widgets** são o equivalente dos Functional (Stateless) Components dentro do React e/ou React Native, ou seja, pedaços de código sem estado interno. Em outras palavras, estáticos.

**Stateful Widgets** são o equivalente dos Class (Stateful) Components dentro do React e/ou React Native, ou seja, pedaços de código com estado mutável. Em outras palavras, dinâmicos.

Inclusive, é interessante colocar que no ecossistema Flutter, Stateless e Stateful Widgets existem para propósitos muito bem definidos. O que não é sempre claro no ecossistema React/React Native.

### Método build

O método `build` é o equivalente ao sistema de renderização de componentes React e/ou React Native.

É ele quem possibilita carregar visualmente e/ou estruturalmente nossos Widgets.

### Lifecycles

[Stateful Widgets possuem Lifecycles](https://flutterbyexample.com/stateful-widget-lifecycle/) como Class (Stateful) Components no React e/ou React Native.

Em resumo, Lifecycles, como o próprio nome diz, permite o controle do ciclo de vida de determinado contexto lógico de um software.

No caso do Stateful Widgets, podemos controlar quando o Widget é carregado, atualizado, removido entre outros aspectos possíveis.

### OEM, Material e Cupertino Widgets

Uma das principais vantagens do Flutter é a [não utilização de OEM Widgets](https://medium.com/flutter-io/why-flutter-doesnt-use-oem-widgets-94746e812510), ou seja, seus Botões, Listas entre os outros widgets visuais ou não-visuais do seu [catálogo de Widgets](https://flutter.io/docs/development/ui/widgets) foram criados do zero, e por isso, são independentes da versão da plataforma e/ou da plataforma que estão sendo executados, o que no fim, oferece muito mais flexibilidade de customização.

E isso também inclui os Material e Cupertino Widgets, que são widgets com interface baseada no [Material Design (Android)](https://flutter.io/docs/development/ui/widgets/material) ou [Cupertino Design (iOS)](https://flutter.io/docs/development/ui/widgets/cupertino).

### Hot Reload

Se tem uma funcionalidade que vale destaque para um desenvolvedor JavaScript aprendendo Flutter, é o [Hot Reload](https://flutter.io/docs/development/tools/hot-reload).

Através do suporte de compilação JIT da linguagem Dart, Flutter injeta alterações de código dentro da DVM (Dart Virtual Machine) em menos de um segundo sem afetar a progressão do desenvolvimento ou o Application State.

É incrível.

### Application State Management

E outra coisa incrível no universo Flutter, é que a comunidade vai além do conceito Redux que o ecossistema React/React Native e JavaScript amplamente adota como praticamente um standard.

Com Flutter, podemos combinar Redux ou até mesmo considerar o uso de outras propostas, como por exemplo InheritedWidget, BLoC e Scoped Model.

Para mais detalhes, recomendo a leitura [deste artigo](https://medium.com/flutter-community/let-me-help-you-to-understand-and-choose-a-state-management-solution-for-your-app-9ffeac834ee3) e [deste artigo](https://medium.com/flutter-io/managing-flutter-application-state-with-inheritedwidgets-1140452befe1) que abordam muito bem o estado atual de uso de um Application State Management no Flutter.

### Threading Model

Por padrão, Dart é executada em uma única thread, a não ser que o desenvolvedor utilize [Isolates](https://api.dartlang.org/stable/2.1.0/dart-isolate/dart-isolate-library.html).

Isolate permite o isolamento e o controle de parte específica do [event loop](https://webdev.dartlang.org/articles/performance/event-loop) do Dart, possibilitando assim aplicações [multithreading](https://en.wikipedia.org/wiki/Multithreading).

Para um desenvolvedor JavaScript, Isolates é uma solução semelhante aos [Web Workers](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API) ou a [Looper](https://developer.android.com/reference/android/os/Looper) para quem tiver alguma familiaridade com desenvolvimento Android.

### Navigation

Como desenvolvedor React Native, a primeira feature que busquei quando iniciei meus estudos relacionados ao Flutter foi como era resolvido a questão de Routing/Navigation, e acredite, apesar do `react-navigation` atualmente ter um certo grau de maturidade para esse problema crônico do React Native, o Flutter já tem em sua primeira versão um sistema extremamente poderoso, e que não deixa nada a desejar se comparado ao `react-navigation`.

Ah! E é importante mencionar que além de ser um sistema de fácil compreensão, versatilidade e customização, é 100% NATIVO, diferentemente do `react-navigation`, o que trás muito mais performance e controle nas transições.

Sim, é minha feature preferida 🤣

### Comunidades

Bom, aqui, numa perspectiva injusta, a gente complica um pouco pro Flutter. Pense comigo, React Native existe desde 2015, e sim, possui uma comunidade gigantesca, impossível falar que a abrangência do Flutter é equivalente ao React Native, pois não é.

A verdade é que a versão beta do Flutter foi lançada em 2017, porém, o framework só ganhou notoriedade em 2018, principalmente após o lancamento da sua versão 1.0

Mas não fique limitado apenas a idade do Flutter, pois toda a comunidade Dart, e claro, a recém-criada comunidade Flutter, está extremamente integrada e ativa.

Um bom exemplo da força que o Flutter já possui são suas quase +50.000 stars vs. +72.000 stars do React Native no GitHub.

**Também quero ressaltar o número gigantesco de artigos que já existem sobre Flutter.** É descomunal!

Para praticamente todas as dúvidas pontuais que eu tive até agora, tinha algo na documentação ou algum artigo da comunidade.

### Futuro 🔮

Bom, o futuro é impossível de prever, porém quanto mais o tempo passa, mais arrisco dizer que o Flutter veio pra ficar.

Estou confiante em apostar nele, ao meu risco, claro, mas o que posso recomendar é que a partir deste drop você passe a acompanhar ele, sem preconceitos ou desculpas que já não funcionam em 2019.

#### Bônus: JSX

Flutter não possui oficialmente um JSX, DSX ou similar (ainda) para ajudar na escrita do código, e infelizmente, as vezes nos perdemos em dezenas de `(((`, `{{{`, `}}}` e `)))` na hora de criar nossos Widgets, mas não existir tal recurso, força de forma implícita a modularização de código, gerando códigos mais performáticos e que seguem boas práticas como [D.R.Y.](https://pt.wikipedia.org/wiki/Don%27t_repeat_yourself) e [K.I.S.S.](https://pt.wikipedia.org/wiki/Keep_It_Simple).

A verdade é que só busquei esse recurso, por já ter trabalhado com React/React Native, mas depois de um tempo em contato com Dart, não faz muita falta, é questão de gosto mesmo.

PS: Se gostou do drop, deixe seu comentário ☺️.

▲
