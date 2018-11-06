function Game(id) {

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.fps = 60;
    this.keyLeft = 37;
    this.keyRight = 39;

    this.background = new Background(this);
    this.player = new Player(this);
    this.raindrops = []
    this.counter = 0;

    this.random
}

Game.prototype.init = function () {
    setInterval(function () {
        this.counter++;
        this.drawAll();
        this.moveAll();

        if(this.counter %60 == 0){   //velocidad de la aparición de gotas
            this.gerateRain();}

        this.clearRaindrops();        //lo nombras para que te haga caso limpiar 
        
        if(this.isCollision()){         //añadir todo lo que quieras que pase cuando haga colision
            this.raindrops[0].hit = true; //Si existe una colision nos devuleve tru
            this.player.score += 2;         //suma +2 la vida
        } else {// lo que pasa si no pilla agua
            

        }
    }.bind(this), 1000 / this.fps)
}

Game.prototype.clearRaindrops = function() {                    //limpia el canvas
    this.raindrops = this.raindrops.filter(function(raindrops) {
      return raindrops.y < this.canvas.height; 
      
    }.bind(this));

  };

Game.prototype.drawAll = function () {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.raindrops.forEach(function(e, i){
        e.drawRaindrops();        
    }) 
}

Game.prototype.moveAll = function() {
    this.raindrops.forEach(function(e, i){
         e.moveRaindrops()
    }.bind(this));
}
Game.prototype.gerateRain = function(){
    this.raindrops.push(new Raindrops(this))    //dibuja el array vacio this.raindrops[]
}

Game.prototype.isCollision = function() { //pinta las colisiones
   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )   
    return this.raindrops.some(function(raindrop) {
      return (
        ((this.player.x + this.player.width) >= raindrop.x &&
         this.player.x <= (raindrop.x + raindrop.width) &&
         this.player.y + (this.player.height) >= raindrop.y&&
         raindrop.y +raindrop.height>=this.player.y)

      )
    }.bind(this));
}

