/**
 * Checks the board bounds and wraps snake on the other side.
 * @param  {Object} newHeadPosition Tile coords of snakes head.
 * @param  {Number} tileCount       Number of tiles on board axis (total tiles = tileCount^2)
 * @return {Object}                 New head coords.
 */
export default function checkBounds(newHeadPosition, tileCount) {
  let { x, y } = newHeadPosition;

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

  return { x, y };
}
