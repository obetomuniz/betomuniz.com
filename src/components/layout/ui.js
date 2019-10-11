import styled, { createGlobalStyle } from "styled-components"

import { TYPO, COLORS } from "../../constants"

export const GlobalStyle = createGlobalStyle`
  *,:after,:before{box-sizing:inherit}html{box-sizing:border-box}
  *{user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
  ol,ul{list-style:none}
  blockquote,q{quotes:none}
  blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}
  table{border-collapse:collapse;border-spacing:0}
  [contenteditable],input[type]{user-select:text}
  a{text-decoration:none;color:inherit}
  fieldset,input{appearance:none;border:0;padding:0;margin:0;min-width:0;font-size:1rem;font-family:inherit}
  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none}
  svg{display:inline-flex}
  img{display:block;width:100%}
  body,h1,h2,h3,h4,h5,h6,p{margin:0;font-size:1rem;font-weight:400}

  #disqus_thread a {
    color: ${COLORS.DEFAULT_LINK_COLOR_HOVER};
  }

  body{
    font-family: ${TYPO.DEFAULT_SAN_SERIF_FONTS};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    background-color: ${COLORS.DEFAULT_BACKGROUND_COLOR};

    &.center {
      display: flex;
      width: 100vw;
      height: 100vh;
      min-height: 600px;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 440px) {
    body{
      &.center {
        min-height: auto;
      }
    }
  }
`

export const Container = styled.div`
  width: 765px;
  margin: 0 auto;

  @media screen and (max-width: 440px) {
    width: 100%;
    padding: 0 10%;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }
`
