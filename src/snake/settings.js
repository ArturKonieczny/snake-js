/**
 * boardSize: square board dimension
 * tileSize: size of a tile (board size should be a multiple of tileSize)
 * startPositionX/Y: starting position of snake head
 * bgColor: board color
 * snakeColor: snake color
 * startSize: snakes initial (default) tileSize
 * directionX/Y: starting movement direction
 * refreshRate: delay between drawing new frame
 */
const settings = {
  boardSize: 400,
  tileSize: 20,
  startPositionX: 10,
  startPositionY: 10,
  bgColor: '#000',
  snakeColor: '#0f0',
  startSize: 3,
  directionX: 1,
  directionY: 0,
  refreshRate: 1000/15
}

export default settings;
