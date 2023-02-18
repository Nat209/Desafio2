'use strict';



const btn = document.getElementById('btn');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    verificar();
    
})

const verificar=()=>{
    const cantidad1 = parseInt(document.getElementById('insticker1').value);
    const cantidad2 = parseInt(document.getElementById('insticker2').value);
    const cantidad3 = parseInt(document.getElementById('insticker3').value);
    let suma = cantidad1 + cantidad2 + cantidad3;

    console.log(suma);
    if (suma <=10) {
        document.getElementById('mensaje').innerHTML= `<p>Cantidad a comprar: ${suma}</p>`
    } else if (suma >10){
        document.getElementById('mensaje').innerHTML= `<p>Limite alcanzado !Maximo 10 stickers¡</p>`
    }

}
