import runSnake from './snake';

function init() {
  const canvasContainer = document.querySelector('#game');

  runSnake(canvasContainer);
}

document.addEventListener('DOMContentLoaded', init);
