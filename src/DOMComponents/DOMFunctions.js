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
        },
        placeShip(ship) {
            ele.p1Board.childNodes.forEach(square => 
                square.addEventListener("mouseover", function(){displayShipPlacement(square,ship)}));
        }
    }
}

function displayShipPlacement(square,ship) {
    const parentGrid = square.parentNode;
    const id = parseInt(square.id)
    let length = ship.length
    let heading = ship.heading

    parentGrid.childNodes.forEach(square => square.style.backgroundColor = "grey")
    if (heading === 'horizontal') {
        for (let i = 0; i < length; i++) {
            parentGrid.childNodes[id+i].style.backgroundColor= "blue"
        }
    }    
}


export default DOMFunction;