console.log("RECORRER EL DOM");
const listaToppings = document.getElementById("lista-toppings");
console.log(listaToppings);

const padreListaToppings = listaToppings.parentElement;
console.log("Padre de la lista de toppings: ", padreListaToppings);

const padrePadreListaToppings = padreListaToppings.parentElement;
console.log(
  "Padre del padre de la lista de toppings: ",
  padrePadreListaToppings
);

//HIJOS DE LOS ELEMENTOS
const hijosDeListaToppings = listaToppings.children;
console.log("Hijos de la lista de toppings: ", hijosDeListaToppings);

const primerHijoDeListaToppings = listaToppings.children[0];
console.log("Primer hijo de la lista de toppings: ", primerHijoDeListaToppings);

//para elementos html
const elementos = listaToppings.firstElementChild;
console.log("Primer elemento hijo: ", elementos);

//HERMANOS DE LOS ELEMENTOS
const hermanoListaToppings = listaToppings.previousElementSibling;
console.log("Hermano de la lista de toppings: ", hermanoListaToppings);
