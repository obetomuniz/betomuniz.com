---
title: CORS e além
page_title: CORS e além
document_title: Beto Muniz — CORS e além
date: 2019-04-16
slug: cors-e-alem
url: /blog/cors-e-alem/
collection: blog
layout: blog/post.hbs
description:  Uma abordagem objetiva sobre CORS, CORB e CORP.
keywords: cors, corb, corp, spectre, meltdown, csrf, web-sec, security
---
Quem ai já teve problemas com CORS?

Mais fácil perguntar quem nunca teve, né? E apesar de ser irritante às vezes e nos forçar o uso da flag `--disable-web-security` para resolver coisas rápidas durante o desenvolvimento, CORS é um recurso muito poderoso.

Mas pra clarificar um pouco para quem não conhece ainda o tal do CORS...

## Cross-Origin Resource Sharing

**CORS** é o acrônimo de **Cross-Origin Resource Sharing**, que por sua vez, é uma especificação que visa criar um ambiente lógico de segurança no que diz respeito ao modo que consumimos conteúdo da web via browsers.

Mas além de CORS, existem algumas outras abordagens que adicionam camadas extras de segurança na forma em que o browser se comunica com os servidores.

E antes de seguir para estas outras abordagens...

#### Só mais um pouquinho de CORS

A proposta principal do CORS é que ao receber uma requisição do browser, o servidor responderá uma informação via *HTTP header*, e tal informação, definirá exatamente como o browser validará a origem da requisição.

Por exemplo, supondo que um servidor aceite requisições **apenas** do domínio **meusite.com**, o servidor precisará simplesmente responder suas requições com o header `Access-Control-Allow-Origin` e o valor `http://meusite.com` para habilitar o CORS no browser com essa regra.

Há também a possibilidade de informar para o browser que qualquer origem pode acessar determinados recursos ou todos os recursos de um servidor. E para isso basta utilizar o valor `*` no header `Access-Control-Allow-Origin` globalmente ou em requisições específicas.

Mas parando por aqui de falar de CORS, já que não é o único foco do post, para quem quiser saber mais, recomendo o post "[Política de Cross-Origin](https://medium.com/@anacoimbrag/pol%C3%ADtica-de-cross-origin-40b9beecdeca?source=linkShare-fe26223710c8-1555374957&_branch_match_id=583336704622738831)" da [Ana Coimbra](https://twitter.com/anacoimbrag). Tem bastante informação sobre o assunto lá.

## CORB

Seguindo no post, agora vou falar do **Cross-Origin Read Blocking**, que por definição, valida requisições do browser antes mesmo de serem requisitadas no servidor. Tudo isso utilizando o *MIME type* da requisição como regra de validação.

Por exemplo, uma requisição do tipo **style** deve fornecer o *MIME type* **text/css**, caso contrário, será bloqueada.

Para habilitar este recurso, o servidor deve enviar sempre o header `X-Content-Type-Options` com o valor `nosniff`.

Essa proposta visa ajudar na segurança contra ataques maliciosos do tipo **CSRF**, **Meltdown** e **Spectre**.

## CORP

Sobre o **Cross-Origin Resource Policy**, saiba que ele é um complemento ao CORB e só funciona para requisições definidas como `no-cors`, ou seja, requisições explicitamente sem proteção garantida de CORS.

Para habilitar esse *cross-origin checker*, o servidor deve enviar o header `Cross-Origin-Resource-Policy` com o valor `same-origin` ou `same-site`.

Com este header declarado pelo servidor, o browser irá invalidar respectivamente requisições `no-cors` de domínios com origem ou esquema de url diferente da origem da requisição.

E como a CORB, essa proposta também visa ajudar contra ataques maliciosos do tipo **Meltdown** e **Spectre**.

## Conclusão

Por mais burocrático que seja adotar estes processos durante o ínicio do desenvolvimento, o uso deles certamente ajudará a garantir algumas horas de sono tranquilo para você e seu time nas suas aplicações em produção.

Vale lembrar que estas soluções são efetivas, mas não perfeitas, pois acessos inesperados e maliciosos ao servidor também podem ser feito através de browsers antigos (inseguros) que não suportam CORS, CORB e/ou CORP e também via terminais. Sendo assim, seu servidor deve ser autossuficiente contra acessos indesejados.

E é isso pessoas, espero que tenham gostado, e se gostou, deixa um comentário.

### Referências

- [MDN Cross-Origin Resource Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_%28CORP%29)
- [https://www.chromium.org/Home/chromium-security/corb-for-developers](https://www.chromium.org/Home/chromium-security/corb-for-developers)
- [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy)
- [https://www.kaspersky.com.br/blog/35c3-spectre-meltdown-2019/11289/](https://www.kaspersky.com.br/blog/35c3-spectre-meltdown-2019/11289/)
- [https://pt.wikipedia.org/wiki/Cross-site_request_forgery](https://pt.wikipedia.org/wiki/Cross-site_request_forgery)
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

▲