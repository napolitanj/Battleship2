const Player = (name) => {
    return {
        name,
        attack(board,position) {
            board.recieveAttack(position)
        },
        randomShot(board) {
            let target = Math.floor(Math.random()*100)
            while (board.attackedPositions.includes(target)) {
                target = Math.floor(Math.random()*100)
            }
            board.recieveAttack(target)
        },
    }
}


export default Player