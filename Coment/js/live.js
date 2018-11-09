
function Live (game){
    this.img = new Image();
    this.img.src = 'img/live.png';
    this.game = game;
    this.ctx = game.ctx;

    this.width = 35;
    this.height = 70;
    this.x = (this.game.canvas.width - this.width)-10;
    this.y = 10

    this.img.frames = 3;
    this.img.frameIndex = 0;
}


Live.prototype.drawLive = function () {
    this.ctx.drawImage(                    //cambia las imagenes entre las tres
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / this.img.frames,
        this.img.height,
        this.x, this.y, this.width, this.height);
}

Live.prototype.drawText = function() {
    this.ctx.font = '30px serif';
    this.ctx.fillText(this.game.time, this.x-50 , this.y + 47);
}

//Live.prototype.drawAll = function(){
//}

Live.prototype.changeLive = function () {
    if (this.game.time >= 75){
        this.img.frameIndex =0;
    } else if(this.game.time >= 30){
        this.img.frameIndex = 1;
    }else{
        this.img.frameIndex=2
    }
} 

