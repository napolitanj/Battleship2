import element from "./elements.js"

const DOMFunction = () => {
    const ele = element()
    return {
        renderBoards() {
            ele.gameBoardContainer.appendChild(ele.p1Board);
            ele.gameBoardContainer.appendChild(ele.p2Board);
        },
        changeDisplay(text) {
            ele.display.textContent = text;
        },
        renderShips(array,name) {
            const grid = document.getElementById(name)
            for (let i = 0; i < array.length; i++) {
                const square = grid.childNodes[i]
                if (array[i] === 1) {
                    square.style.backgroundColor = "blue";
                }
            }
        }
    }
}


export default DOMFunction;