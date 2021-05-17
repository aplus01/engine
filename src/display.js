export default class Display {
  constructor(canvasId, width, height) {
    this.canvas = document.getElementById(canvasId);
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
  }
  drawBgColor = (color) => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  drawRect = (rect) => {
    this.ctx.fillStyle = rect.color;
    this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  };
}
