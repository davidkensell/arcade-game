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

    // collision detection
    if (Math.abs(this.y - player.y) < 20) {
      let front = (this.x + 87); // width of bug in canvas
      if ((player.x < front) && (player.x + 75 >= this.x)) {
        console.log("collision" + this.x + this.y);
        player.reset();
      };
    };
    
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
    // Gameboard boundary
    if (this.x > 404) {
      this.x = 404;
    };
    if (this.x < 0) {
      this.x = 0;
    };
    if (this.y > 404) {
      this.y = 404;
    };
    // win alert on half sec delay for rendering
    if (this.y < -10) {
      this.y = -10; // prevent avalanche of confirm during delay
      setTimeout(function () {
        alert("You Win!\nWould you like to play again?");
        player.reset();
      }, 500);
    };
  };

  reset() {
    this.x = 202;
    this.y = 404;
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

// Now instantiate your objects.
// Engine says col * 101, row * 83 img 101x171, canvas 505x606

function addEnemy() {
  const yRows = [63, 146, 229]; //Stone rows w/bugs centered
  let randSpeed = Math.floor(Math.random() * 200) + 100;
  let randRow = yRows[Math.floor(Math.random() * yRows.length)];
  let newBug = new Enemy(-101, randRow, randSpeed);
  allEnemies.push(newBug);
};

// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(101, 63, 100), new Enemy(202, 146, 200), new Enemy(303, 229, 300)];
let player = new Player(202, 404);

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
