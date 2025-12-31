const albaca = document.getElementById("albaca");

function mostrarClic(e) {
  console.log(e.target.innerText);
}

albaca.addEventListener("click", mostrarClic);
