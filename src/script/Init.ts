const start = document.getElementById("btn_start") as HTMLElement;

function StartGame(): void {
    setTimeout(()=>{
         window.location.href = "http://127.0.0.1:5500/src/pages/game.html";
    },1000)
 
}

start.addEventListener("click", StartGame);
