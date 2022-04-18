
document.getElementById('ingresar').onclick = function(){
  
    event.preventDefault();
     
 
 
     var codigo = document.getElementById("codigo").value;
     var contras = document.getElementById('contraU').value;
     
 
 
     var url = '';
     var data = {contra: contras, usuario: nombreUsuario};
     
     fetch(url, {
       method: 'POST', // or 'PUT'
       body: JSON.stringify(data), // data can be `string` or {object}!
       headers:{
         'Content-Type': 'application/json'
       }
     }).then(res => res.json())
     .catch(error => console.error('Error:', error))
     .then(response => {
       console.log('Success:', response);
 
       
  
       //window.location.href="../html/dashboard.html";
     }
 );
 
   
 
 
 
 }