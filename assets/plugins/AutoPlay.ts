import MediaPlayer from "../MediaPlayer";
class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true; //Los setter no se invocan como si fuera una función solo se asigna el varlor
    }

    player.play();
  }
}
export default AutoPlay;
