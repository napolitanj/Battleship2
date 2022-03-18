/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMComponents/DOMFunctions.js":
/*!*******************************************!*\
  !*** ./src/DOMComponents/DOMFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/DOMComponents/elements.js\");\n/* harmony import */ var _components_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game.js */ \"./src/components/game.js\");\n\n\n\n\nconst DOMFunction = () => {\n    const ele = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    //Fire random shot for computer\n    function shootForComputer(player,computer) {\n        let target = Math.floor(Math.random()*100)\n        while (player.playerBoard.attackedPositions.includes(target)) {\n            target = Math.floor(Math.random()*100)\n        }\n        renderComputerShot(target,player,ele.p1Board);\n        computer.attack(player,target)\n        console.log(player.playerBoard.attackedPositions)\n        \n    }\n    return {\n        renderBoards() {\n            ele.gameBoardContainer.appendChild(ele.p1Board);\n            ele.gameBoardContainer.appendChild(ele.p2Board);\n        },\n        changeDisplay(text) {\n            ele.display.textContent = text;\n        },\n        renderShips(array,name) {\n            const grid = document.getElementById(name)\n            for (let i = 0; i < array.length; i++) {\n                const square = grid.childNodes[i]\n                if (array[i] === 1) {\n                    square.style.backgroundColor = \"blue\";\n                }\n            }\n        },\n        placeShip(player,ship) {\n            ele.p1Board.childNodes.forEach(square => \n                square.addEventListener(\"mouseover\", function(){displayShipPlacement(square,ship, player)}));\n            //Shift ship heading\n            document.addEventListener(\"keydown\", keyboard);\n            //For keypress\n            function keyboard(k) {\n                if (k.key === \"Shift\") {\n                    ship.changeHeading();\n                }\n            }\n        },\n        activateBoardForAttacks(player,computer) {\n            ele.p2Board.childNodes.forEach(square => square.addEventListener(\"click\", function(){playerDOMShot(square,computer)}));\n            \n            //player.attack(computer,square.id)}))\n            function playerDOMShot(square,computer) {\n                let position = square.id\n                while (computer.playerBoard.board[position] === 2 || computer.playerBoard.board[position === 3]) {\n                    console.log(\"occupied, try again\")\n                    return;\n                }\n                // If a position is occupied by a ship (Hit!)\n                if (computer.playerBoard.board[position] === 1){\n                    computer.playerBoard.recieveAttack(position)\n                    square.style.backgroundColor = \"red\"; \n                // If a position is not occupied \n                } else if (computer.playerBoard.board[position] === 0){\n                    computer.playerBoard.recieveAttack(position)\n                    square.style.backgroundColor = \"white\";\n                }\n                if (computer.playerBoard.allShipsSunk() === false) {\n                    shootForComputer(player,computer)\n                } else {\n                    this.changeDisplay(\"Game over! Player 1 wins!\");\n                }\n            }\n        },\n    }\n}\n\nfunction displayShipPlacement(square,ship, player) {\n    const parentGrid = square.parentNode;\n    const id = parseInt(square.id)\n    let length = ship.length\n    let heading = ship.heading\n    let lastVertPosition = 100-(10*(length-1))\n\n    parentGrid.childNodes.forEach(square => square.style.backgroundColor = \"grey\")\n    if (heading === 'horizontal') {\n        for (let i = 0; i < length; i++) {\n            if (checkPosition(id,length) === true) {\n                parentGrid.childNodes[id+i].style.backgroundColor= \"blue\"\n            }\n        }\n    } else {\n        for (let i = 0; i < length; i++) {\n            if (id < lastVertPosition) {\n                parentGrid.childNodes[id+i*10].style.backgroundColor= \"blue\"\n            }\n        }\n    }\n    //Place ship on current square\n    square.addEventListener(\"click\", function(){confirmPlacement(player,ship,id)}) \n}\nfunction confirmPlacement(player, ship,location) {\n    player.playerBoard.placeShip(ship,location)\n}\n//Check if any siblings are in the next group of \"tens\"\nfunction checkPosition(id,length) {\n    let start = id.toString().split('')\n    let end = (id+length-1).toString().split('')\n    if (start[0] === end[0] || id+length-1 < 10) {\n        return true;\n    } else {\n        return false;\n    }\n}\n//Check if game ended\nfunction isGameOver(player,computer) {\n    if (player.playerBoard.allShipsSunk() === true) {\n        console.log('Computer wins! Game Over.')\n        return true; \n    } else if (computer.playerBoard.allShipsSunk() === true) {\n        console.log('Player 1 wins! Game Over.');\n        return true;\n    } else {\n        return false;\n    }\n}\n//Render DOM shot from computer\nfunction renderComputerShot(target,player,board) {\n    const boardSpace = board.childNodes[target];\n    const position = parseInt(player.playerBoard.board[target]);\n    // If a position has already been shot or is occupied by a hit ship\n    if (position === 2 || position === 3) {\n        return;\n    // If a position is occupied by a ship (Hit!)\n    } else if (position === 1){\n        boardSpace.style.backgroundColor = \"red\"; \n    // If a position is not occupied \n    } else if (position === 0){\n        boardSpace.style.backgroundColor = \"white\"; \n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMFunction);\n\n//# sourceURL=webpack://battleship2/./src/DOMComponents/DOMFunctions.js?");

