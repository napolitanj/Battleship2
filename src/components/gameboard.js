const Gameboard = () => {
    return {
        board: Array(100).fill(0),
        occupiedPositions: [],
        placedShips:[],
        placeShip(ship,position) {
            let shipLength = ship.length;
            let heading = ship.heading;
            if (isPositionValid(ship, position) === false) {
                return false;
            } else if (heading === 'horizontal'){
                for (let i = position; i < position+shipLength; i++) {
                    this.board[i] = 1;
                    this.occupiedPositions.push(i)
                    ship.location.push(i)
                }
                this.placedShips.push(ship)
            } else if (heading === 'vertical') {
                for (let i = position; i < position+shipLength*10; i+=10) {
                    this.board[i] = 1;
                    this.occupiedPositions.push(i)
                    ship.location.push(i)
                }
                this.placedShips.push(ship)
            }
        },
        recieveAttack(position) {
            if (this.occupiedPositions.includes(position)) {
                this.board[position] = 3;
                this.placedShips.forEach(ship => {
                    if (ship.location.includes(position)) {
                        ship.hit();
                    } else {
                        return
                    }
                })
            } else {
                this.board[position] = 2;
            }
        },
        allShipsSunk() {
            for (let i = 0; i < this.placedShips.length; i++) {
                if (this.placedShips[i].isSunk() === true) {
                    return true
                } else {
                    return false;
                }
            }
        }
    }
};

//Prevents ship from being placed "outside of grid"
function isPositionValid(ship, position) {
    let length = ship.length;
    if (ship.heading === 'horizontal') {
        let start = position.toString().split('')
        let end = (position+length-1).toString().split('')
        if (start[0] === end[0] || position+length-1 < 10) {
            return true;
        } else {
            return false;
        }
    } else {
        if (position <= 100-(10*(length-1))) {
            return true;
        } else {
            return false;
        }
    }
}

export default Gameboard;