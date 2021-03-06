import styled, { createGlobalStyle } from 'styled-components';

export const NormalizedStyles = createGlobalStyle`
  html{background-color: var(--WHITE);}
  *,:after,:before{box-sizing:inherit}html{box-sizing:border-box}
  *::-moz-selection {color: var(--WHITE);background: var(--ELETRIC_VIOLET);}
  *::selection {color: var(--WHITE);background: var(--ELETRIC_VIOLET);}
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
  body{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: var(--WHITE);
    font-family: var(--FONT_FAMILY_SANS);
  }
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .sro {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0px, 0px, 0px, 0px);
    border: 0px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 4%;
  }
`;
