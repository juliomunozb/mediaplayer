//Reescribir a Clase, usar la palabra Class para que typescript lo reconozca como un tipo
class MediaPlayer {
  media: HTMLMediaElement; //Etiqueta video en HTML, ese elemento representa a un HTMLVideoElement y hereda de HTMLMediaElement (tipo nativo de HTML, no se de importar solo se llama)
  plugins: Array<any>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; //MediaPlayer debe funcionar con o sin plugins
    this.initPlugins();
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
