var Arriba = 38;
var Abajo = 40;
var moveL = 37;
var moveR = 39;

function Player(game) {
    this.game = game;
    this.score = 0;
    
    this.width = 100;
    this.height = 160;
    
    this.x = (game.canvas.width / 2) - (this.width/2);
    this.y = game.canvas.height - this.height;
    
    
    this.y0 = this.game.canvas.height * 0.8;
    
    
    this.img = new Image();
    this.img.src = 'img/arboles.png';

    // ctx.drawImage(this.img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    
    this.img.frames = 3;
    this.img.frameIndex = 0;



    this.vx = 40; //velocidad de movimiento

    this.bullets = [];

    this.setListeners(); //escucha el teclado
}

Player.prototype.drawPlayer = function () {     //Colisiones
    this.game.ctx.drawImage(                    //cambia las imagenes entre las dos
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / this.img.frames,
        this.img.height,
        this.x, this.y, this.width, this.height);

}
Player.prototype.setListeners = function () {
    document.onkeydown = function (e) {
        e.preventDefault();

        /* switch(e.keyCode) {                        // movimiento en x del arbolito
               case izq: this.x -= this.vx;
               break;
               case drch: this.x += this.vx;
               break;*/
        switch (e.keyCode) {
            case moveL:
                if ((this.x - this.vx) >= 0) {
                    this.x -= this.vx;
                }
                break;

            case moveR:
                if ((this.x + this.vx) + this.width <= this.game.canvas.width ) { //movimiento drch y le restas ls px de la figura
                    this.x += this.vx;
                }
                break;
        }
    }.bind(this)
}

