import { generateUser } from "./perfil";
import configInf from "./configInf";
import InformUser from "../date_storage";

document.addEventListener("DOMContentLoaded", () => {
  CheckDifficult();
  generateUser();
  salveLife();
});

const ContainerDifficult = document.getElementById(
  "container-difficult"
) as HTMLElement;

const link_start = document.getElementById("link_start") as HTMLElement;

const btn_config = document.getElementById("config_svg");

function StartGame(e: Event): void {
  const dif_ok = JSON.parse(localStorage.getItem("infoGame") || '')
  if (dif_ok.difficult == '') {
    alert("Selecione um nível");
    e.preventDefault();
  }
}

function salveLife() {
  InformUser.qtd_life = "10";
  saveGameData();
}

function salveTime() {
  const choose_time = document.getElementById("tempo") as HTMLSelectElement;

  if (choose_time.selectedIndex !== -1) {
    InformUser.time = choose_time.options[choose_time.selectedIndex].value;
    saveGameData();
  }
}

// EVENTS

ContainerDifficult.addEventListener("click", alterDifficult);
link_start.addEventListener("click", (x) => {
  salveTime();
  StartGame(x);
});
btn_config?.addEventListener("click", configInf);

// FUNCTION
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

// function CheckDifficult() {
//   const gameDataString = localStorage.getItem("infoGame");
//   if (gameDataString) {
//     const gameData = JSON.parse(gameDataString);
//     InformUser.difficult = gameData.difficult || "normal";
//     InformUser.qtd_life = gameData.qtd_life || "10";
//     InformUser.time = gameData.time || "";
//   } else {
//     saveGameData();
//   }
// }
function CheckDifficult() {
  const dif = JSON.parse(localStorage.getItem("infoGame")!);
  InformUser.difficult = dif.difficult || "normal";
  if (dif) {
    (
      document.querySelector(`#${dif.difficult}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");
  } else {
    (
      document.querySelector(`#${dif.difficult}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");
    saveGameData()
  }
}
