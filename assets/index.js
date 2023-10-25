import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const buttonsControl = document.querySelectorAll("button");
const buttonPlayPause = buttonsControl[0];
const buttonmuteUnmute = buttonsControl[1];

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});
buttonPlayPause.onclick = () => player.togglePlay();
buttonmuteUnmute.onclick = () => player.toggleMute();

//Detectar si el navegador soportado serviceworkers
if ("serviceWorker" in navigator) {
  //Registrar el archivo con las instrucciones del serviceWorker
  // El archivo sw-js debe estar en la raíz del sitio para que el serviceWorker pueda acceder a todas las rutas (archivos) del proyecto
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