/***/ }),

/***/ "./src/DOMComponents/elements.js":
/*!***************************************!*\
  !*** ./src/DOMComponents/elements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateBoard(cssClass) {\n    const board = document.createElement(\"div\");\n    board.classList.add(cssClass);\n    board.setAttribute(\"id\",cssClass);\n    for (let i = 0; i < 100; i++) {\n        const gridSquare = document.createElement(\"div\")\n        gridSquare.classList.add(\"gridSquare\");\n        gridSquare.setAttribute(\"id\",i);\n        board.appendChild(gridSquare);\n    }\n    return board;\n}\n\nconst element = () => {\n    return {\n        gameBoardContainer:document.getElementById(\"gameBoardContainer\"),\n        display:document.getElementById(\"displayWindow\"),\n        p1Board:generateBoard(\"gameGrid1\"),\n        p2Board:generateBoard(\"gameGrid2\"),\n        cargoIcon:document.getElementById(\"cargoIcon\"),\n        subIcon:document.getElementById(\"subIcon\"),\n        destroyerIcon:document.getElementById(\"destroyerIcon\"),\n        battleshipIcon:document.getElementById(\"battleshipIcon\"),\n        carrierIcon:document.getElementById(\"carrierIcon\"),\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n//# sourceURL=webpack://battleship2/./src/DOMComponents/elements.js?");

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/player.js */ \"./src/components/player.js\");\n/* harmony import */ var _DOMComponents_DOMFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMComponents/DOMFunctions.js */ \"./src/DOMComponents/DOMFunctions.js\");\n/* harmony import */ var _components_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ship.js */ \"./src/components/ship.js\");\n\n\n\n\n//Initialize Game\nconst Game = () => {\n    const modDOM = (0,_DOMComponents_DOMFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const cargo = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2, \"Cargo Ship\")\n    const sub = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3, \"Submarine\")\n    const destroyer = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3, \"Destroyer\")\n    const battleship = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4, \"Battleship\")\n    const carrier = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5, \"Carrier\")\n\n    //Create Human and Computer player\n    const player1 = (0,_components_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Player 1\")\n    const computer = (0,_components_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Computer\")\n\n    //Activate Boards and Display, generate computer ship placements\n    modDOM.renderBoards();\n    computer.playerBoard.randomlyPlaceAllShips(); \n    \n    //Temporary\n    // modDOM.renderShips(computer.playerBoard.board,\"gameGrid2\")\n    player1.playerBoard.placeShip(cargo, 10)\n    player1.playerBoard.placeShip(sub, 23)\n    player1.playerBoard.placeShip(destroyer, 42)\n    player1.playerBoard.placeShip(battleship, 55)\n    player1.playerBoard.placeShip(carrier, 62)\n\n    modDOM.renderShips(player1.playerBoard.board,\"gameGrid1\")\n    \n    function computerShoot() {\n        modDOM.shootForComputer(player1,computer)\n    }\n\n    modDOM.activateBoardForAttacks(player1,computer)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship2/./src/components/game.js?");

