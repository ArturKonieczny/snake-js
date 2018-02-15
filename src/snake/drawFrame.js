export default function drawFrame(context, snakeTrail, fruit, settings) {
  const { tileSize, boardSize, bgColor, snakeColor } = settings;
  context.fillStyle = bgColor;
  context.fillRect(0, 0, boardSize, boardSize);
  context.fillStyle = snakeColor;
  for (const snakePart of snakeTrail) {
    context.fillRect(snakePart.x * tileSize, snakePart.y * tileSize, tileSize - 1, tileSize -1);
  }
  context.fillStyle = fruit.color;
  context.fillRect(fruit.xValue * tileSize, fruit.yValue * tileSize, tileSize, tileSize);
}
