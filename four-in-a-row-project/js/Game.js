class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player("Jamie", 1, "#e15258", true),
      new Player("Tim", 2, "#e59a13")
    ];
    return players;
  }
  /*
    Gets game ready for play
  */

  startGame() {
    /**
     * Initializes game.
     */
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  get activePlayer() {
    return this.players.find(player => player.active);
  }
}
