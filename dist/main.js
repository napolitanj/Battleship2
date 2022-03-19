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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/DOMComponents/elements.js\");\n\n\nconst DOMFunction = () => {\n    const ele = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    function colorSquare(board,node) {\n        const id = node.id;\n        if (board[id] === 1) {\n            return \"blue\";\n        } else if (board[id] === 2) {\n            return \"white\";\n        } else if (board[id] === 3) {\n            return \"red\";\n        } else {\n            return;\n        }\n    }\n    return {\n        DOMBoard1:ele.gameBoardContainer.appendChild(ele.p1Board),\n        DOMBoard2:ele.gameBoardContainer.appendChild(ele.p2Board),\n        refreshBoard(playerBoard,computerBoard) {\n            this.DOMBoard1.childNodes.forEach(node => node.style.backgroundColor = colorSquare(playerBoard,node))\n            this.DOMBoard2.childNodes.forEach(node => node.style.backgroundColor = colorSquare(computerBoard,node))\n        },\n        shootDOMComputerBoard(board, target) {\n            const square = document.getElementById(\"gameGrid2\").childNodes[target]\n            // If a position is occupied by a ship (Hit!)\n            if (board[target] === 3){\n                square.style.backgroundColor = \"red\"; \n            // If a position is not occupied \n            } else if (board[target] === 2){\n                square.style.backgroundColor = \"white\";\n            }\n        },\n        shootDOMPlayerBoard(board, target) {\n            const square = document.getElementById(\"gameGrid1\").childNodes[target]\n            // If a position is occupied by a ship (Hit!)\n            if (board[target] === 3){\n                square.style.backgroundColor = \"red\"; \n            // If a position is not occupied \n            } else if (board[target] === 2){\n                square.style.backgroundColor = \"white\";\n            }\n        },\n        changeDisplay1(text) {\n            ele.displayText1.textContent = text;\n        },\n        changeDisplay2(text) {\n            ele.displayText2.textContent = text;\n        },\n        updateGameIcons(){\n\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMFunction);\n\n//# sourceURL=webpack://battleship2/./src/DOMComponents/DOMFunctions.js?");

/***/ }),

/***/ "./src/DOMComponents/elements.js":
/*!***************************************!*\
  !*** ./src/DOMComponents/elements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateBoard(cssClass,squareClass) {\n    const board = document.createElement(\"div\");\n    board.classList.add(cssClass);\n    board.setAttribute(\"id\",cssClass);\n    for (let i = 0; i < 100; i++) {\n        const gridSquare = document.createElement(\"div\")\n        gridSquare.classList.add(squareClass);\n        gridSquare.setAttribute(\"id\",i);\n        board.appendChild(gridSquare);\n    }\n    return board;\n}\n\nconst element = () => {\n    return {\n        gameBoardContainer:document.getElementById(\"gameBoardContainer\"),\n        displayText1:document.getElementById(\"displayText1\"),\n        displayText2:document.getElementById(\"displayText2\"),\n        p1Board:generateBoard(\"gameGrid1\",\"gridSquare\"),\n        p2Board:generateBoard(\"gameGrid2\",\"computerGridSquare\"),\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n//# sourceURL=webpack://battleship2/./src/DOMComponents/elements.js?");

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOMComponents_DOMFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMComponents/DOMFunctions.js */ \"./src/DOMComponents/DOMFunctions.js\");\n/* harmony import */ var _components_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/gameboard.js */ \"./src/components/gameboard.js\");\n\n\n\n//Initialize Game\nconst Game = () => {\n    const modDOM = (0,_DOMComponents_DOMFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const p1Board = (0,_components_gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const computerBoard = (0,_components_gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    function initialize() {\n        computerBoard.randomlyPlaceAllShips();\n        p1Board.randomlyPlaceAllShips();\n        modDOM.refreshBoard(p1Board.board,computerBoard.board);\n    }\n    function addListeners() {\n        document.querySelectorAll(\".computerGridSquare\").forEach(node => node.addEventListener(\"click\", gameLoop));\n    }\n    function removeListeners() {\n        document.getElementById(\"gameGrid2\").removeEventListener(\"click\", gameLoop);\n    }\n    function isGameOver() {\n        if (p1Board.allShipsSunk() === true) {\n            modDOM.changeDisplay1(\"Computer Wins!\")\n            modDOM.changeDisplay2(\"Refresh the page to start a new game.\")\n            removeListeners();\n            return;\n        } else if (computerBoard.allShipsSunk() === true) {\n            modDOM.changeDisplay1(\"Player 1 Wins!\")\n            modDOM.changeDisplay2(\"Refresh the page to start a new game.\")\n            removeListeners();\n            return;\n        } else {\n            return false;\n        }\n    }\n    function playerAttack(id) {\n        computerBoard.recieveAttack(id)\n        modDOM.shootDOMComputerBoard(computerBoard.board, id)\n        computerBoard.checkShips(\"p2\")\n        if (isGameOver() === false) {\n            computerAttack();\n        }\n    }\n    function computerAttack() {\n        let p1Target = p1Board.recieveRandomAttack();\n        modDOM.shootDOMPlayerBoard(p1Board.board, parseInt(p1Target))\n        p1Board.checkShips(\"p1\")\n        if (isGameOver() === true) {\n            return;\n        }\n    }\n    function gameLoop(e) {\n        modDOM.changeDisplay1(\"Choose your target\")\n        modDOM.changeDisplay2(\"\")\n        const target = e.target;\n        const id = parseInt(target.id);\n        playerAttack(id);\n    }\n    initialize();\n    addListeners();\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship2/./src/components/game.js?");

