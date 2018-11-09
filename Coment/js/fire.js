function Fire(game) {
    this.img = new Image();
    this.img.src = 'img/fire.png';
    this.game = game;
    this.ctx = game.ctx;

    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 50;
    this.hit = false;

  

    this.x =Math.floor(Math.random() * (game.canvas.width - this.width)) ;
    this.y = game.canvas.height - 600;
    
    
    this.y0 = game.canvas.height * 0.8;
    


    this.bullets = [];
}

Fire.prototype.drawFire = function () {
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
        

Fire.prototype.moveFire = function () {
    this.y += 12;  //velocidad de movimiento
}
