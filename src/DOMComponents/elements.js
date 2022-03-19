function generateBoard(cssClass,squareClass) {
    const board = document.createElement("div");
    board.classList.add(cssClass);
    board.setAttribute("id",cssClass);
    for (let i = 0; i < 100; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add(squareClass);
        gridSquare.setAttribute("id",i);
        board.appendChild(gridSquare);
    }
    return board;
}

const element = () => {
    return {
        gameBoardContainer:document.getElementById("gameBoardContainer"),
        displayText1:document.getElementById("displayText1"),
        displayText2:document.getElementById("displayText2"),
        p1Board:generateBoard("gameGrid1","gridSquare"),
        p2Board:generateBoard("gameGrid2","computerGridSquare"),
    }
};

export default element;