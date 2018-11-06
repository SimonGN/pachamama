function Game(id) {

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.fps = 60;
    this.keyLeft = 37;
    this.keyRight = 39;

    this.background = new Background(this);
    this.player = new Player(this)
}

Game.prototype.init = function () {

    setInterval(function () {
     
        this.drawAll();
    }.bind(this), 1000 / this.fps)

}



Game.prototype.drawAll = function () {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.raindrops.drawraindrops();
}