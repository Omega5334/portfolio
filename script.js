// Light and dark theme toggle. Remembers your choice in this browser.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    if (!current) {
      current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
