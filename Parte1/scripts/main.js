'use stric';

const img = document.getElementById('img');

img.onclick=()=>{
    if (img.classList.contains('bordeOculto')) {
        img.classList.remove('bordeOculto');
        img.classList.add('bordeVisible');
    } else if(img.classList.contains('bordeVisible')){
        img.classList.remove('bordeVisible');
        img.classList.add('bordeOculto');
    }
}