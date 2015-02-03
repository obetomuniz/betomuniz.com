function setHighlight() {
  var code = document.querySelectorAll("pre code");
  if(code.length > 0)
    for (i = 0; i < code.length; i++)
        hljs.highlightBlock(code[i]);
}
