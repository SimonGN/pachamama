function Game(id) {

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.fps = 60;
    this.keyLeft = 37;
    this.keyRight = 39;

    this.background = new Background(this);
    this.player = new Player(this);
    this.live = new Live(this);
    this.fire = []
    this.raindrops = []
    this.counter = 0;
    this.time = 99;
    //this.random
    this.intervalId;
}


Game.prototype.init = function () {
    this.intervalId = setInterval(function () {
        this.counter++;
        this.drawAll();
        this.moveRaindrops();
        this.moveFire();

        this.stop()

        if(this.counter %60 == 0){   //velocidad de la aparición de gotas
            this.time--;
            this.generateRain()
            this.generateFire()
            ;}
        
        this.checkCollision(this.raindrops, "rain");
        this.checkCollision(this.fire, "fire");
        this.clearRaindrops();        //lo nombras para que te haga caso limpiar 
        this.clearFire();
        // console.log(this.raindrops)
        this.live.changeLive();
    }.bind(this), 1000 / this.fps)
}

Game.prototype.checkCollision = function (arrayColision, value){
    if(this.isCollision(arrayColision)){         //añadir todo lo que quieras que pase cuando haga colision
        if(value == "rain"){
            this.time += 2;         //suma +2 la vida
            this.player.img.frameIndex= 1;
        } else if("fire"){
            this.time -= 30;
            this.player.img.frameIndex= 2;
        }
        setTimeout(function(){              //reciba la segunda imagen y le aplica el tiempo en cambiar
            this.player.img.frameIndex=0;
        }.bind(this),500);
    } else {// lo que pasa si no pilla agua
    }
}

Game.prototype.clearRaindrops = function() {                    //limpia el canvas
    this.raindrops = this.raindrops.filter(function(raindrops) {
        
      return ((raindrops.y < this.canvas.height) && !raindrops.hit); 
      
    }.bind(this));

  };
Game.prototype.clearFire = function() {                    //limpia el canvas
    this.fire = this.fire.filter(function(fire) {
        
      return ((fire.y < this.canvas.height) && !fire.hit); 
      
    }.bind(this));

  };

Game.prototype.drawAll = function () {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.raindrops.forEach(function(e,){
        e.drawRaindrops();        
    }) 
    this.fire.forEach(function(e){
        e.drawFire();
    })
    this.live.drawLive();
    this.live.drawText();

}

Game.prototype.moveRaindrops = function() {           //Array de las gotas de agua
    this.raindrops.forEach(function(e,){
         e.moveRaindrops()
    }.bind(this));
}
Game.prototype.moveFire = function() {           //Array de las gotas de fuego
    this.fire.forEach(function(e,){
         e.moveFire()
    }.bind(this));
}
Game.prototype.generateRain = function(){
    this.raindrops.push(new Raindrops(this))    //dibuja el array vacio this.raindrops[]
}

Game.prototype.generateFire = function(){
    this.fire.push(new Fire(this))    //dibuja el array vacio this.raindrops[]
}

Game.prototype.isCollision = function(arrayColision) { //pinta las colisiones
   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )   
    return arrayColision.some(function(raindrop) {
        var colision = (this.player.x + this.player.width) >= raindrop.x &&
        this.player.x <= (raindrop.x + raindrop.width) &&
        this.player.y + (this.player.height) >= raindrop.y&&
        raindrop.y +raindrop.height>=this.player.y
        if(colision){
            raindrop.hit = true;
        }
      return colision;

      
    }.bind(this));
}


Game.prototype.stop= function() {
    if (this.time <= 0){
     clearInterval(this.intervalId)
    }
}