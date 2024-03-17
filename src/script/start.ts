import HandlePerfil from "./perfil";

const ContainerDifficult = document.getElementById(
  "container-difficult"
) as HTMLElement;
const start = document.getElementById("btn_start") as HTMLElement;
const link_start = document.getElementById("link_start") as HTMLElement;
const perfil = document.querySelector(".user") as HTMLElement;

// EVENTS
perfil.addEventListener("click", HandlePerfil);

function StartGame(e: Event): void {
  if (!localStorage.getItem("difficult")) {
    alert("Selecione um nivel");
    e.preventDefault();
  }
}

// EVENTS
ContainerDifficult.addEventListener("click", alterDifficult);
link_start.addEventListener("click", StartGame);
document.addEventListener("DOMContentLoaded", () => CheckDifficult());

// FUNCTION
function alterDifficult(e: Event): void {
  const element = e.target! as HTMLElement;
  const show_dif = document.getElementById("show_difficult");

  if (element.classList.contains("choose-difficult")) {
    document.querySelectorAll(".choose-difficult").forEach((x) => {
      x.classList.remove("current-level");
    });

    element.classList.add("current-level");
    localStorage.setItem("difficult", element!.parentElement!.id);
    show_dif!.innerText = element!.parentElement!.id;
  }
}

function CheckDifficult() {
  const dif = localStorage.getItem("difficult");
  console.log(dif);

  console.log(document.querySelector(`#${dif}`) as HTMLElement);

  if (dif) {
    (
      document.querySelector(`#${dif}`) as HTMLElement
    ).firstElementChild!.classList.add("current-level");
    localStorage.setItem("difficult", dif);
  } else {
    localStorage.setItem("difficult", "normal");
  }
}
