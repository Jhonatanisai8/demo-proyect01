console.log("=CREACION DE ELEMENTOS EN EL DOM=");
const listaToppings = document.getElementById("lista-toppings");
const toppingNuevo = document.createElement("li");

//AGREGAMOS CONTENIDO AL ELEMENTO
listaToppings.append(toppingNuevo);

//le agregamos clases al nuevo elemento
toppingNuevo.classList.add("topping");
toppingNuevo.classList.add("fondo-marron");

//le agregamos texto al nuevo elemento
toppingNuevo.innerText = "Topping de chocolate";
toppingNuevo.style.color = "red";

//removemos el topping recien creado
const quitarTooping = document.querySelector(".fondo-naranja");
console.log(quitarTooping);
quitarTooping.remove();
console.log("===================================");