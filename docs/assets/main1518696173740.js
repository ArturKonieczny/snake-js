/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = runSnake;

var _settings = __webpack_require__(7);

var _settings2 = _interopRequireDefault(_settings);

var _decodeKey2 = __webpack_require__(3);

var _decodeKey3 = _interopRequireDefault(_decodeKey2);

var _newFruit = __webpack_require__(6);

var _newFruit2 = _interopRequireDefault(_newFruit);

var _drawFrame = __webpack_require__(4);

var _drawFrame2 = _interopRequireDefault(_drawFrame);

var _checkBounds = __webpack_require__(2);

var _checkBounds2 = _interopRequireDefault(_checkBounds);

var _moveSnake2 = __webpack_require__(5);

var _moveSnake3 = _interopRequireDefault(_moveSnake2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runSnake(canvasContainer) {
  var tileCount = _settings2.default.boardSize / _settings2.default.tileSize;
  var context = canvasContainer.getContext("2d");
  var snakeTrail = [{
    x: _settings2.default.startPositionX,
    y: _settings2.default.startPositionY
  }];
  var snakeSize = _settings2.default.startSize;
  var fruit = (0, _newFruit2.default)(tileCount, snakeTrail);
  var directionX = _settings2.default.directionX,
      directionY = _settings2.default.directionY;


  canvasContainer.width = _settings2.default.boardSize;
  canvasContainer.height = _settings2.default.boardSize;

  setInterval(function () {
    var _moveSnake = (0, _moveSnake3.default)(snakeTrail, directionX, directionY),
        newHeadPosition = _moveSnake.newHeadPosition,
        isCollision = _moveSnake.isCollision;

    snakeTrail.push((0, _checkBounds2.default)(newHeadPosition, tileCount));

    if (isCollision) {
      snakeSize = _settings2.default.startSize;
    }

    if (newHeadPosition.x === fruit.xValue && newHeadPosition.y === fruit.yValue) {
      snakeSize++;
      fruit = (0, _newFruit2.default)(tileCount, snakeTrail);
    }

    while (snakeTrail.length > snakeSize) {
      snakeTrail.shift();
    }

    (0, _drawFrame2.default)(context, snakeTrail, fruit, _settings2.default);
  }, _settings2.default.refreshRate);

  document.addEventListener("keydown", function (event) {
    var pressedKey = event.which || event.keyCode;
    var prevDirection = { directionX: directionX, directionY: directionY };

    var _decodeKey = (0, _decodeKey3.default)(pressedKey, prevDirection);

    directionX = _decodeKey.directionX;
    directionY = _decodeKey.directionY;
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _snake = __webpack_require__(0);

var _snake2 = _interopRequireDefault(_snake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var canvasContainer = document.querySelector('#game');

  (0, _snake2.default)(canvasContainer);
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkBounds;
function checkBounds(newHeadPosition, tileCount) {
  var x = newHeadPosition.x,
      y = newHeadPosition.y;


  if (x >= tileCount) {
    x = 0;
  }

  if (x < 0) {
    x = tileCount - 1;
  }

  if (y >= tileCount) {
    y = 0;
  }

  if (y < 0) {
    y = tileCount - 1;
  }

  return { x: x, y: y };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeKey;
function decodeKey(key, prevDirection) {
  var keyMap = {
    '37': {
      directionX: -1,
      directionY: 0
    },
    '38': {
      directionX: 0,
      directionY: -1
    },
    '39': {
      directionX: 1,
      directionY: 0
    },
    '40': {
      directionX: 0,
      directionY: 1
    }
  };

  var newDirection = keyMap[key] || prevDirection;

  if (newDirection.directionX === -prevDirection.directionX || newDirection.directionY === -prevDirection.directionY) {
    return prevDirection;
  }

  return newDirection;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawFrame;
function drawFrame(context, snakeTrail, fruit, settings) {
  var tileSize = settings.tileSize,
      boardSize = settings.boardSize,
      bgColor = settings.bgColor,
      snakeColor = settings.snakeColor;

  context.fillStyle = bgColor;
  context.fillRect(0, 0, boardSize, boardSize);
  context.fillStyle = snakeColor;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = snakeTrail[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var snakePart = _step.value;

      context.fillRect(snakePart.x * tileSize, snakePart.y * tileSize, tileSize - 1, tileSize - 1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  context.fillStyle = fruit.color;
  context.fillRect(fruit.xValue * tileSize, fruit.yValue * tileSize, tileSize, tileSize);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveSnake;
function moveSnake(snakeTrail, directionX, directionY) {
  var headPosition = snakeTrail.slice(-1)[0];
  var newHeadPosition = {
    x: headPosition.x + directionX,
    y: headPosition.y + directionY
  };

  var isCollision = snakeTrail.some(function (element) {
    if (newHeadPosition.x === element.x && newHeadPosition.y === element.y) {
      return true;
    }

    return false;
  });

  return { newHeadPosition: newHeadPosition, isCollision: isCollision };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fewFruit;
var fruitColors = ['#f00', '#00f', '#ff0', '#551A8B'];

function fewFruit(tileCount, snakeTrail) {
  var emptyTiles = [];

  var _loop = function _loop(xCoord) {
    var _loop2 = function _loop2(yCoord) {
      var isSnake = snakeTrail.some(function (element) {
        if (xCoord === element.x && yCoord === element.y) {
          return true;
        }

        return false;
      });

      if (!isSnake) {
        emptyTiles.push({ xValue: xCoord, yValue: yCoord });
      }
    };

    for (var yCoord = 0; yCoord < tileCount; yCoord++) {
      _loop2(yCoord);
    }
  };

  for (var xCoord = 0; xCoord < tileCount; xCoord++) {
    _loop(xCoord);
  }

  var newFruit = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];

  newFruit.color = fruitColors[Math.floor(Math.random() * fruitColors.length)];

  return newFruit;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var settings = {
  boardSize: 400,
  tileSize: 20,
  startPositionX: 10,
  startPositionY: 10,
  bgColor: '#000',
  snakeColor: '#0f0',
  startSize: 3,
  directionX: 1,
  directionY: 0,
  refreshRate: 1000 / 15
};

exports.default = settings;

/***/ })
/******/ ]);