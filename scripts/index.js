const codeSelector = document.getElementById("codeSelector");

codeSelector.addEventListener("change", (e) => {
  const script = e.target.value;
  window.location.search = (script) ? `?script=${encodeURIComponent(script)}` : "";
});

const scriptParam = new URLSearchParams(window.location.search).get("script");

if (scriptParam) {
  const script = document.createElement("script");
  script.src = scriptParam;
  document.head.appendChild(script);
  codeSelector.value = scriptParam;
}