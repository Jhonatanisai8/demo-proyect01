console.log("==AGREGAR CLASES EN EL DOM==");
const primerTopping = document.querySelector(".topping");
console.log(primerTopping);
console.log(primerTopping.innerHTML);
console.log("==================");
const clasesPrimerTopping = primerTopping.classList;
console.log("Clases antes de agregar: ", clasesPrimerTopping);

//agregamos clases
primerTopping.classList.add("nueva-clase", "segunda-clase");
console.log("Clases despues de agregar: ", primerTopping.classList);

primerTopping.classList.add("texto-verde");
