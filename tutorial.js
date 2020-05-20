var nodeReadyCssHook = "                               \
";

var styleElement = document.createElement('style');
document.innerHTML = nodeReadyCssHook;
document.getElementsByTagName("head")[0].appendChild(styleElement);

document.addEventListener("animationstart", e => {
  if (e.animationName == "node-ready") {
    var code = e.target.innerHTML.replace(/^\n/, "");
    e.target.innerHTML = code;
    var firstNonEmptyLine = e.target.textContent.split('\n').filter(l => l.trim().length > 0)[0];
    var leadingWhiteSpace = firstNonEmptyLine.match(/^([ ]*)/);
    if(leadingWhiteSpace && leadingWhiteSpace[0]) {
      var whiteSpace = leadingWhiteSpace[0];
      code = code.split('\n').map(l => l.replace(new RegExp('^' + whiteSpace + ''), '')).join('\n');
    }

    e.target.innerHTML = code;
    hljs.highlightBlock(e.target);
    e.target.classList.add("fade-in");
  }
});

if (document.location.toString().match(/autorefresh=1/)) {
  var clickOccured = false;

  function reloadOrDebounce() {
    if   (clickOccured) { /* do nothing */ }
    else { location.reload(true); }
  }

  document.addEventListener("click", () => { clickOccured = true; });
  document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(reloadOrDebounce, 5000);
    setTimeout(() => document.body.scrollTop = document.body.scrollHeight,
               1);
  });
}
