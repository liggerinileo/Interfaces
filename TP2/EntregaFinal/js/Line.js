export class Line{

    constructor(vertice1, vertice2, color){
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.color = color;
    }


    draw(ctx){	
        ctx.lineWidth = '3';
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.vertice1.x, this.vertice1.y);
        ctx.lineTo(this.vertice2.x, this.vertice2.y);
        ctx.stroke();
        ctx.closePath();
    }
}