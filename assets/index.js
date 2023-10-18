import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const buttonsControl = document.querySelectorAll("button");
const buttonPlayPause = buttonsControl[0];
const buttonmuteUnmute = buttonsControl[1];

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });
buttonPlayPause.onclick = () => player.togglePlay();
buttonmuteUnmute.onclick = () => player.toggleMute();
