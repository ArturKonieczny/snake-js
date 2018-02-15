/**
 * Translate the pressed key into movement direction.
 * @param  {String} key           Pressed key code.
 * @param  {Object} prevDirection Current movement direction.
 * @return {Object}               Returns new dirrection or prev direction if its invalid.
 */
export default function decodeKey(key, prevDirection) {
  const keyMap = {
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
  }

  const newDirection = keyMap[key] || prevDirection;

  if (newDirection.directionX === -prevDirection.directionX || newDirection.directionY === -prevDirection.directionY) {
    return prevDirection;
  }

  return newDirection;
}
