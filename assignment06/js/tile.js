function flipTiles(grid1, grid2) {
    var temp = document.getElementById(grid1).className;
    document.getElementById(grid1).className = document.getElementById(grid2).className;
    document.getElementById(grid2).className = temp;
}

function shufflePieces() {
    for (var row = 1; row <= 3; row++) {
        for (var col = 1; col <= 3; col++) {
            var row2 = Math.floor(Math.random() * 3 + 1);
            var col2 = Math.floor(Math.random() * 3 + 1);

            flipTiles("grid" + row + col, "grid" + row2 + col2);
        }
    }
}

function triggerTile(row, col) {
    var grid = document.getElementById("grid" + row + col);
    var tile = grid.className;
    if (tile != "tile9") {
        if (col < 3) {
            if (document.getElementById("grid" + row + (col + 1)).className == "tileBlank") {
                flipTiles("grid" + row + col, "grid" + row + (col + 1));
                return 0;
            }
        }
        if (col > 1) {
            if (document.getElementById("grid" + row + (col - 1)).className == "tileBlank") {
                flipTiles("grid" + row + col, "grid" + row + (col - 1));
                return 0
            }
        }
        if (row > 1) {
            if (document.getElementById("grid" + (row - 1) + col).className == "tileBlank") {
                flipTiles("grid" + row + col, "grid" + (row - 1) + col);
                return 0;
            }
        }
        if (row < 3) {
            if (document.getElementById("grid" + (row + 1) + col).className == "tileBlank") {
                flipTiles("grid" + row + col, "grid" + (row + 1) + col);
                return 0;
            }
        }
    }

}
