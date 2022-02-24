let currentPlayer = "x";
//stores whether or not the game is still at play
let gameStatus = "true";

//gets cells of the game
const cells = document.getElementsByClassName("grid-cell");
const showWinner = document.getElementById("winner");
//loops through all cells  when game is active
document.addEventListener("click", (event) => {
    const target = event.target;
    const isCell = target.classList.contains("grid-cell");
    const isDisabled = target.classList.contains("disabled");

    if (isCell && !isDisabled) {

        for (let i = 0; i < cells.length; i++) {

            cells[i].addEventListener("click", function() {

                if (cells[i].innerHTML == "" && gameStatus == "true") {
                    //adds the 'x' or 'o' for current player
                    cells[i].innerHTML = currentPlayer;

                    currentPlayer = currentPlayer == "x" ? "o" : "x";


                    document.getElementById("player").innerHTML =
                        currentPlayer.toUpperCase();
                    if (
                        cells[0].innerHTML == cells[1].innerHTML &&
                        cells[1].innerHTML == cells[2].innerHTML &&
                        cells[0].innerHTML.trim() != ""
                    ) {
                        showWinner(0, 1, 2);
                    } else if (
                        cells[3].innerHTML == cells[4].innerHTML &&
                        cells[4].innerHTML == cells[5].innerHTML &&
                        cells[3].innerHTML != ""
                    ) {
                        showWinner(3, 4, 5);
                    } else if (
                        cells[6].innerHTML == cells[7].innerHTML &&
                        cells[7].innerHTML == cells[8].innerHTML &&
                        cells[6].innerHTML != ""
                    ) {
                        showWinner(6, 7, 8);
                    } else if (
                        cells[0].innerHTML == cells[3].innerHTML &&
                        cells[3].innerHTML == cells[6].innerHTML &&
                        cells[0].innerHTML != ""
                    ) {
                        showWinner(0, 3, 6);
                    } else if (
                        cells[1].innerHTML == cells[4].innerHTML &&
                        cells[4].innerHTML == cells[7].innerHTML &&
                        cells[1].innerHTML != ""
                    ) {
                        showWinner(1, 4, 7);
                    } else if (
                        cells[2].innerHTML == cells[5].innerHTML &&
                        cells[5].innerHTML == cells[8].innerHTML &&
                        cells[2].innerHTML != ""
                    ) {
                        showWinner(2, 5, 8);
                    } else if (
                        cells[0].innerHTML == cells[4].innerHTML &&
                        cells[4].innerHTML == cells[8].innerHTML &&
                        cells[0].innerHTML != ""
                    ) {
                        showWinner(0, 4, 8);
                    } else if (
                        cells[2].innerHTML == cells[4].innerHTML &&
                        cells[4].innerHTML == cells[6].innerHTML &&
                        cells[2].innerHTML != ""
                    ) {
                        showWinner(2, 4, 6);
                    }
                }
            });
        }

        document.querySelector(".restartGame")
            .addEventListener("click", function() {
                for (let i = 0; i < cells.length; i++) {
                    cells[i].innerHTML = "";
                    cells[i].style.backgroundColor = "whitesmoke";
                    cells[i].style.color = "black";
                }
                currentPlayer = "x";
                document.getElementById("player").innerHTML = "x";
                document.getElementById("message").hidden();
                gameStatus = "true";
            });

        function showWinner(a, b, c) {
            cells[a].style.background = "limegreen";
            cells[a].style.color = "white";
            cells[b].style.background = "limegreen";
            cells[b].style.color = "white";
            cells[c].style.background = "limegreen";
            cells[c].style.color = "white";
            document.getElementById("winner").innerHTML =
                currentPlayer == "x" ? "O" : "X";
            document.getElementById("message").showWinner();
            gameStatus = "false";
        }

        document.querySelector(".winnerMessage").addEventListener("click", function() {
            if (gameStatus = false)
                document.getElementById("h2").style.display = "block";
            document.getElementById("h2").style.display = "none";

            showWinner();
        });
    }
});