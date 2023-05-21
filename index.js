

const contenedor =document.getElementById("container")

const titulo = document.getElementById("titulo").value;
const imagen= document.getElementById("foto").value;
const descripcion =document.getElementById("parrafo").value;

const  btn= document.querySelector("button");

btn.addEventListener("click",handleClick);
function handleClick() { 
    
    let card = document.createElement("div");
    card= innerHTML=`
    <h2>${titulo } </h2>
    <img src=${imagen } alt=${titulo}>
    <p> ${descripcion}</p>`}
contenedor.appendChild(card);
console.log(card);
