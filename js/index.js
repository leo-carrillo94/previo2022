if(localStorage.getItem("codigo")!=null) {
  window.location.href="html/notas.html";
}


document.getElementById('ingresar').onclick = function(){
  
    event.preventDefault();
     
 
 
     var codigo = document.getElementById("codigo").value;
     var contras = document.getElementById('contraU').value;
     
 
 
     var url = 'https://api-parcial.crangarita.repl.co/login';
     var data = {codigo: codigo, clave: contras};
     
     fetch(url, {
       method: 'POST', // or 'PUT'
       body: JSON.stringify(data), // data can be `string` or {object}!
       headers:{
         'Content-Type': 'application/json'
       }
     }).then(res => res.json())
     .catch(error => {
         console.error('Error:', error);
         alert(`Credenciales No validas`);
 
         
     })
     .then(response => {

      if (!response.login) {
        alert(`Credenciales No validas`);
        document.getElementById("codigo").value = "";
        document.getElementById("contraU").value = "";
        
      }else{
      
       localStorage.setItem("nombre", response.nombre);
       localStorage.setItem("codigo", response.codigo);
       window.location.href="html/notas.html";
       
     }
    }
 );
 
   
 
 
 
 }