/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ship.js */ \"./src/components/ship.js\");\n\n\nconst Gameboard = () => {\n    //Prevents ship from being placed \"outside of grid\"\n    function isPositionValid(ship, position) {\n        let length = ship.length;\n        if (ship.heading === 'horizontal') {\n            let start = position.toString().split('')\n            let end = (position+length-1).toString().split('')\n            if (start[0] === end[0] || position+length-1 < 10) {\n                return true;\n            } else {\n                return false;\n            }\n        } else {\n            if (position <= 100-(10*(length-1))) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n    function isPositionOccupied(ship,position, occupiedPositions) {\n        let length = ship.length;\n        let heading = ship.heading\n        let potentialPlacements = []\n\n        if (heading === 'horizontal') { \n            for (let i = position; i < position+length; i++) {\n                potentialPlacements.push(i)\n            }\n        } else if (heading === 'vertical') {\n            for (let i = position; i < position+length*10; i+=10) {\n                potentialPlacements.push(i)\n            }\n        }\n        if (checkIfOccupied(occupiedPositions,potentialPlacements) === true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    function checkIfOccupied(array1,array2) {\n        return array1.some(item => array2.includes(item))\n    }\n    return {\n        board: Array(100).fill(0),\n        occupiedPositions: [],\n        attackedPositions: [],\n        placedShips:[],\n        placeShip(ship,position) {\n            let shipLength = ship.length;\n            let heading = ship.heading;\n            if (isPositionValid(ship, position) === false || isPositionOccupied(ship,position,this.occupiedPositions) === true) {\n                return false;\n            } else if (heading === 'horizontal'){\n                for (let i = position; i < position+shipLength; i++) {\n                    this.board[i] = 1;\n                    this.occupiedPositions.push(i)\n                    ship.location.push(i)\n                }\n                this.placedShips.push(ship)\n            } else if (heading === 'vertical') {\n                for (let i = position; i < position+shipLength*10; i+=10) {\n                    this.board[i] = 1;\n                    this.occupiedPositions.push(i)\n                    ship.location.push(i)\n                }\n                this.placedShips.push(ship)\n            }\n        },\n        recieveAttack(position) {\n            if (this.attackedPositions.includes(position) === true) {\n                return;\n            }\n            this.attackedPositions.push(position);\n            if (this.occupiedPositions.includes(position)) {\n                \n                this.board[position] = 3;\n                this.placedShips.forEach(ship => {\n                    if (ship.location.includes(position)) {\n                        ship.hit();\n                    } else {\n                        return\n                    }\n                })\n            } else {\n                this.board[position] = 2;\n            }\n        },\n        checkShips(player) {\n            this.placedShips.forEach(ship => {\n                if (ship.isSunk() === true) {\n                    document.getElementById(player+ ship.name).src = \"dist/icons/x.png\"\n                }\n            })\n        },\n        allShipsSunk() {\n            if (this.board.indexOf(1) === -1) {\n                return true\n            } else {\n                return false;\n            }\n        },\n        randomlyPlaceAllShips(){\n            const cargo = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2,\"Cargo\")\n            const sub = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3,\"Submarine\")\n            const destroyer = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3,\"Destroyer\")\n            const battleship = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4,\"Battleship\")\n            const carrier = (0,_components_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5,\"Carrier\")\n            const array = [cargo,sub,destroyer,battleship,carrier]\n            let position;\n\n            array.forEach(ship => {\n                let orientation = Math.random();\n                if (orientation > .5) {\n                    ship.changeHeading();\n                }\n                position = Math.floor(Math.random()*100)\n                while (isPositionOccupied(ship,position,this.occupiedPositions) === true || isPositionValid(ship,position) === false) {\n                    position = Math.floor(Math.random()*100)\n                }\n                this.placeShip(ship,position)\n            })\n\n        },\n        recieveRandomAttack() {\n            let target = Math.floor(Math.random()*101)\n            while (this.attackedPositions.includes(target)) {\n                target = Math.floor(Math.random()*101)\n            }\n            this.recieveAttack(target)\n            return target;\n        }\n    \n    }\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship2/./src/components/gameboard.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, name) => {\n    return {\n        length,\n        name,\n        health: length,\n        heading:'horizontal',\n        location:[],\n        changeHeading() {\n            if (this.heading === 'horizontal') {\n                this.heading = 'vertical'\n            } else {\n                this.heading = 'horizontal'\n            }\n        },\n        hit() {\n            return this.health += -1;\n        },\n        isSunk() {\n            if (this.health === 0) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship2/./src/components/ship.js?");

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