/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ship.js */ \"./src/components/ship.js\");\n\n\nconst Gameboard = () => {\n    \n    return {\n        board: Array(100).fill(0),\n        occupiedPositions: [],\n        attackedPositions: [],\n        placedShips:[],\n        placeShip(ship,position) {\n            let shipLength = ship.length;\n            let heading = ship.heading;\n            if (isPositionValid(ship, position) === false || isPositionOccupied(ship,position,this.occupiedPositions) === true) {\n                return false;\n            } else if (heading === 'horizontal'){\n                for (let i = position; i < position+shipLength; i++) {\n                    this.board[i] = 1;\n                    this.occupiedPositions.push(i)\n                    ship.location.push(i)\n                }\n                this.placedShips.push(ship)\n            } else if (heading === 'vertical') {\n                for (let i = position; i < position+shipLength*10; i+=10) {\n                    this.board[i] = 1;\n                    this.occupiedPositions.push(i)\n                    ship.location.push(i)\n                }\n                this.placedShips.push(ship)\n            }\n        },\n        recieveAttack(position) {\n            this.attackedPositions.push(position);\n            if (this.occupiedPositions.includes(position)) {\n                this.board[position] = 3;\n                this.placedShips.forEach(ship => {\n                    if (ship.location.includes(position)) {\n                        ship.hit();\n                    } else {\n                        return\n                    }\n                })\n            } else {\n                this.board[position] = 2;\n            }\n        },\n        allShipsSunk() {\n            for (let i = 0; i < this.placedShips.length; i++) {\n                if (this.placedShips[i].isSunk() === true) {\n                    return true\n                } else {\n                    return false;\n                }\n            }\n        },\n        randomlyPlaceAllShips(){\n            const cargo = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2,\"Cargo Boat\")\n            const sub = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3,\"Submarine\")\n            const destroyer = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3,\"Destroyer\")\n            const battleship = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4,\"Battleship\")\n            const carrier = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5,\"Aircraft Carrier\")\n            const array = [cargo,sub,destroyer,battleship,carrier]\n            let position;\n\n            array.forEach(ship => {\n                let orientation = Math.random();\n                if (orientation > .5) {\n                    ship.changeHeading();\n                }\n                position = Math.floor(Math.random()*100)\n                while (isPositionOccupied(ship,position,this.occupiedPositions) === true || isPositionValid(ship,position) === false) {\n                    position = Math.floor(Math.random()*100)\n                }\n                this.placeShip(ship,position)\n            })\n\n        },\n    }\n};\n\n//Prevents ship from being placed \"outside of grid\"\nfunction isPositionValid(ship, position) {\n    let length = ship.length;\n    if (ship.heading === 'horizontal') {\n        let start = position.toString().split('')\n        let end = (position+length-1).toString().split('')\n        if (start[0] === end[0] || position+length-1 < 10) {\n            return true;\n        } else {\n            return false;\n        }\n    } else {\n        if (position <= 100-(10*(length-1))) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n}\nfunction isPositionOccupied(ship,position, occupiedPositions) {\n    let length = ship.length;\n    let heading = ship.heading\n    let potentialPlacements = []\n\n    if (heading === 'horizontal') { \n        for (let i = position; i < position+length; i++) {\n            potentialPlacements.push(i)\n        }\n    } else if (heading === 'vertical') {\n        for (let i = position; i < position+length*10; i+=10) {\n            potentialPlacements.push(i)\n        }\n    }\n    if (checkIfOccupied(occupiedPositions,potentialPlacements) === true) {\n        return true;\n    } else {\n        return false;\n    }\n}\nfunction checkIfOccupied(array1,array2) {\n    return array1.some(item => array2.includes(item))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship2/./src/components/gameboard.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/gameboard.js */ \"./src/components/gameboard.js\");\n\n\nconst Player = (name) => {\n    return {\n        name,\n        playerBoard:(0,_components_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n        attack (player,position) {\n            player.playerBoard.recieveAttack(position)\n        },\n        randomShot(player) {\n            let target = Math.floor(Math.random()*100)\n            while (player.playerBoard.attackedPositions.includes(target)) {\n                target = Math.floor(Math.random()*100)\n            }\n            player.playerBoard.recieveAttack(target)\n        },\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship2/./src/components/player.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, name) => {\n    return {\n        length,\n        name,\n        health: length,\n        heading:'horizontal',\n        location:[],\n        changeHeading() {\n            if (this.heading === 'horizontal') {\n                this.heading = 'vertical'\n            } else {\n                this.heading = 'horizontal'\n            }\n        },\n        hit() {\n            return this.health -= 1;\n        },\n        isSunk() {\n            if (this.health === 0) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship2/./src/components/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game.js */ \"./src/components/game.js\");\n\n\n(0,_components_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://battleship2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;