const fruitColors = [
  '#f00',
  '#00f',
  '#ff0',
  '#551A8B'
]

export default function newFruit(tileCount) {
  const xValue = Math.floor(Math.random()*tileCount);
  const yValue = Math.floor(Math.random()*tileCount);
  const color = fruitColors[Math.floor(Math.random()*fruitColors.length)];
  return { xValue, yValue, color}
}
