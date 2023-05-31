


const contenedor= document.getElementById("container");
let titulo="";
let imagen= "";
let descripcion= "";
 

function crearTarjeta (){ 
  titulo = document.getElementById("titulo").value;
 imagen= document.getElementById("foto").value;
let descripcion = document.getElementById("parrafo").value;



  

  let card = document.createElement("div")
    card.innerHTML=`
    <h2>${titulo } </h2>
    <img src=${imagen } alt=${titulo}>
    <p> ${descripcion}</p>`;
    contenedor.appendChild(card);

};

