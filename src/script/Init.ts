const ContainerDifficult = document.getElementById(
  "container-difficult"
) as HTMLElement;
const start = document.getElementById("btn_start") as HTMLElement;

function StartGame(): void {
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/src/pages/game.html";
  }, 1000);
}

// EVENTS
ContainerDifficult.addEventListener("click", alterDifficult);
start.addEventListener("click", StartGame);

// FUNCTION
function alterDifficult(e: Event): void {
  console.log(e.target);
}
console.log(111122441);
const q = 2;
// alert(q);
