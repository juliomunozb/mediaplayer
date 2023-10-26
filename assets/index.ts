import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const buttonsControl = document.querySelectorAll("button");
const playPauseButton: HTMLElement = buttonsControl[0];
const muteUnmuteButton: HTMLElement = buttonsControl[1];

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});
playPauseButton.onclick = () => player.togglePlay();
muteUnmuteButton.onclick = () => player.toggleMute();

//Detectar si el navegador soportado serviceworkers
if ("serviceWorker" in navigator) {
  //Registrar el archivo con las instrucciones del serviceWorker
  // El archivo sw-js debe estar en la raíz del sitio para que el serviceWorker pueda acceder a todas las rutas (archivos) del proyecto
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
