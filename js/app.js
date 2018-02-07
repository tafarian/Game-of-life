document.addEventListener("DOMContentLoaded", function() {

    var GameOfLife = function (boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.getElementById("board");
        this.cells = [];
        this.createBoard = function() {
            this.board.style.width = boardWidth * 10 + "px";
            this.board.style.height = boardHeight * 10 + "px";
            var boardSize = boardWidth * boardHeight;
            for (var i=0; i<boardSize; i++) {
                var newDiv = document.createElement("div");
                this.board.appendChild(newDiv);
            }
            this.cells = document.querySelectorAll("#board div");
            for (var j=0; j<this.cells.length; j++) {
                this.cells[j].addEventListener("click", function() {
                    var element = this;
                    if ( this.classList !== "live" ) {
                        this.classList.add("live");
                    } else if ( this.classList === "live" ) {
                        this.classList.remove("live");
                    }
                    console.log(this.classList)
                });
            }
        };

    };


    var game = new GameOfLife(10, 10);
    game.createBoard();

    console.log(game);


});