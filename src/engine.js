export default class Engine {
  constructor(draw, update) {
    this.frameRate = 30;
    this.timePerFrame = 1000 / frameRate; // ms per frame

    this.prevTime;
    this.lagTime;
    this.curTime;
    this.elapsedTime;

    this.drawFn = draw;
    this.updateFn = update;
  }

  startEngine() {
    prevTime = Date.now();
    lagTime = 0;
    requestAnimationFrame(loop);
  }

  loop() {
    requestAnimationFrame(loop);

    curTime = Date.now();
    elapsedTime = curTime - prevTime;
    prevTime = curTime;
    lagTime += elapsedTime;

    // update # of times possible based lag time vs framerate
    while (lagTime >= timePerFrame) {
      this.updateFn();
      lagTime -= this.timePerFrame;
    }

    this.drawFn();
  }
}
