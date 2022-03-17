(()=>{"use strict";const t=(t,e)=>({length:t,name:e,health:t,heading:"horizontal",location:[],changeHeading(){"horizontal"===this.heading?this.heading="vertical":this.heading="horizontal"},hit(){return this.health-=1},isSunk(){return 0===this.health}});function e(t,e){let i=t.length;if("horizontal"===t.heading){let t=e.toString().split(""),a=(e+i-1).toString().split("");return t[0]===a[0]||e+i-1<10}return e<=100-10*(i-1)}function i(t,e,i){let a=t.length,o=t.heading,r=[];if("horizontal"===o)for(let t=e;t<e+a;t++)r.push(t);else if("vertical"===o)for(let t=e;t<e+10*a;t+=10)r.push(t);return!0===(n=r,i.some((t=>n.includes(t))));var n}const a=()=>({board:Array(100).fill(0),occupiedPositions:[],attackedPositions:[],placedShips:[],placeShip(t,a){let o=t.length,r=t.heading;if(!1===e(t,a)||!0===i(t,a,this.occupiedPositions))return!1;if("horizontal"===r){for(let e=a;e<a+o;e++)this.board[e]=1,this.occupiedPositions.push(e),t.location.push(e);this.placedShips.push(t)}else if("vertical"===r){for(let e=a;e<a+10*o;e+=10)this.board[e]=1,this.occupiedPositions.push(e),t.location.push(e);this.placedShips.push(t)}},recieveAttack(t){this.attackedPositions.push(t),this.occupiedPositions.includes(t)?(this.board[t]=3,this.placedShips.forEach((e=>{e.location.includes(t)&&e.hit()}))):this.board[t]=2},allShipsSunk(){for(let t=0;t<this.placedShips.length;t++)return!0===this.placedShips[t].isSunk()},randomlyPlaceAllShips(){let a;[t(2,"Cargo Boat"),t(3,"Submarine"),t(3,"Destroyer"),t(4,"Battleship"),t(5,"Aircraft Carrier")].forEach((t=>{for(a=Math.floor(100*Math.random());!0===i(t,a,this.occupiedPositions)||!1===e(t,a);)a=Math.floor(100*Math.random());this.placeShip(t,a)}))}}),o=t=>({name:t,playerBoard:a(),attack(t,e){t.playerBoard.recieveAttack(e)},randomShot(t){let e=Math.floor(100*Math.random());for(;t.playerBoard.attackedPositions.includes(e);)e=Math.floor(100*Math.random());t.playerBoard.recieveAttack(e)}});function r(t){const e=document.createElement("div");e.classList.add(t);for(let t=0;t<100;t++){const i=document.createElement("div");i.classList.add("gridSquare"),i.setAttribute("id",t),e.appendChild(i)}return e}const n=()=>{const t={gameBoardContainer:document.getElementById("gameBoardContainer"),display:document.getElementById("displayWindow"),p1board:r("gameGrid1"),p2board:r("gameGrid2")};return{renderBoards(){t.gameBoardContainer.appendChild(t.p1board),t.gameBoardContainer.appendChild(t.p2board)}}};(()=>{const t=n();o("Player 1"),o("Computer"),t.renderBoards()})()})();