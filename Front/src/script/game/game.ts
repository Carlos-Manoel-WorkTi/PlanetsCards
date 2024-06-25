import DATA_CARDS from "../data";
import clock from "./clock";
import ActiveMenu from "./menu";
import CardClass from "./cards";
import generateList from "./generateList";
import turnCard from "./turnCard";
import life from "./lifes";
import restart from "./restart";

clock.createClock();


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
const Container_clock = document.getElementById("rest_lives") as HTMLElement;

// EVENTS
window.document.addEventListener("DOMContentLoaded", () => {
  
  const rootGame = document.getElementById('root_game') as HTMLElement;
    
  // Adicionando o conteúdo como o primeiro filho do elemento 'root_game'
  rootGame.insertAdjacentHTML('afterbegin', `
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
  `);
  
  
  renderCards();
  alter_show_difficult();
  life.LoadFirstLife();

  setTimeout(()=>{
    (document.getElementById('load') as HTMLElement).remove()
    // clock.start();
  },1500)
});


btn_menu.addEventListener("click", (event) => ActiveMenu(event, clock));
Container_Cards_easy?.addEventListener("click", turnCard);
Container_Cards_normal?.addEventListener("click", turnCard);
Container_Cards_hard?.addEventListener("click", turnCard);
Container_clock.addEventListener("change", () => {
  checkTime();
  console.log(1);
});
btn_restart.addEventListener("click", (x) => restart(clock));

function renderCards() {
  const level = JSON.parse(localStorage.getItem("infoGame") || "");

  checkDifficult(level.difficult!);

  setTimeout(() => {
    planets.map((obj) => {
      const model_card = new CardClass(obj.name, obj.image, obj.id!, level.difficult!);
      const card = model_card.createCard();

      if (level.difficult == "easy") {
        (
          document.getElementById("container_cards_easy") as HTMLElement
        ).innerHTML += card;
        (
          document.getElementById("container_cards_easy") as HTMLElement
        ).addEventListener("click", turnCard);
      }
      if (level.difficult == "normal") {
        (
          document.getElementById("container_cards_normal") as HTMLElement
        ).innerHTML += card;
        (
          document.getElementById("container_cards_normal") as HTMLElement
        ).addEventListener("click", turnCard);
      }
      if (level.difficult == "hard") {
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

function checkTime() {
  // console.log(clock.timeOver);
}

const efeitos = [
  {
    id: "nave-space-1",
    delay: 2000,
    time: 3000,
    link_img: "./public/game/nave.png",
  },
  {
    id: "nave-space-2",
    delay: 7000,
    time: 7000,
    link_img: "./public/game/nave.png",
  },
  {
    id: "alien",
    delay: 13000,
    time: 12000,
    link_img: "./public/game/alien.png",
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

function alter_show_difficult() {
  const dif = JSON.parse(localStorage.getItem("infoGame") || "");
  const element = document.getElementById("shower_difficult")!;


  if (dif.difficult) {
    element.innerText = dif.difficult.charAt(0).toUpperCase() + dif.difficult.slice(1);
    switch (dif.difficult.toLowerCase()) {
      case "hard":
        element.style.color = "#9c0404";
        break;
      case "normal":
        element.style.color = "#4270be";
        break;
      case "easy":
        element.style.color = "green";
        break;
      default:
        element.style.color = "black";
    }
  } else {
    element.innerText = "";
  }
}
