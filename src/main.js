import Display from './display.js';
import Engine from './engine.js';
import Game from './game.js';

const width = 800;
const height = 800;
const frameRate = 30;
const timePerFrame = 1000 / frameRate; // ms per frame
const display = new Display('gamefield', width, height);
const game = new Game(width, height);
const draw = () => {
  display.drawBgColor('#80808040');
  display.drawRect(game.ground);
  display.drawRect(game.player);
};

const update = () => {};

const engine = new Engine(timePerFrame, draw, update);

engine.startEngine();
