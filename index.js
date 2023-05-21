

const contenedor =document.getElementById("container")

const titulo = document.getElementById("titulo").value;
const imagen= document.getElementById("foto").value;
const descripcion =document.getElementById("parrafo").value;

const  boton= document.getElementById("btn");

boton.addEventListener("click",handleClick);
function handleClick(){

const card = document.createElement("div");
card= innerHTML= `
<h2>${titulo }</h2>
<img src=${imagen } alt=${titulo}>
`
contenedor.appendChild(card)};
