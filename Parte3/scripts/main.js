'use strict';


const btn = document.getElementById('btn');

btn.addEventListener('click',function (e) {
    e.preventDefault() 
    const digitoUno = parseInt (document.getElementById('digitoUno').value);
    const digitoDos = parseInt (document.getElementById('digitoDos').value);
    const digitoTres =parseInt ( document.getElementById('digitoTres').value); 
    
    if (digitoUno ===9 && digitoDos === 1 && digitoTres===1) {
        document.getElementById('mensaje').innerHTML= `<p>Password 1 correcto</p>`
        
    } else if (digitoUno ===7 && digitoDos === 1 && digitoTres===4){
        document.getElementById('mensaje').innerHTML= `<p>Password 2 correcto</p>`
        
    }else{
        document.getElementById('mensaje').innerHTML= `<p>Contraseña incorrecta</p>`

    }
})

