class Helper {
  playPauseAndUpdate(song) {
    let duration = player.prettyTime(player.getDuration());
    $('#time-control .total-time').text( duration );
    player.playPause(song);
  }
}

var helper = new Helper();
