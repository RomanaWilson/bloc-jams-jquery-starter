class Helper {
  playPauseAndUpdate(song) {
      player.playPause(song);
    let duration = player.prettyTime(player.currentlyPlaying.duration);
    $('#time-control .total-time').text( duration );
  }
}

var helper = new Helper();
