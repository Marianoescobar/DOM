

const contenedor =document.getElementById("container");
let titulo = "";
let imagen= "";
let descripcion = "";


const  btn = document.querySelector("button");

btn.addEventListener("click", (e)=>{ 

   
    titulo = document.getElementById("titulo").Value;
    imagen= document.getElementById("foto").Value;
    descripcion = document.getElementById("parrafo").Value;
 


  let card = document.createElement("div")
    card= innerHTML=`
    <h2>${titulo } </h2>
    <img src=${imagen } alt=${titulo}>
    <p> ${descripcion}}</p>`;
    contenedor.appendChild(card);

});

