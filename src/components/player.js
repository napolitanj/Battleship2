import Gameboard from "../components/gameboard.js"

const Player = (name) => {
    return {
        name,
        playerBoard:Gameboard(),
        attack (player,position) {
            player.playerBoard.recieveAttack(position)
        },
        randomShot(player) {
            let target = Math.floor(Math.random()*100)
            while (player.playerBoard.attackedPositions.includes(target)) {
                target = Math.floor(Math.random()*100)
            }
            player.playerBoard.recieveAttack(target)
        },
    }
}


export default Player