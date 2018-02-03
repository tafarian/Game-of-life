document.addEventListener("DOMContentLoaded", function() {

    var GameOfLife = function () {
        this.boardWidth = 0;
        this.boardHeight = 0;

    };

    var game = new GameOfLife(10, 10);

    console.log(game);

});