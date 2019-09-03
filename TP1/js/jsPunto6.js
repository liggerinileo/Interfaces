document.addEventListener("DOMContentLoaded", function() {

  let ctx = document.getElementById("canvas6").getContext("2d");
  

  let btn_load = document.getElementById("loadPicture-js");
  btn_load.onchange = loadPicture;
  

  let imageData;


  //For loading pictures
  function loadPicture(event) {

    let image = new Image();
    let file = event.target.files[0];//Obtengo los datos de la img
    let reader = new FileReader();//Creo un reader

    reader.onload = function(event) {
      image.src = event.target.result;
      
    }

    reader.readAsDataURL(file);//Cuando el reader pueda bajar la img, leo la img
    image.crossOrigin = "anonymous";
    image.onload = function() {

      
      let canvas = document.getElementById("canvas6");
      let w1= image.width;//image
      let h1= image.height;
      let w2= canvas.width;//actual canvas
      let h2= canvas.height;
      //Aspect ratio image
      let a= w1/h1;//Formula Aspect Ratio

      if(w1>h1){
        //modify canvas width and height, with image values of width and height
        canvas.setAttribute("width", w2);
        canvas.setAttribute("height", w2/a);
	       ctx.drawImage(image, 0, 0, w2, w2/a);
      }
       else{
         canvas.setAttribute("width", h2*a);
         canvas.setAttribute("height", h2);
	        ctx.drawImage(image, 0, 0, h2*a, h2);
      }
      imageData= ctx.getImageData(0, 0, this.width, this.height);
      //Restoring original image
      $('#restore').click(function (event) {
        event.preventDefault();
        ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
        
      })
    }
  }

  //Clear canvas
  $('#clear').click(function (event) {
    event.preventDefault();
    let canvas= document.getElementById('canvas6');
    canvas.setAttribute('width', 800);
    canvas.setAttribute('height', 200);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  })  

  
  function getRed(imageData, x, y) {
    index = (x + y * imageData.width) * 4;
    return imageData.data[index + 0];
  }

  function getGreen(imageData, x, y) {
    index = (x + y * imageData.width) * 4;
    return imageData.data[index + 1];
  }

  function getBlue(imageData, x, y) {
    index = (x + y * imageData.width) * 4;
    return imageData.data[index + 2];
  }

  function setpixel(imageData, x, y, r, g, b, a) {
    i = (x + y * imageData.width) * 4;
    imageData.data[i] = r;
    imageData.data[i + 1] = g;
    imageData.data[i + 2] = b;
    imageData.data[i + 3] = a;
}
  
  function filtroGrises(img) {

    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {

            let red = getRed(img, x, y);
            let green = getGreen(img, x, y);
            let blue = getBlue(img, x, y);
            let gris = (red + green + blue) / 3;
            
            setpixel(img, x, y, gris, gris, gris, 255);
        }

    }
  }

  document.querySelector("#greyScale").addEventListener("click", function () {
    event.preventDefault();
    canvas = document.getElementById("canvas6");
    ctx = canvas.getContext("2d");
    imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    filtroGrises(imagedata);
  
    ctx.putImageData(imagedata, 0, 0);
  });

  $('#original').click(function (event) {
    event.preventDefault();
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
  })

  

})






/*

image1.crossOrigin = "anonymous";

image1.onload = function(){
  drawMyImage(this);

}

function drawMyImage(image){
  ctx.drawImage(image, 0, 0);//Dibujo la imagen en canvas
  imageData = ctx.getImageData(0, 0, image.width, image.height);//Obtenerla del canvas
  let a = 255;

  for (let x = 0; x < image.width; x++) {
    for (let y = 0; y < image.height; y++) {
      let index = (x+y*(imageData.width))*4;
      let r = getRed(imageData, index);
      let g = getGreen(imageData, index);
      let b = getBlue(imageData, index);
      setNegativeFilter(imageData, index, r, g, b, a);
      setGrayScaleFilter(imageData, index, r, g, b, a);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function getRed(imageData, index){
  return imageData.data[index+0];
}

function getGreen(imageData, index){
  return imageData.data[index+1];
}

function getBlue(imageData, index){
  return imageData.data[index+2];
}

function setNegativeFilter(imageData, index, r, g, b, a) {
        imageData.data[index+0]=255-r;
        imageData.data[index+1]=255-g;
        imageData.data[index+2]=255-b;
        imageData.data[index+3]=a;
    }

    function setGrayScaleFilter(imageData, index, r, g, b, a) {
        let result= (r+g+b)/3;
        imageData.data[index+0]=result;
        imageData.data[index+1]=result;
        imageData.data[index+2]=result;
        imageData.data[index+3]=a;
    }*/
