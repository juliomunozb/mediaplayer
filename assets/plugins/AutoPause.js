class AutoPause {
  constructor() {
    this.threshold = 0.25;
    //Se establece el this permanentamente en la instancia del objeto
    this.handlerInterseccion = this.handlerInterseccion.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;
    /*
    Revive dos parámetros:
      Handler: función que recive el anuncio cuando se presenta la intersección en el elmento que se observa
      Objeto de configuració
    */
    const observer = new IntersectionObserver(this.handlerInterseccion, {
      /*
        Umbral -> define el porcentaje del elemento que va a tener interseccion
        Cuando pase (Haya una salida) el elemento observado el 25% 
        Cuando entra en pantlla y  el elemento observado pase el  25% 
      */
      threshold: this.threshold,
    });
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }

  handlerInterseccion(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
