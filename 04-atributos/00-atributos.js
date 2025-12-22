console.log("ATRIBUTOS EN DOM JS");

const enlaces = document.getElementsByTagName("a");
console.log(enlaces[0]);
console.log("====================================");
console.log("Atributo href: ", enlaces[0].getAttribute("href"));
//eliminamos el atributo href
enlaces[0].removeAttribute("href");
console.log("Atributo href eliminado: ", enlaces[0].getAttribute("href"));

//agregamos un nuevo atributo href
enlaces[0].setAttribute("href", "https://www.google.com");
console.log("Atributo href agregado: ", enlaces[0].getAttribute("href"));