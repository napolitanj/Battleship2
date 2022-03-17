import element from "./elements.js"

const DOMFunction = () => {
    const ele = element()
    return {
        renderBoards() {
            ele.gameBoardContainer.appendChild(ele.p1board);
            ele.gameBoardContainer.appendChild(ele.p2board);
        },
        changeDisplay(text) {
            ele.display.textContent = text;
        }
    }
}

export default DOMFunction;