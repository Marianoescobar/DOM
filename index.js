

const contenedor =document.getElementById("container");
let titulo = "";
let imagen= "";
let descripcion = "";


const  btn = document.getElementById("boton")
btn.addEventListener("click",crearTarjeta); 

function crearTarjeta(){ 

   
    titulo = document.getElementById("titulo").value;
    imagen= document.getElementById("foto").value;
    descripcion = document.getElementById("parrafo").value;
 


  let card = document.createElement("div")
    card.innerHTML=`
    <h2>${titulo } </h2>
    <img src=${imagen } alt=${titulo}>
    <p> ${descripcion}</p>`;
    contenedor.appendChild(card);

};

