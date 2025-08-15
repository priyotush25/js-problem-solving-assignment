function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let playTeam1 = player1.foul + player1.cardY + player1.cardR;
  let playTeam2 = player2.foul + player2.cardY + player2.cardR;

  if (playTeam1 == playTeam2) {
    return "Tie";
  } else if (playTeam1 < playTeam2) {
    return player1.name;
  } else {
    return player2.name;
  }
}
