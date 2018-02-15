const fruitColors = [
  '#f00',
  '#00f',
  '#ff0',
  '#551A8B'
];

export default function fewFruit(tileCount, snakeTrail) {
  const emptyTiles = [];
  for (let xCoord = 0; xCoord < tileCount; xCoord++) {
    for (let yCoord = 0; yCoord < tileCount; yCoord++) {
      const isSnake = snakeTrail.some((element) => {
        if (xCoord === element.x && yCoord === element.y) {
          return true;
        }

        return false;
      });

      if (!isSnake) {
        emptyTiles.push({xValue: xCoord, yValue: yCoord});
      }
    }
  }

  const newFruit = emptyTiles[Math.floor(Math.random()*emptyTiles.length)];

  newFruit.color = fruitColors[Math.floor(Math.random()*fruitColors.length)];

  return newFruit;
}
