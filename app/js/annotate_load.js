function scriptInjection(a) {
  var b = document.createElement("script");
  b.type = "text/javascript", b.src = a, b.async = !1, document.head.appendChild(b), console.log(a + " loaded...")
}

function cssInjection(a) {
  var b = document.createElement("link");
  b.type = "text/css", b.rel = "stylesheet", b.href = a, document.head.appendChild(b), console.log(src + " loaded...")
}["https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js", "https://cdn.firebase.com/js/client/2.2.6/firebase.js", "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js", "annotate.min.js"].forEach(scriptInjection), ["https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/css/materialize.min.css"].forEach(cssInjection);
