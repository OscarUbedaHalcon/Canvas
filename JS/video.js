window.onload = function() {    
  // Variables
  var video = document.getElementById("video");

  var botonPlay = document.getElementById("play");
  var botonSilenciar = document.getElementById("mute");
  var botonPantallaCompleta = document.getElementById("pantallaCompleta");
    
  var barraProceso = document.getElementById("proceso");
  var barraVolumen = document.getElementById("volumen");

video.play
  function reproduccioVideo() {
      if (video.paused == true) {
          console.log('PLAY');
          video.play();
          botonPlay.innerHTML = "Pause"; // Canviar el text del botó a Pause
      } else {
          console.log('PAUSE');
          video.pause();
          botonPlay.innerHTML = "Play"; // Canviar el text del botó a Play
      }
  };

 

  function mutejarVideo() {
      if (video.muted == false) {
          console.log('MUTE');
          video.muted = true; 
          botonSilenciar.innerHTML = "Sonido"; // Canviar el text del botó a Sonido
      } else {
          console.log('UNMUTE');
          video.muted = false;
          botonSilenciar.innerHTML = "Silenciar"; // Canviar el text del botó a Silenciar
      }
  };

  

  function pantallaCompleta(){
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
      } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome y Safari
      }
  };



  function procesoVideo(){
      console.log('Cambiada la barra de progreso');
      var time = video.duration * (proceso.value / 100); // Calcula el nuevo tiempo
      video.currentTime = time; // Actualiza el tiempo del video
  };


  // Update the seek bar as the video plays
  function procesoVideo2(){
      var valor = (100 / video.duration) * video.currentTime; // Calcula el tiempo del video
      proceso.value = valor; // Actualiza el valor
  };




  function volumenVideo(){
      video.volume = barraVolumen.value; //Actualiza el nivel del volumen al seleccionado
  };
  


  this.document.getElementById('play').addEventListener('click', reproduccioVideo);
  this.document.getElementById('mute').addEventListener('click', mutejarVideo);
  this.document.getElementById('pantallaCompleta').addEventListener('click', pantallaCompleta);
  this.document.getElementById('proceso').addEventListener('change', procesoVideo);
  this.document.getElementById('video').addEventListener('timeupdate', procesoVideo2);
  this.document.getElementById('volumen').addEventListener('change', volumenVideo);
}