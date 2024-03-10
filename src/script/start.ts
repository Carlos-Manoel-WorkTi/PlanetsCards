const ContainerDifficult = document.getElementById(
  "container-difficult"
) as HTMLElement;
const start = document.getElementById("btn_start") as HTMLElement;

function StartGame(): void {
  if(!localStorage.getItem('difficult')) {
    alert("Selecione um nivel")
    return
  }
  // setTimeout(() => {
  //   window.location.href = "../../game.html";
  // }, 1000);
}

// EVENTS
ContainerDifficult.addEventListener("click", alterDifficult);
start.addEventListener("click", StartGame);

// FUNCTION
function alterDifficult(e: Event): void {
  const element = e.target! as HTMLElement;

  if (element.classList.contains("choose-difficult")) {
    document.querySelectorAll(".choose-difficult").forEach((x) => {
      x.classList.remove("current-level");
    });
    element.classList.add("current-level");

    salveDifficult(element!.parentElement!.id)
  }
}

function salveDifficult(difficult: string) {
  localStorage.setItem("difficult", difficult);
}
