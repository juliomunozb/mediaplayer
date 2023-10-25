//Reescribir a Clase, usar la palabra Class para que typescript lo reconozca como un tipo
class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; //MediaPlayer debe funcionar con o sin plugins
    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
    this.plugins.forEach((plugin) => {
      plugin.run(player);
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
