/**
 * Calculate snakes new head position on board and check if it colides with its tail.
 * @param  {Array} snakeTrail   List of snakes body tiles.
 * @param  {Number} directionX  Movement direction on X axis.
 * @param  {Number} directionY  Movement direction on Y axis.
 * @return {Object}             New head coords + did it collide with body?
 */
export default function moveSnake(snakeTrail, directionX, directionY) {
  const headPosition = snakeTrail.slice(-1)[0];
  let newHeadPosition = {
    x: headPosition.x + directionX,
    y: headPosition.y + directionY
  }

  const isCollision = snakeTrail.some((element) => {
    if (newHeadPosition.x === element.x && newHeadPosition.y === element.y) {
      return true;
    }

    return false;
  });

  return { newHeadPosition, isCollision };
}
