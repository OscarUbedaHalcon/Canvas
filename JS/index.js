window.onload = function () {
  var canvas = document.getElementById("Canvas");
  document.getElementById("añadir").addEventListener("click", dibujar, true);
  document.getElementById("borrar").addEventListener("click", Borrar, true);
  let colores = document.getElementById("opcionColor");
  let grossor = document.getElementById("opcionGrossor");
  let tipo = document.getElementById("opcionTipo");
  document
    .getElementById("texto")
    .addEventListener("click", escribirTexto, true);
  document
    .getElementById("negativo")
    .addEventListener("click", invertirColores);
  let colorgradiente = 1;
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
  }
  var funcion = document.getElementById("funciones");
  var control = 0;
  PlantillaCanvas();
  let x = 10;
  let y = 35;
  function dibujar() {
    context.beginPath();
    if (control === 0) {
      context.translate(150, 150);
      control = 1;
    }
    if (colores.value === "Rojo") {
      context.strokeStyle = "red";
    }
    if (colores.value === "Verde") {
      context.strokeStyle = "green";
    }
    if (grossor.value === "Grueso") {
      context.lineWidth = 4;
    }
    if (grossor.value === "Fino") {
      context.lineWidth = 1;
    }
    if (grossor.value === "Medio") {
      context.lineWidth = 2;
    }
    if (tipo.value === "Radial") {
      context.lineJoin = "round";
    }
    if (tipo.value === "Bevel") {
      context.lineJoin = "bevel";
    } /*
    if (colorgradiente === 1) {
      var gradientlinea = context.createLinearGradient(0, 400, 400, 0);
      gradientlinea.addColorStop(0, "blue");
      gradientlinea.addColorStop(1, "orange");
      context.fillStyle(gradientlinea);
    }*/
    for (let x = -150; x < 151; x++) {
      let y = eval(funcion.value);
      context.lineTo(x, -y);
      context.save();
      context.stroke();
      context.restore();
      //context.fill();
    }
    control = 1;
    context.closePath();
  }
  function invertirColores() {
    var imagenInvertida = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
    var pixels = imagenInvertida.data;

    for (var i = 0; i < pixels.length; i += 4) {
      pixels[i] = 255 - pixels[i]; // rojo
      pixels[i + 1] = 255 - pixels[i + 1]; // verde
      pixels[i + 2] = 255 - pixels[i + 2]; // azul
    }
    context.putImageData(imagenInvertida, 0, 0);
    context.save();
    context.stroke();
    context.restore();
  }

  function Borrar() {
    if (control === 1) {
      context.translate(-150, -150);
    }
    //context.clearRect(0, 0, context.width, context.height);
    context.clearRect(0, 0, context.width, context.height);
    PlantillaCanvas();
  }

  download_img = function (el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
  };

  function zoom() {
    let zoom = document.getElementById("formControlRange");
    let agumento = zoom.value / 100;
    console.log(zoom, agumento);
    context.scale(2, 2);
  }

  function escribirTexto() {
    var texto = document.getElementById("entradatexto");
    context.beginPath();
    context.font = "lighter 15px impact arial";
    context.fillStyle = "blue";
    if (control === 1) {
      context.translate(-150, -150);
    }
    context.translate(0, 0);
    context.rotate(25);
    context.strokeText(texto.value, x, y);
    y = y + 15;
    if (y >= 250) {
      x = 170;
      y = 50;
    }
    control = 0;
    context.rotate(-25);
    context.restore();
  }

  function PlantillaCanvas() {
    context.beginPath();
    var gradientCanvas = context.createLinearGradient(0, 400, 400, 0);
    gradientCanvas.addColorStop(0, "#fff");
    context.fillStyle = gradientCanvas;
    context.fillRect(0, 0, 400, 400);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.lineJoin = "miter";
    xyCanvas(0, 0, 0, 300);
    xyCanvas(0, 300, 300, 300);
    xyCanvas(300, 300, 300, 0);
    xyCanvas(300, 0, 0, 0);
    xyCanvas(150, 0, 150, 300);
    xyCanvas(0, 150, 300, 150);
    control = 0;
    context.fill();
    context.save();
    context.stroke();
    context.restore();
  }

  function xyCanvas(x, y, x2, y2) {
    context.beginPath();
    context.lineTo(x, y);
    context.lineTo(x2, y2);
    //context.fill();
    context.save();
    context.stroke();
    context.restore();
  }
};
