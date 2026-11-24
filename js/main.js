// Petites aides : temps de lecture estimé et barre de progression. Rien n'est stocké ni envoyé.
(function () {
  var article = document.querySelector("article[data-article]");
  if (article) {
    var words = article.innerText.trim().split(/\s+/).length;
    var minutes = Math.max(1, Math.round(words / 230));
    var el = document.getElementById("reading-time");
    if (el) el.textContent = minutes + " min de lecture";
  }
  var bar = document.querySelector(".progress");
  if (bar && article) {
    var onScroll = function () {
      var top = article.offsetTop, h = article.offsetHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY - top) / h : 0;
      bar.style.width = Math.min(100, Math.max(0, p * 100)) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
