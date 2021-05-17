export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ground = {
      x: 0,
      y: height - 100,
      w: width,
      h: 100,
      color: '#00FFFF20',
    };

    this.player = {
      x: width * 0.5 - 25,
      y: height - 50 - 100,
      w: 50,
      h: 50,
      color: 'red',
    };
  }
}
