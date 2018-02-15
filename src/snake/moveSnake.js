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
