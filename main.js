const btn = document.querySelector('#botao');
const text = document.getElementsByTagName('h1')[0];
const container = document.getElementsByClassName('container')[0];

const activateBlackfyre = () => {
  container.classList.add('blackfyre');
  text.innerHTML = 'Blackfyre';
};

const activateTargaryen = () => {
  container.classList.remove('blackfyre');
  text.innerHTML = 'Targaryen';
}

btn.addEventListener('mouseover', () => {
  activateBlackfyre();
});

btn.addEventListener('mouseout', () => {
  activateTargaryen();

})

// document.querySelector("#botao").addEventListener("click", () => {
//   trocaTexto();
//   console.log("Teste");
//   document.body.classList.toggle("blackfyre");
// })

// function trocaTexto() {
//   var texto = document.querySelector(".texto");
//   if (texto.innerHTML === "Blackfyre") {
//     texto.innerHTML = "Targaryen";
//   } else {
//     texto.innerHTML = "Blackfyre";
//   }
// }

