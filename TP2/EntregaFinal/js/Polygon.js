import { Vertice } from "./Vertice.js";
import { Line } from "./Line.js";

export class Polygon{

    constructor(){
        this.vertices = [];
        this.centro = null;
    }


    calcularCentro(){
        let sumaX = 0;
        let sumaY = 0;
        for (let i = 0; i < this.vertices.length; i++) {
            sumaX += this.vertices[i].x;
            sumaY += this.vertices[i].y;  
        }
        let promedioX = sumaX/this.vertices.length;
        let promedioY = sumaY/this.vertices.length;
    
        return new Vertice(promedioX, promedioY);;
    }


    
    draw(ctx, colorLinea = "yellow"){
        if (this.vertices.length === 1) {
            this.vertices[0].draw(ctx);
            this.primerVertice = true;
            
        } else {
            for (let i = 0; i < this.vertices.length-1; i++) {
                this.vertices[i].draw(ctx);
                this.vertices[i+1].draw(ctx);
                let line = new Line(this.vertices[i].x, this.vertices[i].y, this.vertices[i+1].x, this.vertices[i+1].y, colorLinea);
                line.draw(ctx);
            }
            if (this.centro != null) {
                let line = new Line(this.vertices[0].x, this.vertices[0].y, this.vertices[this.vertices.length-1].x, this.vertices[this.vertices.length-1].y, colorLinea);
                line.draw(ctx);
                this.centro.draw(ctx, 0, 255, 0, 7);
            }
        }
    }

    
    agregarVertice(vertice){
        this.vertices.push(vertice);
    }


    cerrarPoligono(ctx){
        if (this.vertices.length >= 3) {
            this.centro = this.calcularCentro();
            this.draw(ctx);
           
        }else{
            this.centro = this.calcularCentro();
        }
    }

    mover(x, y){
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x += x - this.centro.x;
            this.vertices[i].y += y - this.centro.y;
        }
        this.centro.x = x;
        this.centro.y = y;
    }

    borrarVertice(vertice){
        let verticeBorrar = this.vertices.indexOf(vertice);
        this.vertices.splice(verticeBorrar, 1);
    }
}