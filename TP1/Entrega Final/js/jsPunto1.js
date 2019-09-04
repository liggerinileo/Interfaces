"use strict";

let matriz = [];
let w = 5;
let h = 5;
for (let i = 0; i < w; i++) {
  matriz[i] = [];
  for (let j = 0; j < h; j++) {
    matriz[i].push(Math.floor(Math.random()*100)+1);
  }
}

console.table(matriz);
maximo();
maxYmin();
promedioFilas();

function maximo(){
  let valorMayor = 0;
  let maximo = document.getElementById("maximo");
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (matriz[i][j]>valorMayor) {
        valorMayor = matriz[i][j];
      }
    }
  }
  maximo.innerHTML = "Maximo: "+valorMayor;
  
}

function maxYmin(){
  let valorMayor = 0;
  let valorMenor = 1000;
  let filasPares = document.getElementById("maximoFilasPares");
  let filasImpares = document.getElementById("minimoFilasImpares");
  for (let i = 0; i < w; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < h; j++) {
        if (matriz[i][j]>valorMayor) {
          valorMayor = matriz[i][j];
        }
      }
    }else {
      for (let t = 0; t < h; t++) {
        if (matriz[i][t]<valorMenor) {
          valorMenor = matriz[i][t];
        }
      }
    }
  }
  filasPares.innerHTML = "Maximo Filas Pares: "+valorMayor;
  filasImpares.innerHTML = "Minimo Filas Impares: "+valorMenor;
 
}

function promedioFilas(){
  let arrProm = document.getElementById("arrPromedios");
  let arr = [];

  let prom = 0;
  for (let i = 0; i < w; i++) {
    let prom = 0;
    let suma = 0;
    for (let j = 0; j < h; j++) {
      suma += matriz[i][j];
    }
    prom = suma/h;
    arr.push(prom);
  }
  arrProm.innerHTML = "Arreglo de Promedios: "+arr;
}


