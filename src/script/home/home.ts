import { generateUser } from "./perfil";
import configInf from "./configInf";

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
  if (!localStorage.getItem("difficult")) {
    alert("Selecione um nivel");
    e.preventDefault();
  }
}

function salveLife() {
  localStorage.setItem("qtd_life", "20");
}
// EVENTS

ContainerDifficult.addEventListener("click", alterDifficult);
link_start.addEventListener("click", StartGame);
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
    localStorage.setItem("difficult", element!.parentElement!.id);
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

function CheckDifficult() {
  const dif = localStorage.getItem("difficult");

  if (dif) {
    (
      document.querySelector(`#${dif}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");
    localStorage.setItem("difficult", dif);
  } else {
    localStorage.setItem("difficult", "normal");
  }
}
