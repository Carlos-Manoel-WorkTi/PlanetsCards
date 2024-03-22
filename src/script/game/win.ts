import clock from "./clock";

interface clock_interface {
  createClock(): void;
  start(): void;
  pauseTimer(): number;
}
function createElement(N: string, xp: string, time: string) {
  const section = document.createElement("section") as HTMLFormElement;
  section.classList.add("winner-section");
  const div_winner = `   
<div class="content">
    <div class="winner-info">
        <h1 id="Logo_winner">PlanetsCard</h1>
        <h2 id="winner-titulo">Voce venceu</h2>
        <p>Time: <span id="GotTIme">${time}</span></p>
        <p>XP: <span id="xp">${xp}</span></p>
        <p>Dificuldade: <span id="difficulty">${N}</span></p>
    </div>
    <div class="buttons">
        <button id="exit-btn">Sair</button>
        <button id="replay-btn">Repetir</button>
    </div>
</div>
`;
  section.innerHTML = div_winner

  // EVENTS
  section.addEventListener("click", (element) => {
    const current_element = element.target as HTMLElement;
    if (current_element) {
      if (current_element.id == "exit-btn") {
        window.location.href = "/";
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

export default function win(win: boolean, time: clock_interface) {
  if (win) {
    const TimeEnd = calculeTime(time);

    const level = JSON.parse(localStorage.getItem("infoGame") || "0");

    if (level.difficult == "easy") {
      document.body.append(createElement("facil", "100", TimeEnd));
    }
    if (level.difficult == "normal") {
      console.log("Ganhou no modo normal");
      document.body.append(createElement("normal", "200", TimeEnd));
    }
    if (level.difficult == "hard") {
      console.log("Ganhou no modo dificil");
      document.body.append(createElement("dificil", "350", TimeEnd));
    }
  }
}
