
const div = document.createElement("div");
const h1 = document.createElement("h1");
const textnode = document.createTextNode("Olá, Mundo!");
div.appendChild(h1);
h1.appendChild(textnode);
document.getElementById('container').appendChild(div);

console.log('Olá!')
