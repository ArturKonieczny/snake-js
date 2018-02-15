import settings from './settings';
import decodeKey from './decodeKey';
import newFruit from './newFruit';
import drawFrame from './drawFrame';
import checkBounds from './checkBounds';
import moveSnake from './moveSnake';

/**
 * Runs the game
 * @param  {HTML node} canvasContainer Canvas node
 */
export default function runSnake(canvasContainer) {
  const tileCount = settings.boardSize / settings.tileSize;
  const context = canvasContainer.getContext("2d");
  const snakeTrail = [{
    x: settings.startPositionX,
    y: settings.startPositionY
  }];
  let snakeSize = settings.startSize;
  let fruit = newFruit(tileCount, snakeTrail);
  let { directionX, directionY } = settings;

  canvasContainer.width = settings.boardSize;
  canvasContainer.height = settings.boardSize;

  setInterval(() => {
    const { newHeadPosition, isCollision } = moveSnake(snakeTrail, directionX, directionY);

    snakeTrail.push(checkBounds(newHeadPosition, tileCount));

    if (isCollision) {
      snakeSize = settings.startSize;
    }

    if (newHeadPosition.x === fruit.xValue && newHeadPosition.y === fruit.yValue) {
      snakeSize++;
      fruit = newFruit(tileCount, snakeTrail);
    }

    while (snakeTrail.length > snakeSize) {
      snakeTrail.shift();
    }

    drawFrame(context, snakeTrail, fruit, settings);

  }, settings.refreshRate);

  document.addEventListener("keydown",(event) => {
    const pressedKey = event.which || event.keyCode;
    const prevDirection = { directionX, directionY };

    ({ directionX, directionY } = decodeKey(pressedKey, prevDirection));
  });
}
