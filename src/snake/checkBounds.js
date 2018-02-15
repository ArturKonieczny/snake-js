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

  return { x, y};
}
