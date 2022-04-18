
const $template = document.getElementById("datosDinamicos").content,
$datos = document.querySelector(".datos"),
$fragment = document.createDocumentFragment();






var url = 'https://api-parcial.crangarita.repl.co/notas';


fetch(url, {
method: 'GET', 

headers:{
'Content-Type': 'application/json'
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response =>{

response.forEach(el=> {

    $template.querySelector(".asignatura").textContent = el.asignatura;
    $template.querySelector(".cre").textContent = el.creditos;
    $template.querySelector(".p1").textContent = el.n1;
    $template.querySelector(".p2").textContent = el.n2;
    $template.querySelector(".p3").textContent = el.n3;
    $template.querySelector(".ef").textContent = el.ex;
    
var defi = (((el.n1 + el.n2 + el.n3)/3)*0.7)+(el.ex*0.3);
$template.querySelector(".def").textContent = defi;

    let $clon = document.importNode($template, true);
    $fragment.appendChild($clon);
    
});

$datos.querySelector("tbody").appendChild($fragment);

}
);


