import hljs from 'highlightjs';

export default function() {
  const code = document.querySelectorAll('pre code');
  if (code.length > 0) for (let i = 0; i < code.length; i++) hljs.highlightBlock(code[i]);
}
