console.log("01-get-element-by-id.js");
const contenedor = document.getElementById("container");
console.log(contenedor);
console.log("==========================================");
console.log(contenedor.innerHTML);

const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML);
console.log(typeof titulo);
console.log("Titulo: " + titulo.innerText);
console.log(`Elemento del titulo: ${titulo.tagName}`);
