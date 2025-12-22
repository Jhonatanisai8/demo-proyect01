console.log("=ELIMINAR CLASE DEL DOM CON JS=");
const primerTopping = document.querySelector(".topping");
console.log(primerTopping);

const clasesPrimerTopping = primerTopping.classList;
console.log("Clases antes de eliminar: ", clasesPrimerTopping);

//eliminamos clases
primerTopping.classList.remove("fondo-marron");
console.log("Clases despues de eliminar: ", clasesPrimerTopping);
