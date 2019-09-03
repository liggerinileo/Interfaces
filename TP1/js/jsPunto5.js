"use strict";

ctx = document.getElementById("canvas5").getContext("2d");
	width=1074;
	height=500;
	imageData= ctx.createImageData(width,height);
	r=0;
	g=0;
	b=0;

    let mid=width/2;

    for(let x=0; x<=mid; x++){
      for(let y=0; y<=height; y++){
        r=(x/mid)*255;
        g=(x/mid)*255;
        setPixel(imageData, x, y, r, g, b, 255);
      }
    }

    for(let x=mid; x<=width; x++){
      for(let y=0; y<=height; y++){
       g=(1 - ((x - mid) / mid)) * 255;
        setPixel(imageData, x, y, 255, g, b, 255);
      }
    }

    ctx.font = "bold 35px 'abel', serif";
    ctx.fillText("Punto 5",485,50);
    ctx.putImageData(imageData, 0, 100);

	function setPixel(imageData, x, y, r, g, b, a){
		let index= (x+y*imageData.width)*4;
		imageData.data[index+0]=r;
		imageData.data[index+1]=g;
		imageData.data[index+2]=b;
		imageData.data[index+3]=a;
	}