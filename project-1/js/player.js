var Arriba = 38;
var Abajo = 40;
var izq = 37;
var drch= 39;

function Player(game) {
    this.game = game;

    this.w = 100;
    this.h = 135;
    
    this.x = game.canvas.width/2;
    this.y = game.canvas.height - this.h;
    
    
    this.y0 = this.game.canvas.height * 0.8;
    
  
    this.img = new Image();
    this.img.src = 'img/arbol1.png';

    
  
    this.vy = 10;
  
    this.bullets = [];
  
    this.setListeners(); //escucha el teclado
}

Player.prototype.drawPlayer = function (){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

}
Player.prototype.setListeners = function(){
    document.onkeydown = function (e){
        e.preventDefault();

        

        }
    }.bind(this)
}