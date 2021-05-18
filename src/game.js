export default class Game {
  constructor(width, height) {
    this.worldWidth = width;
    this.worldHeight = height;

    // "physics"
    this.gravity = 3; // number of pixels to move down y-axis by
    this.friction = 0.89; // factor to decrese speed by
    this.acceleration = 7; // number of pixels to move on x-axis
    this.jumpHeight = 40; // number of pixels to move on y-axis

    this.grass = {
      x: 0,
      y: height - 100,
      w: width,
      h: 30,
      color: 'rgba(60,179,113,.7)',
    };

    this.ground = {
      x: 0,
      y: height - 100,
      w: width,
      h: 100,
      color: 'rgba(255,165,0,.5)',
    };

    this.player = {
      x: width * 0.5 - 25,
      y: height - 50 - 100,
      w: 50,
      h: 50,
      color: 'red',
      speedX: 0,
      speedY: 0,
      jumping: false,
    };
  }

  updateWorld() {
    this.player.speedY += this.gravity;
    this.updatePlayer();

    this.player.speedX *= this.friction;
    this.player.speedy *= this.friction;
  }

  jump() {
    if (!this.player.jumping) {
      this.player.jumping = true;

      this.player.speedY = -this.jumpHeight;
    }
  }

  moveLeft() {
    this.player.speedX = -this.acceleration;
  }
  moveRight() {
    this.player.speedX = this.acceleration;
  }

  updatePlayer() {
    this.player.x += this.player.speedX;
    this.player.y += this.player.speedY;

    if (this.player.y + this.player.h >= this.grass.y) {
      this.player.y = this.worldHeight - 50 - 100;
      this.player.jumping = false;
    }

    if (this.player.x <= 0 - this.player.w) {
      this.player.x = this.worldWidth;
    }

    if (this.player.x >= this.worldWidth + this.player.w) {
      this.player.x = 0;
    }
  }
}
