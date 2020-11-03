---
publish_date: 2020-05-31 2:17 AM +0000
keywords:
  - web performance
  - web vitals
  - lcp
  - fid
  - cls
  - performance
  - ux
  - google
category: tech
language: pt
title: Web Vitals
subtitle: Como está a saúde da web?
description: Neste drop abordo o Web Vitals, uma nova recomendação Google para
  otimização de experiência de usuário e performance web.
featured: https://res.cloudinary.com/beto-muniz/image/upload/v1595800909/83339876-44298a80-a2a8-11ea-833d-c067d59d3f4d_pdkymj.png
draft: false
audiencecall:
informaldesc:
---

![](https://user-images.githubusercontent.com/1680157/83339876-44298a80-a2a8-11ea-833d-c067d59d3f4d.png)

Fala galera! Bora falar um pouco sobre performance web? Ou melhor, vamos falar **MAIS** sobre performance web daqui pra frente?

Pode parecer estranho essa introdução, mas a verdade é que alguns anos atrás, **performance na web** era um dos assuntos mais desenvolvidos nas _interwebs_ por _devs web_.

Talvez porque era um assunto mais acessível e simplificado, mas principalmente porque discussões eram muito necessárias naquele momento.

## HTML5

Com o advento do HTML5, as limitações na web ficavam cada vez menores, e por consequência da falta de limites, chegamos num cenário de banalização total das fases de otimização de projetos, a gente confiava que a web iria comportar qualquer coisa.

Estávamos errados.

## 1ª Era da Otimização na Web Pós-HTML5

Na mesma velocidade que o HTML5 trouxe avanços, também trouxe problemas.

- Suporte multimídia amplo, aumentando o tamanho dos arquivos embarcados e o tráfico de dados, deixando nossas páginas web lentas.
- JavaScript e CSS com mais responsabilidades e poderes, que por consequência, aumentou o volume de código envolvido e processamento do mesmo.
- Incompatibilidade com browsers antigos, o que faz com que a gente suporte código legado e moderno dentro da uma mesma aplicação web.
- Fontes customizadas mais bem suportadas e utilizadas, evidenciando mais os problemas de carregamento paralelo no browser.
- Web APIs mal otimizadas.

Enfim, estes são só alguns exemplos do custo benefício da transição do período **pré-HTML5** para o HTML5 no que diz respeito à performance.

Vamos também considerar o avanço da internet banda larga em países desenvolvidos, que ao ignorar outros países, incentivou a adoção e definição de boas práticas de desenvolvimento na web para quem entregava serviços globais.

## Renascimento das Boas Práticas de Performance Web

E foi nesse cenário inovador e caótico da adoção do HTML5 que movimentos pró-performance surgiram, como o [Browser Diet](https://browserdiet.com/), que até hoje, numa linguagem transparente e objetiva lista recomendações básicas para se obter o mínimo de performance na web.

E vale incluir nesse período a popularização de ferramentas como [GruntJS](https://gruntjs.com/), [GulpJS](https://gulpjs.com/) entre outros que ajudaram a fomentar a adoção de técnicas de otimização de performance.

Outro importante destaque naquele período, foi a atuação de empresas como **Apple** (nem parece mais a mesma ☹️), **Mozilla** e **Google** para promover mais as boas práticas de performance na web com a finalidade entregar melhores experiências aos usuários _#morteaoflash_.

## Google

E extendendo as menções do esforço da Google sobre performance na plataforma web, devido a sua natureza de prestação de serviço ser globalizada, não é de hoje que ela trás ao mercado ferramentas, tecnologias, técnicas, guias entre outras abordagens para promover performance dentro da plataforma web.

AMP, Lighthouse, Pagespeed Insights, Chrome DevTools, CrUX Dashboard são apenas algumas das iniciativas promovidas pela Google nesse sentido.

Portanto, quando ela trás algo novo sobre isso, é extremamente importante observar e considerar, pois o conhecimento adquirido em pesquisas endossadas por ela, além de beneficiar ela mesma no processo, acaba beneficiando todos nós, e isso não é diferente do **Web Vitals**.

## Web Vitals

Web Vitals é uma iniciativa da Google que busca retomar o discurso simples, objetivo e unificado sobre recomendações de boas práticas de desenvolvimento web, e num contexto que visa melhorar mais a experiência do usuário ao utilizar a web: Performance.

E para atingir esse objetivo, Web Vitals introduz **Core Web Vitals**, que são recomendações baseadas nas atual demanda de experiência de usuário dentro da web.

### Core Web Vitals

O que é importante destacar sobre este _subset_ de recomendações do Web Vitals, é sua natureza mutável, ou seja, será revisado sempre a fim de refletir as melhores recomendações para um experiência segura, performática e funcional pro usuário.

Métricas utilizadas anteriormente ou que vierem a surgir em paralelo, não deixam de ser recomendadas, o Core Web Vitals, apenas coloca o holofote nas métricas que mais refletem a experiência de usuário no mundo real.

E pra elucidar as recomendações atuais do Core Web Vitals, temos:

#### Largest Contentful Paint (LCP)

A LCP gera métricas relativas ao carregamento da página web, ou seja, para essa métrica o que importa é o que acontece entre os primeiros segundos da requisição de um site até o carregamento inicial do mesmo.

#### First Input Delay (FID)

A FID é uma métrica que observa a interatividade do usuário com a página web.

Por exemplo, quanto tempo leva para um usuário possa clickar em um link e isso reagir, ou até mesmo, quanto tempo demora até que alguma atividade assíncrona possa interagir com ele via JavaScript.

#### Cumulative Layout Shift (CLS)

E por fim, a métrica do Core Web Vitals mais empolgante para mim, a CLS, pois ela visa observar o fluxo de renderização, ou seja, quão fluído o processo de visualização de uma página web é.

Quem aí nunca entrou em um site e do nada, durante a navegação, mil e um pop-ups aparecem? A CLS irá criar dados para melhorar isso.

## Mas… Devemos adotar Web Vitals?

**Devemos**, pois cada dado refletido negativamente nas métricas do Web Vitals estão de fato impactando negativamente a experiência dos usuários, ou seja, a adoção de análises desse tipo é necessária por eles.

Isso sem contar que não adotar essas práticas poderá impactar seu site nos [resultados de buscas](https://venturebeat.com/2020/05/28/google-search-ranking-factor-web-vitals-2021/), e que [performance ruim](https://twitter.com/addyosmani/status/1263983302181969920?s=21) séra refletida negativamente na [experiência do usuário dentro do Chrome](https://techcrunch.com/2019/11/11/google-chrome-to-identify-and-label-slow-websites/).

## Conclusão

E como o drop ficou enorme, fico devendo outros sobre o assunto que eu gostaria de abordar.

Fiquem ligados, pois nestes futuros drops, irei elaborar melhor as métricas já citadas e as não citadas do Web Vitals, e claro, caminhos e exemplos para adoção.

▲