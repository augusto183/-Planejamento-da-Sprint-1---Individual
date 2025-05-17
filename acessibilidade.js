function alterarFonte(delta) {
  const body = document.body;
  const atual = parseInt(window.getComputedStyle(body).fontSize);
  body.style.fontSize = (atual + delta) + "px";
}

function alternarContraste() {
  document.body.classList.toggle("alto-contraste");
}