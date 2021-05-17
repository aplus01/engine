export default class Engine {
  constructor(timePerFrame, draw, update) {
    this.timePerFrame = timePerFrame; // ms per frame

    this.prevTime;
    this.lagTime;
    this.curTime;
    this.elapsedTime;

    this.drawFn = draw;
    this.updateFn = update;
  }

  startEngine() {
    this.prevTime = Date.now();
    this.lagTime = 0;
    requestAnimationFrame(this.runLoop);
  }

  runLoop = (timestep) => {
    this.loop(timestep);
  };

  loop() {
    requestAnimationFrame(this.runLoop);

    this.curTime = Date.now();
    this.elapsedTime = this.curTime - this.prevTime;
    this.prevTime = this.curTime;
    this.lagTime += this.elapsedTime;

    // update # of times possible based lag time vs framerate
    while (this.lagTime >= this.timePerFrame) {
      this.updateFn();
      this.lagTime -= this.timePerFrame;
    }

    this.drawFn();
  }
}
