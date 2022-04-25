
const $template = document.getElementById("datosDinamicos").content,
$datos = document.querySelector(".datos"),
$fragment = document.createDocumentFragment();

var codigo = localStorage.getItem("codigo");
var nombre = localStorage.getItem("nombre");

document.getElementById("codigo").innerHTML = `Codigo: ${codigo}`;
document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`;





var url = `https://api-parcial.crangarita.repl.co/students/${codigo}/notas`;


fetch(url, {
method: 'GET', 

headers:{
'Content-Type': 'application/json'
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response =>{

console.log(`este es la respuesta...${response}`);
response.forEach(el=> {


    let p1= parseInt(el.n1,10);
    let p2= parseInt(el.n2,10);
    let p3= parseInt(el.n3,10);
    let ef= parseInt(el.ex,10);

    $template.querySelector(".asignatura").textContent = el.asignatura;
    $template.querySelector(".cre").textContent = el.creditos;
    $template.querySelector(".p1").textContent = el.n1;
    $template.querySelector(".p2").textContent = el.n2;
    $template.querySelector(".p3").textContent = el.n3;
    $template.querySelector(".ef").textContent = el.ex;
    
var defi = (((p1 + p2 + p3)/3)*0.7)+(ef*0.3);
$template.querySelector(".def").textContent = defi;

    let $clon = document.importNode($template, true);
    $fragment.appendChild($clon);
    
});

$datos.querySelector("tbody").appendChild($fragment);

document.getElementById

}
);

document.getElementById("salir").onclick = function(){
    localStorage.removeItem("codigo");
    localStorage.removeItem("nombre");
    window.location.href="../index.html";
}


