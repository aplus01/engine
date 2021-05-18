export default class Engine {
  constructor(timePerFrame, draw, update) {
    this.timePerFrame = timePerFrame; // ms per frame

    this.prevTime; // ticks of last loop
    this.lagTime; // number of ticks until next frame
    this.curTime; // current number of ticks
    this.elapsedTime; // number of ticks since last loop

    this.drawFn = draw; // function responsible for drawing game elements
    this.updateFn = update; // function responsible for updating game elements position, speed,  etc.
  }

  startEngine() {
    this.prevTime = Date.now();
    this.lagTime = 0;
    requestAnimationFrame(this.runLoop);
  }

  runLoop = () => {
    this.loop();
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
