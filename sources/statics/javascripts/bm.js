document.addEventListener('DOMContentLoaded', function(){
  setHighlight();
});


function setHighlight(){
  var code = document.querySelectorAll("pre code");
  for(i = 0; i < code.length; i++){ hljs.highlightBlock(code[i]); }
}
