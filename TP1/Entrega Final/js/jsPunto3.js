"use strict";

ctx = document.getElementById("canvas3").getContext("2d");
		let width=500;
		let height=200;
		let imageData= ctx.createImageData(width,height);
		

		for (let x=0; x<width; x++){
			for (let y=0; y<height; y++){
				setPixel(imageData, x, y, Math.random()*255,Math.random()*255,Math.random()*255, 255)
			}
        }
        
        ctx.font = "bold 35px 'abel', serif";
        ctx.fillText("Punto 3",485,50);
        ctx.putImageData(imageData, 300, 200);

		function setPixel(imageData, x, y, r, g, b, a){
			let index= (x+y*imageData.width)*4;
			imageData.data[index+0]=r;
			imageData.data[index+1]=g;
			imageData.data[index+2]=b;
			imageData.data[index+3]=a;
		}
