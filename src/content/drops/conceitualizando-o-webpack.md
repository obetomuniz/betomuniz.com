---
title: "Conceitualizando o webpack"
publish_date: 2017-02-14 2:17 AM +0000
description: "Abordagem conceitual do webpack, que apesar de ser uma ferramenta cada vez mais presente em nosso dia a dia, ainda é muito mistificada, e por isso, pouco compreendida."
category: tech
language: pt
keywords:
  - webpack
---

Fala galera! Voltei :D E dessa vez para escrever sobre uma ferramenta que está cada vez mais presente em nosso dia a dia, mas que ainda é muito mistificada, e por isso, não muito compreendida.

Portanto, o foco aqui será explicar da forma mais objetiva possível, o que afinal esse webpack tem de bom.

## Disclaimer

**Este drop não é outra demo _React + webpack_ ou _Vue + webpack_**.

Minha ideia aqui é compilar conteúdo genérico para quem quer realmente entender os conceitos e possibilidades atreladas ao webpack.

Sendo assim… Bora pro drop!

## Dive into the webpack

Visto que entender o que é e também qual é o papel do webpack no desenvolvimento de um projeto ainda gera muita confusão, vou começar este drop definindo que o webpack nada mais é que parte de um conceito de ferramentas conhecido como **Build Tools**, que em resumo, **é um conjunto de ferramentas que automatizam determinados processos na entrega de um software**.

E sendo esse conceito bastante amplo, o importante para você saber, é que no contexto de Build Tools, o webpack é sumariamente definido como um **Bundler**.

Sendo assim, **o principal objetivo do webpack é agrupar os recursos utilizados em um projeto e transformá-los em um único arquivo**.

Uma outra coisa interessante de complementar, é que no contexto de Build Tools, **o webpack é bem diferente de ferramentas como Make, Grunt, Gulp, Brocolli entre outros Task Runners**, apesar de que em algumas ocasiões, é possível substituir completamente um Task Runner por um Bundler.

Mas para que você possa entender bem todo o poder e hype do webpack, você vai precisar compreender seus _core concepts_, e é isso que vamos fazer agora.

## Core Concepts

Bom, antes de começarmos a definir os conceitos debaixo do capô do webpack, veja abaixo um exemplo mínimo de configuração que o webpack demanda para funcionar.

```javascript
// webpack.config.js

module.exports = {
  entry: {
    ...
  },
  output: {
    ...
  },
  module: {
    rules: [
      ...
    ]
  },
  plugins: [
    ...
  ]
};
```

Não deixe de observar bem o exemplo, pois é a partir dele que irei destrinchar os conceitos do webpack.

### Entry

