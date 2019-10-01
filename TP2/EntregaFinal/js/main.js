"use strict";
import {Vertice} from "./Vertice.js";
import {Polygon} from "./Polygon.js";


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let dibujar = document.getElementById("dibujar");


let primerVertice = false;
let poligonos = [];
let poligono;
let poligonoActual = null;
let verticeActual = null;
let letraC = false;
//rgb vertices
let verticeRed = 255;
let verticeGreen = 0;
let verticeBlue = 0;
//rgb centro
let centroRed = 0;
let centroGreen = 255;
let centroBlue = 0;




addEventListener("DOMContentLoaded", () => {
    canvas.onclick = e => {
        if (dibujar.checked) {
            if (!primerVertice) {
                poligono = new Polygon();
                let vertice = new Vertice(e.layerX, e.layerY);
                poligono.agregarVertice(vertice);
                poligono.draw(ctx);
                primerVertice = true;
            }else{ 
                let vertice = new Vertice(e.layerX, e.layerY);
                poligono.agregarVertice(vertice);
                poligono.draw(ctx);
            }  
        }
    }
    
            
    canvas.onmousedown = e => {
        for (let i = 0; i < poligonos.length; i++) {
            if (poligonos[i].centro.detectClick(e.layerX, e.layerY)) {
                poligonoActual = poligonos[i];
                break;
            }        
        }
        for (let i = 0; i < poligonos.length; i++) {
            for (let j = 0; j < poligonos[i].vertices.length; j++) {
                if (poligonos[i].vertices[j].detectClick(e.layerX, e.layerY)) {
                    verticeActual = poligonos[i].vertices[j];
                    break;
                }
            }
        }
        
    }

    canvas.onmousemove = e => {
        if (poligonoActual != null) {
            poligonoActual.mover(e.layerX, e.layerY);
            actualizar();
        }
        else if(verticeActual != null) {
            verticeActual.x = e.layerX;
            verticeActual.y = e.layerY;
            actualizar();
        }
    }


    canvas.onmouseup = e => {
        poligonoActual = null;
        verticeActual = null;
        
    }

    canvas.ondblclick = e => {
        for (let i = 0; i < poligonos.length; i++) {
            for (let j = 0; j < poligonos[i].vertices.length; j++) {
                if (poligonos[i].vertices[j].detectClick(e.layerX, e.layerY)) {
                    
                        poligonos[i].borrarVertice(poligonos[i].vertices[j]);
                        actualizar();
                        break;
                        /*if (poligonos[i].vertices[j] === 1) {    
                            this.poligonos.splice(i, 1);
                    
                            console.log(poligonos.length);
                        }*/
                    
                }
            }
        }actualizar();
    }

    
   

    
        
});


let btnUnir = document.getElementById("btn-unir");//Creo el poligono
btnUnir.addEventListener("click", () => {
    poligono.cerrarPoligono(ctx);
    poligonos.push(poligono);
    primerVertice = false;
        
            
});

function actualizar() {
    ctx.fillStyle = "rgb(49, 70, 117)";
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    for (let i = 0; i < poligonos.length; i++) {
        poligonos[i].draw(ctx);
        poligonos[i].cerrarPoligono(ctx);
    }                    
}   


window.onkeypress  = e => {
    if (e.code === "KeyC") {
        letraC = true;
        canvas.onwheel = e => {
            if (letraC) {
                if (e.deltaY > 0) {
                    verticeRed = 255;
                    centroGreen = 255;
                    for (let i = 0; i < poligonos.length; i++) {
                        poligonos[i].draw(ctx, "khaki");
                        for (let j = 0; j < poligonos[i].vertices.length; j++) {
                            poligonos[i].vertices[j].draw(ctx, verticeRed, verticeGreen++, verticeBlue++);
                            poligonos[i].centro.draw(ctx, centroRed++, centroGreen, centroBlue++, 7);
                                    
                                    
                        }
                    }
                }else if (e.deltaY < 0) {
                    verticeGreen = 0;
                    verticeBlue = 0;
                    centroRed = 0;
                    centroBlue = 0;
                    for (let i = 0; i < poligonos.length; i++) {
                        poligonos[i].draw(ctx, "olive");
                        for (let j = 0; j < poligonos[i].vertices.length; j++) {
                            poligonos[i].vertices[j].draw(ctx, verticeRed--, verticeGreen, verticeBlue);
                            poligonos[i].centro.draw(ctx, centroRed, centroGreen--, centroBlue, 7);
                                    
                        }
                    }
                }
            }
        }
    }
}

    
window.onkeyup = e => {
     
        actualizar();
        letraC = false;
    
}