function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = true; //Los setter no se invocan como si fuera una función solo se asigna el varlor
  }

  player.play();
};
export default AutoPlay;
