console.log("=AGREGANGO ESTILOS UTILIZANDO JS=");
const primerTopping = document.querySelector(".topping");
console.log(primerTopping);
console.log("============================");
const estilos = primerTopping.style;
console.log(estilos);

// Agregando estilos
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "red";
primerTopping.style.textTransform = "uppercase";
primerTopping.style.padding = "10px";
primerTopping.style.borderRadius = "8px";