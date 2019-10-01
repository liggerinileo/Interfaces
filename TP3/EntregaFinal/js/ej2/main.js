"use strict";


document.addEventListener('DOMContentLoaded', () => {
    let link = document.getElementById('link');

    link.onclick = (e) => {
        let numRandom = random();
        if (numRandom === 0) {
            link.classList.remove(link.classList.value);
            link.classList.add('rotate');
        }else if(numRandom === 1){
            link.classList.remove(link.classList.value);
            link.classList.add('translate');
        }else if(numRandom === 2){
            link.classList.remove(link.classList.value);
            link.classList.add('scale');
        }else{
            link.classList.remove(link.classList.value);
            link.classList.add('skew');
        }
    }
});

function random() {
    return Math.floor(Math.random() * 4);
}