_Entry_ é o conceito mais básico do webpack, pois é a partir dele que o sistema de **bundling** do webpack será iniciado, permitindo com que o webpack seja capaz de gerar [um grafo de dependências](https://webpack.js.org/concepts/dependency-graph/) do projeto.

E só para simplificar a compreensão desse conceito, pense que **o arquivo declarado na propriedade `entry` será o arquivo main da aplicação**, e de alguma forma, todas as dependências do projeto deverão estar conectadas a ele.

Mas para ilustrar, veja no exemplo abaixo como declarar esta propriedade:

```javascript
module.exports = {
 entry: './path/to/my/entry/file.js',
 ...
};
```

Viu? Não é nada de mais, mas **isso não acaba aqui**, pois além desta declaração, **existem outros meios de configurar a propriedade `entry`**, mas para não sair muito do foco do drop, acesse [este link](https://webpack.js.org/concepts/entry-points/) e descubra outras formas de se fazer isso.

### Output

Uma vez declarado o arquivo raiz na propriedade `entry`, permitindo assim que o webpack saiba sobre todas as dependências que ele deve empacotar, o próximo passo é informá-lo **como e onde será a saída do arquivo gerado ao final do processo de bundling**, e pra isso, vamos utilizar a propriedade `output`.

Veja abaixo um dos caminhos de configuração da propriedade `output`:

```javascript
module.exports = {
  ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  ...
};
```

E como no caso da propriedade `entry`, **a propriedade `output` também é extremamente flexível e proporciona diversas outras abordagens de configuração**, e para saber como fazer isso, acesse [este link](https://webpack.js.org/concepts/output/).

### Module e Loaders

Após declarar a entrada e a saída do seu **bundle app** (arquivo gerado ao final do processo de bundle e que será utilizado em produção), agora é hora de definir como o webpack irá interpretar seus assets e quais assets você deseja empacotar.

Para isso, primeiramente o webpack deve saber quais são os tipos de assets que você possui no projeto (_.jsx, .html, .scss, .css, .jpg_, etc.), para que assim os loaders transformem estes assets em módulos legíveis para o webpack, fazendo que o mesmo consiga então adicioná-los ao grafo de dependências do sistema de bundling.

Além disso, é importante dizer que **os loaders não irão atuar no código fonte do seu projeto**. Eles apenas irão ler o conteúdo deles, _transformar_ este conteúdo e retorná-lo em uma nova saída para o webpack, sem nenhuma alteração no original.

E para dar continuidade a este conceito, veja o código abaixo:

```javascript
module.exports = {
  ...
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  ...
}
```

Note no código que temos uma declaração `module`, e ela basicamente define o local onde você irá definir os loaders e respectivas regras de utilização deles.

E explicando de forma bem objetiva o que é adicionado na propriedade `module`:

**rules**

Escopo das configurações dos loaders e parsers utilizados.

**test**

Aspecto que define os arquivos que devem ser interpretados, transformados e enviados para o grafo de dependência do webpack por um determinado loader.

**use**

Aspecto que define um ou mais loaders que serão utilizados para transformar o conteúdo do asset em um módulo e adicioná-lo ao grafo de dependência (que eventualmente será o seu bundle app).

E é isso, como no caso da propriedade `entry` e `output`, o conceito de loaders é extremamente poderoso e possui diversas formas de configuração. Veja [este link](https://webpack.js.org/concepts/loaders/) e saiba mais.

### Plugins

E por último, o mais importante dos core concepts do webpack, _Plugins_. Prepare-se para fritar o cérebro…🤣

E acredite em mim, não estou sendo clichê quando digo isso, a pegadinha nesse conceito, é que o webpack em si, é apenas uma resultante do seu próprio sistema de plugins, ou seja, o webpack é uma variedade de plugins built-in para bundling que utilizam-se de um mesmo sistema de plugins conhecido como [tapable](https://github.com/webpack/tapable).

Meio loucura isso, né? Certamente. Porém, é totalmente incrível também, pois nos dá flexibilidade inigualável com relação a outras ferramentas semelhantes, sendo este conceito um dos grandes motivos da ascensão do webpack atualmente.

E só para fechar este conceito, segue abaixo um exemplo simples de como configurar plugins (da comunidade ou do próprio webpack) no seu arquivo de configuração.

```javascript
module.exports = {
  ...
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

E como fiz nos outros conceitos, dê uma olhada [neste link](https://webpack.js.org/concepts/plugins/) para entender mais sobre como configurar e também como criar plugins para o webpack.

## Mas e ai gostando? Espero que sim, pois o webpack não para por aqui...

Mesmo o webpack sendo uma ferramenta que tem como propósito principal empacotar recursos de um projeto, ele não para por aí, e para esclarecer isso, separei alguns outros recursos oferecidos por ele.

### Hot Module Replacement

O **Hot Module Replacement** ou **HMR**, talvez seja a ísca de todo entusiasta webpack, pois mesmo sendo uma feature opcional, sua utilização é praticamente obrigatória para qualquer desenvolvedor… Mas afinal, o que é esse tal de HMR?

HMR é semelhante a uma técnica conhecida por nós como **live reload**.

**A diferença é que o HMR** não recarrega toda a aplicação após cada alteração no código fonte, o HMR **irá recarregar apenas a parte afetada pela alteração**.

E isso, é extremamente útil em alguns casos, como por exemplo se você estiver utilizando alguma ferramenta para controle do estado da aplicação, com o uso do HMR, você poderá manter o estado da aplicação, mesmo após alterações no código fonte, sem refresh da página e reinicialização do _application state_.

### Code Splitting

Como no caso do HMR, **Code Splitting** também é uma outra feature que é opcional, porém seu uso é praticamente obrigatório.

No caso do Code Splitting, o webpack **oferece a possibilidade de “dividir” o código** gerado ao final do processo de bundling em vários arquivos, possibilitando assim que você carregue os recursos sob demanda, visando melhorar a performance, e consequentemente, a experiência do usuário ao utilizar a sua aplicação.

### Asset Hashing

Mesmo que as vezes a palavra _hash_ cause receio e medo, uma vez que envolve criptografia, e isso arremete a complexidade de implementação, no caso do webpack a funcionalidade de **Asset Hashing** possui uma aplicação simples e objetiva.

Utilizar a **Asset Hashing permite que através de algumas declarações** no arquivo de configuração do webpack, **você aplique no nome do arquivo gerado ao fim do processo de bundling uma hash**, ou seja, é possivel utilizar `app.d82kas4so.js` ao invés de `app.js` em produção.

Sendo assim, toda vez que o processo de bundling finalizar, o bundle app será gerado com uma hash diferente, o que em produção, forçará o _Client_ a limpar o cache sempre.

### Extensibilidade (Plugins/Loaders)

Sendo parte conceitual do webpack, **a extensibilidade proposta por ele é um dos artifícios mais encorajadores ao se escolher entre o webpack e outros bundlers**, pois se em algum momento você não encontrar um plugin ou um loader que faz o trabalho pesado do seu processo de bundling, você pode simplesmente fazer o seu próprio plugin e/ou loader.

### Configuration Driven

O pensamento de que o webpack é um cara difícil de se trabalhar, em geral deve-se ao fato de que a forma que ele demanda instruções é baseada em configurações.

Você não deve pensar em paradigmas de programação e se determinado processo é assíncrono ou não.

A abordagem do webpack na verdade oferece mais simplicidade para o que ele se propõe a fazer do que complexidade, e por isso, **entender os conceitos do webpack é primordial para um bom uso da ferramenta**.

### Interoperável

A interoperabilidade do webpack com bibliotecas e frameworks como Polymer, Angular, React, Vue entre outras é espetacular, como também com os diversos padrões que todo dia tem entrado no JavaScript, mas que obviamente, você quer utilizar desde já.

Além disso, também vale lembrar que quando o assunto são as famosas pseudo-linguagens como: SCSS, TypeScript, Flow entre outras, ferramentas como webpack são bastante úteis.

### Performance

E para fechar o drop, mesmo não parecendo um recurso, pois está implícito no webpack desde o primeiro uso, **o time de desenvolvimento do webpack não trata a performance dele como um resultado, mas sim como uma feature**, pois além do que ele entrega naturalmente, ele ainda assim é permissivo caso você queira elevar o nível de eficiência e eficácia do sistema bundling.

## The End

Mas é isso pessoal! Espero mesmo que tenham gostado e que eu tenha esclarecido bem os principais conceitos, benefícios e funcionalidades do webpack.

E se você curtiu e/ou tem mais algo para contribuir com o tema abordado, deixe seu comentário, pois é sempre bom receber feedbacks para melhorar os futuros drops.

### Referências:

- [webpack.js.org](https://webpack.js.org/)
- [Webpack by survivejs](https://survivejs.com/webpack/)
- [Advanced Webpack by survivejs](https://presentations.survivejs.com/advanced-webpack/#/?_k=1y6aom)
- [@github/rstacruz/webpack-tricks](https://github.com/rstacruz/webpack-tricks)
- [Migrating to Webpack 2: some tips and gotchas](https://swizec.com/blog/using-webpack-2-production/swizec/7356)
- [Migrating to Webpack 2](https://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/)
- [The Fine Art of the Webpack 2 Config](https://blog.flennik.com/the-fine-art-of-the-webpack-2-config-dc4d19d7f172?gi=5622712edbd2)
- [Webpack Concepts](https://webpack.js.org/concepts/#components/sidebar/sidebar.jsx)
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

▲