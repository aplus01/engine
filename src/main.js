import Controller from './controller.js';
import Display from './display.js';
import Engine from './engine.js';
import Game from './game.js';

const width = 800;
const height = 800;
const frameRate = 30;
const timePerFrame = 1000 / frameRate; // ms per frame
const display = new Display('gamefield', width, height);
const game = new Game(width, height);
const controller = new Controller();

const draw = () => {
  display.drawBgColor('#80808040');
  display.drawRect(game.ground);
  display.drawRect(game.grass);
  display.drawRect(game.player);
};

const update = () => {
  if (controller.inputs.ArrowLeft.active) game.moveLeft();
  if (controller.inputs.ArrowRight.active) game.moveRight();
  if (controller.inputs.ArrowUp.active) {
    game.jump();
    controller.inputs.ArrowUp.active = false;
  }
  game.updateWorld();
};

const engine = new Engine(timePerFrame, draw, update);

document.addEventListener('keydown', controller.keyUpDown);
document.addEventListener('keyup', controller.keyUpDown);

engine.startEngine();
