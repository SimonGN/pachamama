function Background(game) {
    this.img = new Image();
    this.img.src = "img/background2.jpg";
    this.game = game;
    this.ctx = game.ctx;
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 600;
    this.dx = 6;
  }
  Background.prototype.drawBackground = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  }

  Background.prototype.move = function() {
    this.x -= this.dx;
    if (this.x < -this.game.canvas.width) this.x = 0;
  }