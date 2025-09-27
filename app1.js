console.log("METODO PARA CLASES");

const toppings = document.getElementsByClassName("toppings");
console.log(toppings);

// para saber cuantos elementos hay con dicha clase
console.log(`Total de elementos: ${toppings.length}`);

//acceder a los elemtos individualmente
console.log(toppings[0]);
console.log(`ID: ${toppings[0].id}`);
