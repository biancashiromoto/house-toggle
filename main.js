document.querySelector("#botao").addEventListener("click", () => {
  trocaTexto();
  console.log("Teste");
  document.body.classList.toggle("blackfyre");
})

function trocaTexto() {
  var texto = document.querySelector(".texto");
  if (texto.innerHTML === "Blackfyre") {
    texto.innerHTML = "Targaryen";
  } else {
    texto.innerHTML = "Blackfyre";
  }
}

