export default class Controller {
  constructor() {
    this.inputs = {
      ArrowLeft: {
        wasPressed: false,
        active: false,
      },
      ArrowRight: {
        wasPressed: false,
        active: false,
      },
      ArrowUp: {
        wasPressed: false,
        active: false,
      },
      ArrowDown: {
        wasPressed: false,
        active: false,
      },
      Space: {
        wasPressed: false,
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
    pressedKey.wasPressed = isKeyDown && !pressedKey.active;

    // is key in event currently down
    pressedKey.active = isKeyDown;
  };
}
