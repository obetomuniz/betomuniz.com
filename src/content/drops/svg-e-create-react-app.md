---
date: 2020-09-18 2:17 AM +0000
keywords:
  - create
  - react
  - app
  - cra
  - svg
  - svgr
category: tech
language: pt
title: SVG e Create React Appp
subtitle:
description: Neste drop explico como fazer importação de arquivos SVG em
  aplicações que utilizam Create React App.
featured: https://res.cloudinary.com/beto-muniz/image/upload/f_auto/v1600179621/Titulo_Image_Site_2_bddnzk.jpg
draft: false
audiencecall: E aí galera, beleza? Um ótimo final de semana pra vcs! Segue o drop de hoje!
informaldesc: ⚛️ E no drop de hoje falei do recurso bem bacana oferecido pelo
  Create React App para importação de SVG. Espero que gostem.
---

⚛️ Sabia que é possível importar arquivos SVG em aplicações criadas com [Create React App](https://github.com/facebook/create-react-app) como componentes React?

👇 Veja a declaração `ReactComponent` abaixo e entenda. É super simples e intuitivo.

```jsx
import { ReactComponent as Logo } from "logo.svg";

const LogoComponent = () => (
  <>
    <Logo />
  </>
);

export default LogoComponent;
```
