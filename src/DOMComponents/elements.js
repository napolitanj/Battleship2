function generateBoard(cssClass) {
    const board = document.createElement("div");
    board.classList.add(cssClass);
    board.setAttribute("id",cssClass);
    for (let i = 0; i < 100; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id",i);
        board.appendChild(gridSquare);
    }
    return board;
}

const element = () => {
    return {
        gameBoardContainer:document.getElementById("gameBoardContainer"),
        display:document.getElementById("displayWindow"),
        p1Board:generateBoard("gameGrid1"),
        p2Board:generateBoard("gameGrid2")
    }
};

export default element;