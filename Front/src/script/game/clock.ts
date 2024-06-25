import win from "./win";

interface clock_interface {
  createClock(): void;
  start(): void;
  pauseTimer(): number;
  getRestTime(): number;
}

class CLOCK implements clock_interface {
  private time: number = 0;
  private current_time: number = 0;
  private pause: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;
  private time_init:number = 0;
  private clockOn: boolean = false;
  
  constructor(initialTime: number) {
    this.time = initialTime * 1000; 
    this.current_time = initialTime * 1000; 
    this.time_init = initialTime;
  }

  start(): void {
    this.clockOn = true
    this.time = this.current_time;
    this.pause = false;

    if (!this.pause) {
      const startTime = Date.now();
      this.intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        this.current_time = this.time - elapsedTime;
        if (this.current_time <= 0) {
          this.current_time = 0;
          this.stop();
          win(true, clock);
        }
        this.updateTime();
      }, 10);
    }
  }

public isOn(){
    return this.clockOn;
  }

 public getTime(){
    return this.time_init;
  }
  getRestTime(){
    return this.current_time;
  }
  pauseTimer(): number {
    this.clockOn = false
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.pause = true;
    }
    return Math.ceil(this.current_time / 1000);
  }

  stop(): void {
    this.clockOn = false
    this.pauseTimer();
    this.time = 0;
    this.updateTime();
  }
  createClock(): void {
    const container = document.createElement("div");
    container.id = "container_time";
    const div_time = document.createElement("span");
    div_time.id = "time";
    div_time.innerHTML = this.formatTime();
    container.appendChild(div_time);
    (document.getElementById("menu") as HTMLElement).insertAdjacentElement(
      "afterend",
      container
    );
  }

  private updateTime() {
    const timeElement = document.getElementById("time");
    if (timeElement) {
      timeElement.innerHTML = this.formatTime();
    }
  }

  private formatTime(): string {
    const totalSeconds = Math.floor(this.current_time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = this.current_time % 1000;
    const div_time = `<span id='time_min_sec'>${this.padZero(
      minutes
    )}<span id='divisor_time'>:</span>${this.padZero(
      seconds
    )}<span id='divisor_time'>:</span></span><span id='time_mls'>${this.padZero(
      Math.floor(milliseconds / 10)
    )}0</span>`;

    return div_time;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
const prop = JSON.parse(localStorage.getItem("infoGame") || '0') 


const clock = new CLOCK(parseInt(prop.time));


export default clock;
