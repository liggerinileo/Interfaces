"use strict";

ctx = document.getElementById("canvas4").getContext("2d");
		width=255;
		height=255;
		imageData= ctx.createImageData(width,height);
		let r=0;
		let g=0;
		let b=0;
        let a=255;

		for (let x=0; x<width; x++){
			for (let y=0; y<height; y++){
				setPixel(imageData, x, y, r, g, b, a)
				r=y;
				g=y;
				b=y;
			}
		}

        ctx.font = "bold 35px 'abel', serif";
        ctx.fillText("Punto 4",485,50);
        ctx.putImageData(imageData, 415, 200);

		function setPixel(imageData, x, y, r, g, b, a){
			let index= (x+y*imageData.width)*4;
			imageData.data[index+0]=r;
			imageData.data[index+1]=g;
			imageData.data[index+2]=b;
			imageData.data[index+3]=a;
		}