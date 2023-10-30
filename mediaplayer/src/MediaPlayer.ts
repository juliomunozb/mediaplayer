//Reescribir a Clase, usar la palabra Class para que typescript lo reconozca como un tipo
class MediaPlayer {
  media: HTMLMediaElement; //Etiqueta video en HTML, ese elemento representa a un HTMLVideoElement y hereda de HTMLMediaElement (tipo nativo de HTML, no se de importar solo se llama)
  plugins: Array<any>;
  container: HTMLElement;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; //MediaPlayer debe funcionar con o sin plugins
    this.initPlayer();
    this.initPlugins();
  }
  private initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode!.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}

export default MediaPlayer;
