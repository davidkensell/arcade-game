// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
  };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // if run off screen, restart at random speed from 100-300
    if (this.x >= 505) {
      this.x = -101;
      this.speed = Math.floor(Math.random() * 200) + 100;
    };
  };

// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
};

// Random speed from 100-300
// let randSpeed = Math.floor(Math.random() * 200) + 100;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x, y) {
  this.sprite = 'images/char-princess-girl.png';
  this.x = x;
  this.y = y;
  };

  update (dt) {
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  handleInput(key) {
    if (key == 'left'){
      this.x -= 101;
    };
    if (key == 'up'){
      this.y -= 83;
    };
    if (key == 'right'){
      this.x += 101;
    };
    if (key == 'down'){
      this.y += 83;
    };
  };
};

// need input handler


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Engine says col * 101, row * 83 img 101x171, canvas 505x606
// rows: 83, 166, 249? looks off with bugs
//TODO: randomize enemy creation and push into array
var allEnemies = [new Enemy(101, 83, 100), new Enemy(202, 166, 200), new Enemy(303, 249, 300)];
let player = new Player(208, 404);
// add enemy locations?


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
