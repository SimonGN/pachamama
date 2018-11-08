window.onload = function(){
    document.getElementById("llamada").onclick = function(){   //hacemos onclick y se para
        window.location.reload();
    }
    document.getElementById("buttonPlay").onclick = function(){   //hacemos onclick y se para
        startGame();
    }
    
}

function startGame(){
    console.log("hola");
    var game = new Game("canvas");
    var img =  document.getElementById("img-delete"); //cambio una imagen por otra con el boton play
    var canvas = document.getElementById("canvas");
    img.className = "display";
    canvas.className = "show";
    game.init();
}
