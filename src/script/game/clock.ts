class CLOCK {
  private time: number = 0; // Tempo em segundos
  private current_time: number = 0;
  private pause: boolean = false;
  private intervalId: NodeJS.Timeout | null = null; // ID do intervalo para atualização do tempo

  constructor(initialTime: number) {
    this.time = initialTime;
    this.current_time = initialTime;
  }

  // Método para criar o elemento do relógio na página
  createClock(): void {
    const container = document.createElement("div");
    container.id = "container_time";
    container.innerHTML = `
        <img id="watch" src="../../public/game/watch.svg" alt="">
        <span id="time">${this.formatTime()}</span>
      `;
    (document.getElementById("menu") as HTMLElement).insertAdjacentElement(
      "afterend",
      container
    );
  }

  // Método para iniciar o cronômetro
  start(): void {
    this.time = this.current_time;
    this.pause = false
   

    if (!this.pause) {
      this.intervalId = setInterval(() => {
        this.time++;
        this.updateTime();
      }, 1000);
    }
  }

  // Método para pausar o cronômetro
  pauseTimer():Number {
    this.current_time = this.time;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.pause = true;
    }
    return this.current_time 
  }

  // Método para parar o cronômetro
  stop(): void {
    this.pauseTimer();
    this.time = 0;
    this.updateTime();
  }

  // Método para atualizar o tempo exibido na página
  private updateTime(): void {
    const timeElement = document.getElementById("time");
    if (timeElement) {
      timeElement.innerText = this.formatTime();
    }
  }

  // Método para formatar o tempo em HH:MM:SS
  private formatTime(): string {
    const minutes = Math.floor((this.time % 3600) / 60);
    const seconds = this.time % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  // Método auxiliar para adicionar zero à esquerda se o valor for menor que 10
  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

// Exemplo de uso:
const clock = new CLOCK(0);
export default clock;
