import Engine from './engine.js';
const canvas = document.getElementById('gamefield');
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext('2d');

const draw = (ctx) => {
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0);
};
const engine = new Engine();
