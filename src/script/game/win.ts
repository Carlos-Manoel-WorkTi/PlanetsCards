import clock from "./clock";

interface clock_interface {
    createClock(): void; 
    start(): void;   
    pauseTimer(): void;
    
}
function createElement(N:string,xp:string,time:number){
  const div_winner = `    <section class="winner-section">
<div class="content">
    <div class="winner-info">
        <h1 id="Logo_winner">PlanetsCard</h1>
        <h2 id="winner-titulo">Voce venceu</h2>
        <p>Time: <span id="GotTIme">${time}</span></p>
        <p>XP: <span id="xp">${xp}</span></p>
        <p>Dificuldade: <span id="difficulty">${N}</span></p>
    </div>
    <div class="buttons">
        <button id="replay-btn">Sair</button>
        <button id="exit-btn">Repetir</button>
    </div>
</div>
</section>`
  return  div_winner
}

export default function win(win: boolean,time:clock_interface) {
  if (win) {
    const stopTime:number = time.pauseTimer()
    
    const level = localStorage.getItem("difficult");

    if (level == "easy") {
       document.body.innerHTML += createElement('facil',"100",(stopTime / 60))
console.log("TEMPO:", stopTime);
                                
    }
    if (level == "normal") {
       console.log("Ganhou no modo normal");
console.log("TEMPO:", stopTime);

    }
    if (level == "hard") {
       console.log("Ganhou no modo dificil");
console.log("TEMPO:", stopTime);

    }
  }
}
