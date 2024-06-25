import CardClass from "./cards";

// interface Clock extends CardClass {
//   time: number;
//   current_time: number;
//   pause: boolean;
//   intervalId: number;

//   createClock?(): void;
//   start?(): void;
//   pauseTimer?(): void;
//   stop?(): void;
// }
interface Clock {
  start(): void;
  pauseTimer(): void;
  stop(): void;
}
export default function ActiveMenu(e: Event, time: Clock) {
  time.pauseTimer!();

  const nav: HTMLElement = document.createElement("nav");
  nav.id = "container_menu";

  const ul = document.createElement("ul");

  const menuItems = [
    { name: "Coninuar", id: "menu_continue" },
    { name: "Recomeçar", id: "menu_reload" },
    { name: "Sair", id: "menu_left" },
  ];

  for (const item of menuItems) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item.name;
    span.id = item.id; // Assign unique IDs directly
    li.appendChild(span);
    ul.appendChild(li);

    //EVENTS
    span.addEventListener("click", (event) => {
      span.id == "menu_continue" ? Continuar(time, nav) : "";
      span.id == "menu_reload" ? restart() : "";
      span.id == "menu_left" ? Leave() : "";
    });
  }

  // Append the ul to nav before insertion
  nav.appendChild(ul);

  // Cast to a more specific type if available
  (document.getElementById("header_game") as HTMLDivElement).appendChild(nav);
}

function Continuar(time: Clock, element?: HTMLElement) {
  element?.remove();
  time.start!();
}
function restart() {
  window.location.reload();
}
function Leave() {
  window.location.href = "http://127.0.0.1:5500/Front/";
}
