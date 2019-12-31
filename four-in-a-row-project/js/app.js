const newGame = new Game(),
  beginGameButton = document.querySelector("#begin-game");

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGameButton.addEventListener("click", () => {
  /*
    Info on calling method on object:
    https://www.w3schools.com/js/js_function_call.asp
    */

  newGame.startGame();
  beginGameButton.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener("keydown", e => {
  newGame.handleKeydown(e); //outputs a string naming the pressed key
});
