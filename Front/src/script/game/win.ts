
import { getTokenFromCookie } from "../cookies";
import life from "./lifes";

interface clock_interface {
  createClock(): void;
  start(): void;
  pauseTimer(): number;
  getTime(): number;
  getRestTime(): number;
}
function  createElement(dificudade:string,rt:number,tt:number,rv:number,tv:number,xp:number, time:String) {
  const section = document.createElement("section") as HTMLFormElement;
  section.classList.add("winner-section");
  

  const winner:boolean = (rt && rv) != 0;


  const Checkwinner = winner ? ` 
  <div id="titulo_winner" >
        <img src="./public/game/winner/stars_right.svg" class="animate__animated animate__rotateInDownLeft" style="margin-top: -9px;" alt="little star">
        <h3 class="animate__animated animate__rotateIn">Parabens</h3>               
        <img src="./public/game/winner/starts.left.svg" class="animate__animated animate__rotateInDownRight" alt="little star">
      </div>` : `<div id="titulo_winner" >
      <h4 class="animate__animated animate__rotateIn">Que pena! <span style="color:white">:(<span></h3>               
  </div>`;

const effect = ` <div class="confetti">
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
      </div>`

  const div_winner = `   
 
  <div id="container_winner">
        ${winner ? effect : ''}  
      
        <div id="header_winner">
            <img class="start animate__animated animate__rubberBand" src="./public/game/winner/star.svg" alt="photo of a star">
            ${Checkwinner}          
            <img class="start animate__animated animate__rubberBand" src="./public/game/winner/star.svg" alt="photo of a star">
        </div>
        <div id="subtitle" class="">
            <h5 class="animate__animated animate__bounce">Resultados:</h5>
            <h1 class="animate__animated animate__tada">PlanetCards</h1>
        </div>
        <div id="inf_game">
            <li class="animate__animated animate__backInLeft 
        "><span class="labal_inf_game">Tempo: <span id="tempo_game" class="${winner ? 'win_color' : 'lose_color'}"> ${time}</span></span></li>
            <li class="animate__animated animate__backInLeft"><span class="labal_inf_game" >Vidas: <span id="vidas_game" class="${winner ? 'win_color' : 'lose_color'}">${rv}/${tv}</span></span></li>
            <li class="animate__animated animate__backInLeft"><span class="labal_inf_game" class="${winner ? 'win_color' : 'lose_color'}">Dificuldae: <span id="dificuldade_game" class="${winner ? 'win_color' : 'lose_color'}">${dificudade}</span></span></li>
            <li class="animate__animated animate__backInLeft"><span class="labal_inf_game">Xp: <span id="xp_game" class="${winner ? 'win_color' : 'lose_color'}">${xp}</span></span></li>
        </div>
        <div id="footer_winner">
            <img class="start animate__animated animate__rubberBand" src="./public/game/winner/star.svg" alt="photo of a star">
            <div style="margin-top: -18px; display: flex; align-items: center; gap: 30px;">
                <img id="replay-btn" style="margin-top: 10px;" src="./public/game/winner/icon_retry.svg" alt="">
                <img id="exit-btn" src="./public/game/winner/icon_forward.svg" alt="">
            </div>
            <img class="start animate__animated animate__rubberBand"  src="./public/game/winner/star.svg" alt="little star">
        </div>
       </div>

  
`;
  section.innerHTML = div_winner

  // EVENTS
  section.addEventListener("click", (element) => {
    const current_element = element.target as HTMLElement;
    if (current_element) {
      if (current_element.id == "exit-btn") {
        window.location.href = "http://127.0.0.1:5500/Front/";
      }
      if (current_element.id == "replay-btn") {
        window.location.reload();
      }
    }
  });

  return section;
}

function calculeTime(scd: clock_interface) {
  let time = scd.pauseTimer();
  if (time >= 60) {
    const min = time / 2;
    const sec = time % min;
    return `${min >= 10 ? min : "0" + min}:${sec}`;
  }

  return `00:${time > 9 ? time : "0" + time}`;
}








export default async function win(win: boolean, time: clock_interface) {
  
  if (win) {
    const timeEnd = calculeTime(time);

    const tk = getTokenFromCookie()
    
    const level = JSON.parse(localStorage.getItem("infoGame") || "0");
    console.log();
    
    const data_inf = {
      rest_time: time.getRestTime() / 1000,
      total_time: time.getTime(),
      rest_life: life.restLives,
      total_lives: life.qtd_lives_init,
      difficult: level.difficult
     }
  
// console.log(data_inf);

      
    try{
      const response = await fetch('http://localhost/PLC/Back/api/Routes/Match/setHistory/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${tk}`
        },
        body: JSON.stringify(data_inf)
      });
      
      const data = await response.json();
      console.log(data);
          
      document.body.append(createElement(data.difficulty,data.rest_time,data.total_time,data.rest_life,data.total_lives,data.xp,timeEnd)); 
      
      
    }catch(e){
      console.log('error win',e);
      
    }     

  }
}
