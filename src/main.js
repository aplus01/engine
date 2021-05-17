import Display from './display.js';
import Engine from './engine.js';

const frameRate = 30;
const timePerFrame = 1000 / frameRate; // ms per frame
const display = new Display('gamefield');

const draw = () => {
  display.drawColor('red');
};

const update = () => {};

const engine = new Engine(timePerFrame, draw, update);

engine.startEngine();
