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
                    this.classList.toggle("live")
                });
            }
        };
        this.countNeighbours = function(x, y) {
            for (var i=0; i<this.cells.length; i++) {
                if ()
            }


        }

    };


    var game = new GameOfLife(10, 10);
    game.createBoard();
    game.count();

    console.log(game);


});