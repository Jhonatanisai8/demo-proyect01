// SELECTOR QUERE SELECTOR
/*
permite seleccionar el primer elemento que cumple dicho elemento 
 */
const primerElementoAceituna = document.querySelector("#aceitunas");
console.log(primerElementoAceituna);

const primerElementoToppings = document.querySelector(
  ".toppings.fondo-naranja"
);
console.log(primerElementoToppings);

const toppingsFondoNaranja = document.querySelectorAll(
  ".toppings.fondo-naranja"
);
console.log(`Cantidad de elementos: ${toppingsFondoNaranja.length}`);

console.log(toppingsFondoNaranja);
