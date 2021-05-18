export default class Controller {
  constructor() {
    this.inputs = {
      ArrowLeft: {
        // keyPressed: false,
        active: false,
      },
      ArrowRight: {
        // keyPressed: false,
        active: false,
      },
      ArrowUp: {
        // keyPressed: false,
        active: false,
      },
      ArrowDown: {
        // keyPressed: false,
        active: false,
      },
      Space: {
        // keyPressed: false,
        active: false,
      },
    };
  }

  keyUpDown = (keyEvent) => {
    // if not up,left, right or space then exit
    if (!Object.keys(this.inputs).includes(keyEvent.code)) return;

    // is key up or key down
    var isKeyDown = keyEvent.type == 'keydown' ? true : false;

    const pressedKey = this.inputs[keyEvent.code];

    // true if key in event was recently pressed down
    // if it has been down then false
    // pressedKey.keyPressed = isKeyDown && !pressedKey.active;

    // is key in event currently down
    pressedKey.active = isKeyDown;
  };
}
