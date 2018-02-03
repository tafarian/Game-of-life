document.addEventListener("DOMContentLoaded", function() {

    var GameOfLife = function (x, y) {
        this.boardWidth = x;
        this.boardHeight = y;
        this.board = document.getElementById("board");
        this.createBoard = function() {
            this.board.style.width = (this.boardWidth * this.boardWidth);
            this.board.style.height = (this.boardHeight * this.boardHeight);
            var boardSize = this.board.style.width * this.board.style.height;
            for (var i=0; i<boardSize; i++) {
                var newDiv = document.createElement("div");
                this.board.appendChild(newDiv);
            }
        };
        this.cells = [];

    };


    var game = new GameOfLife(10, 10);

    console.log(game);


});