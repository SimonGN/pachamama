function Raindrops(game) {
    this.img = new Image();
    this.img.src = 'img/gota.png';
    this.game = game;
    this.ctx = game.ctx;

    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 160;
    this.dx = 6;
    this.x = game.canvas.width / 2;
    this.y = game.canvas.height - this.height;
    
    
    this.y0 = game.canvas.height * 0.8;
    


    this.vx = 10; //velocidad de movimiento

    this.bullets = [];
}

Raindrops.prototype.drawRaindrops = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}