window.onload = function(){
    document.getElementById("llamada").onclick = function(){
        window.location.reload();
    }
    document.getElementById("buttonPlay").onclick = function(){
        startGame();
    }
    
}

function startGame(){
    console.log("hola");
    var game = new Game("canvas");
    var img =  document.getElementById("img-delete");
    var canvas = document.getElementById("canvas");
    img.className = "display";
    canvas.className = "show";
    game.init();
}
