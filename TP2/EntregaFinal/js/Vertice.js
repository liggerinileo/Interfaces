export class Vertice{
    
    constructor(x, y){
        this.x = x;
        this.y = y;
        
    }

    
    draw(ctx, r = 255, g = 0, b = 0, radio = 10){	
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        
    }
    
    

    detectClick(x, y){
        let distancia = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
        if(distancia < 10){
            return true;
            console.log(true);
        }else{
            return false;
            console.log(false);
        }
    }
    
}