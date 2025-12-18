console.log("04-query-selector.js");
const aceituna = document.querySelector("#aceitunas");
console.log(aceituna);

console.log("=====================================");

const aceitunas2 = document.querySelectorAll(".topping");
console.log(aceitunas2);

console.log("=====================================");
const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja.innerText);

console.log("=====================================");
const primerToppingMarron = document.querySelector("ul li:not(.fondo-naranja)");
console.log(primerToppingMarron);