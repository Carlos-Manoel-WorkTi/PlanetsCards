import DATA_CARDS from "./data";
import clock from "./clock";
import ActiveMenu from "./menu";
import CardClass from "./cards";
import generateList from "./generateList";
import turnCard from "./turnCard";
import restart from "./restart";


clock.createClock();
clock.start();

type Planet = {
  name: string;
  image: string;
  id?: string;
};
type Compare = {
  name: string;
  id: string;
};

const planets = generateList(DATA_CARDS);

let Corrects: Compare[] = [];
const btn_restart = document.getElementById("btn_repeat") as HTMLElement;
const btn_menu = document.getElementById("menu") as HTMLElement;
const Container_Cards_hard = document.getElementById(
  "container_cards_hard"
) as HTMLElement;
const Container_Cards_normal = document.getElementById(
  "container_cards_normal"
) as HTMLElement;
const Container_Cards_easy = document.getElementById(
  "container_cards_easy"
) as HTMLElement;
const Main = document.querySelector("#main") as HTMLElement;

// EVENTS
btn_menu.addEventListener("click", (event) => ActiveMenu(event, clock));
Container_Cards_easy?.addEventListener("click", turnCard);
Container_Cards_normal?.addEventListener("click", turnCard);
Container_Cards_hard?.addEventListener("click", turnCard);

window.document.addEventListener("DOMContentLoaded", renderCards);
btn_restart.addEventListener("click", x => restart(clock));

function renderCards() {
  const level = localStorage.getItem("difficult");

  checkDifficult(level!);

  setTimeout(() => {
    planets.map((obj) => {
      const model_card = new CardClass(obj.name, obj.image, obj.id!, level!);
      const card = model_card.createCard();

      if (level == "easy") {
        (
          document.getElementById("container_cards_easy") as HTMLElement
        ).innerHTML += card;
        (
          document.getElementById("container_cards_easy") as HTMLElement
        ).addEventListener("click", turnCard);
      }
      if (level == "normal") {
        (
          document.getElementById("container_cards_normal") as HTMLElement
        ).innerHTML += card;
        (
          document.getElementById("container_cards_normal") as HTMLElement
        ).addEventListener("click", turnCard);
      }
      if (level == "hard") {
        (
          document.getElementById("container_cards_hard") as HTMLElement
        ).innerHTML += card;
        (
          document.getElementById("container_cards_hard") as HTMLElement
        ).addEventListener("click", turnCard);
      }
    });
  }, 1000);
}

function checkDifficult(level: string) {
  const container = document.querySelector(".container") as HTMLElement;

  if (level == "easy") {
    container.id = "container_cards_easy";
  }
  if (level == "normal") {
    container.id = "container_cards_normal";
  }
  if (level == "hard") {
    container.id = "container_cards_hard";
  }
}







const efeitos = [
  {
    id: "nave-space-1",
    delay: 2000,
    time: 3000,
    link_img: "./../../public/game/nave.png",
  },
  {
    id: "nave-space-2",
    delay: 7000,
    time: 7000,
    link_img: "./../../public/game/nave.png",
  },
  {
    id: "alien",
    delay: 13000,
    time: 12000,
    link_img: "./../../public/game/alien.png",
  },
];

function criarNave(id: string, img: string): HTMLImageElement {
  const nave = document.createElement("img");
  nave.setAttribute("src", img);
  nave.id = `${id}`;
  return nave;
}

function efeitoAleatorio() {
  efeitos.forEach((element) => {
    setTimeout(() => {
      const root = document.getElementById("root_game") as HTMLElement;

      // const efeito = efeitos[Math.floor(Math.random() * efeitos.length)];

      const nave = criarNave(element.id, element.link_img);

      root.insertAdjacentElement("afterbegin", nave);

      // Remove the nave after 5 seconds
      setTimeout(() => {
        nave.remove();
      }, element.time);
    }, element.delay);
  });
}

efeitoAleatorio();

setInterval(efeitoAleatorio, 30000);
