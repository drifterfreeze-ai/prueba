


function boton(){

let bo = document.querySelector("#bot");

bo.addEventListener("click", ob =>{


ob.preventDefault(); 


let forms = document.querySelector("#clos form");


ob = document.querySelectorAll(".os");


let usuario = ob[0].value;
let password = ob[1].value;


if (usuario == "" && password == ""){

const mensaje = document.querySelector(".cosas");

if(mensaje) mensaje.remove();


let cosa = document.createElement("p");


cosa.classList.add("cosas");

cosa.textContent = "Llene todos los campos";

bo.before(cosa);



}else if (usuario == ""){

const mensaje = document.querySelector(".cosas");

if(mensaje) mensaje.remove();



let cosa = document.createElement("p");

cosa.classList.add("cosas");

cosa.textContent = "Llene el usuario";

bo.before(cosa);

}



else if (password ==""){

const mensaje = document.querySelector(".cosas");

if(mensaje) mensaje.remove();

let cosa = document.createElement("p");

cosa.classList.add("cosas");


cosa.textContent = "Llene la contraseña";

bo.before(cosa);



}else{ 

const mensaje = document.querySelector(".cosas");
if(mensaje) mensaje.remove();

alert("Ingreso correctamente");





}



});


}


boton();




( ()=>{



let fondos = ["fondo.jpg","fondo2.jpg","fond3.jpg","fond4.jpg","fond5.jpg"];

let posion  = 0;



function mostrar(){


let bac = document.querySelector("body");



 bac.style.backgroundImage = `url('${fondos[posion]}')`;


posion++;




if(posion >= fondos.length){

posion  = 0;

}

}

mostrar(); 

setInterval(mostrar,3000);



})();