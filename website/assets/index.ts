import MediaPlayer from "juliomunozb-mediaplayer";
import AutoPlay from "juliomunozb-mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "juliomunozb-mediaplayer/lib/plugins/AutoPause";
import AdsPlugin from "juliomunozb-mediaplayer/lib/plugins/Ads/index";

const video = document.querySelector("video");
const buttonsControl = document.querySelectorAll("button");
const playPauseButton: HTMLElement = buttonsControl[0];
const muteUnmuteButton: HTMLElement = buttonsControl[1];

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
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
