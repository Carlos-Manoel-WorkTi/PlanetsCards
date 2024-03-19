interface clock_interface {
    createClock(): void; 
    start(): void;   
    pauseTimer(): void;
    
}

export default function win(win: boolean,time:clock_interface) {
  if (win) {
    const stopTime = time.pauseTimer()
    
    const level = localStorage.getItem("difficult");

    if (level == "easy") {
       console.log("Ganhou no modo easy");
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
