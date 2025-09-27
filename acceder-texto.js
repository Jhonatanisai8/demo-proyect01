console.log("=Clase Asignar texto en JS=");
const listaDeToppings = document.getElementById("lista-toppings");
console.log(listaDeToppings);

// modificar texto
let textoDentroLista = listaDeToppings.innerText;
let textoDentroLista2 = listaDeToppings.textContent;
let htmlDentro = listaDeToppings.innerHTML;

console.log("Texto que hay dentro de la lista");
console.log(textoDentroLista);

console.log("================================");
console.log(textoDentroLista2);

console.log("================================");
console.log(htmlDentro);
