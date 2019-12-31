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

  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */
  handleKeydown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === "ArrowDown") {
        this.playToken();
      }
    }
  }

  playToken() {
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      Game.ready = false;
      activeToken.drop(targetSpace);
    }
  }

  get activePlayer() {
    return this.players.find(player => player.active);
  }
}
