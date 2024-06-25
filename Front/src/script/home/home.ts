// IMPORTS
import configInf from "./configInf";

import { applyContent, getTokenFromCookie, getUserFromCookie } from "../cookies";

let InformUser = {
  difficult: "normal",
  qtd_life: "20",
  time: "20",
};

const ContainerDifficult = document.getElementById(
  "container-difficult"
) as HTMLElement;

const link_start = document.getElementById("link_start") as HTMLElement;

const btn_config = document.getElementById("config_svg");

// EVENTS
document.addEventListener("DOMContentLoaded", () => {
  applyContent();
  CheckDifficult();
});

ContainerDifficult.addEventListener("click", alterDifficult);

link_start.addEventListener("click", (x) => {
  x.preventDefault()
  salveTime();
  StartGame(x);
  (document.getElementById('container-difficult') as HTMLElement).innerHTML = `
  <div id="load">
    <div id="page">
      <div id="container-effect">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
          <div id="h3">loading</div>
      </div>
    </div> 
  </div> 
    `

 
});

btn_config?.addEventListener("click", configInf);

// FUNCTIONS
function StartGame(e: Event): void {
  const user = getUserFromCookie();

  if (user === null ) {
   
    
    e.preventDefault();
    applyContent();
    return;
  }
  
  if(user.cod == "" || user.id == "null"){
  
    alert("Faça login")
      window.location.href = "http://127.0.0.1:5500/Front/login.html"
  }
  // user.sign ? "" : e.preventDefault();
  
  const dif_ok = JSON.parse(localStorage.getItem("infoGame") || "");
  if (dif_ok.difficult == "") {
    alert("Selecione um nível");
    e.preventDefault();
  }
  salveLife(dif_ok.difficult);

  // INIT THE GAME
  setInterval(()=>{
    window.location.href = './game.html'
  },1200)

}

function salveLife(e: string) {
  console.log(e);

  switch (e) {
    case "hard":
      InformUser.qtd_life = "30";
      break;
    case "normal":
      InformUser.qtd_life = "20";
      break;
    case "easy":
      InformUser.qtd_life = "10";
      break;
    default:
      InformUser.qtd_life = "20";
  }
  saveGameData();
}

function salveTime() {
  const choose_time = document.getElementById("tempo") as HTMLSelectElement;

  if (choose_time.selectedIndex !== -1) {
    InformUser.time = choose_time.options[choose_time.selectedIndex].value;
    saveGameData();
  }
}
function alterDifficult(e: Event): void {
  const element = e.target! as HTMLElement;
  const show_dif = document.getElementById("show_difficult")!;

  if (element.classList.contains("choose-difficult")) {
    document.querySelectorAll(".choose-difficult").forEach((x) => {
      x.classList.remove("current-level");
    });

    element.classList.add("current-level");
    InformUser.difficult = element!.parentElement!.id;
    saveGameData();
    show_dif!.innerText =
      element!.parentElement!.id.charAt(0).toUpperCase() +
      element!.parentElement!.id.slice(1);

    switch (show_dif.innerText) {
      case "Hard":
        show_dif.style.color = "#9c0404";
        break;
      case "Normal":
        show_dif.style.color = "#4270be";
        break;
      case "Easy":
        show_dif.style.color = "green";
        break;
      default:
        // Defina uma cor padrão aqui, se desejar
        show_dif.style.color = "";
    }
  }
}

function saveGameData() {
  const gameData = {
    difficult: InformUser.difficult,
    qtd_life: InformUser.qtd_life,
    time: InformUser.time,
  };

  const gameDataString = JSON.stringify(gameData);
  localStorage.setItem("infoGame", gameDataString);
}

function CheckDifficult() {
  const show_dif = document.getElementById("show_difficult")!;
  const dif = JSON.parse(localStorage.getItem("infoGame")!);

  InformUser.difficult = dif.difficult || "normal";

  if (dif.difficult) {
    (
      document.querySelector(`#${dif.difficult}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");

    show_dif.innerText = dif.difficult;

    switch (show_dif.innerText) {
      case "hard":
        show_dif.style.color = "#9c0404";
        break;
      case "normal":
        show_dif.style.color = "#4270be";
        break;
      case "easy":
        show_dif.style.color = "green";
        break;
      default:
        // Defina uma cor padrão aqui, se desejar
        show_dif.style.color = "";
    }
  } else {
    (
      document.querySelector(`#${dif.difficult}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");
    saveGameData();
  }
}
