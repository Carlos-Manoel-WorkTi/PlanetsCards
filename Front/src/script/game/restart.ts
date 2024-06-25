interface clock_interface {
    createClock(): void; 
    start(): void;   
    pauseTimer(): void;
    
}

export default function restart(clock:clock_interface) {
    clock.pauseTimer();
    const Element = `<div id="menu_restart"><button class="btn_restart" id="cancel_restart">Continuar</button><button class="btn_restart"
   id="ok_restart">Reiniciar</button></div>`;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = Element;
    const Root = document.getElementById("root_game") as HTMLAreaElement;
    Root.insertBefore(tempDiv.firstChild!, Root.firstChild);
  
    const Init_Restart = document.getElementById("ok_restart");
    const cancelButton = document.getElementById("cancel_restart");
    Init_Restart?.addEventListener("click", () => location.reload());
    cancelButton?.addEventListener("click", () => {
      document.getElementById("menu_restart")?.remove();
      clock.start();
    });
  }