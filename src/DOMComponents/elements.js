function generateBoard(cssClass) {
    const boardDOM = document.createElement("div");
    boardDOM.classList.add(cssClass);
    for (let i = 0; i < 100; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id",i);
        boardDOM.appendChild(gridSquare);
    }
    return boardDOM;
}

const element = () => {
    return {
        gameBoardContainer:document.getElementById("gameBoardContainer"),
        display:document.getElementById("displayWindow"),
        p1board:generateBoard("gameGrid1"),
        p2board:generateBoard("gameGrid2")
    }
};

export default element;