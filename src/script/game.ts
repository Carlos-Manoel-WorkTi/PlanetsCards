import DATA_CARDS from "./data";
import clock from "./clock";
import ActiveMenu from "./menu";
import CardClass from "./cards";
import generateList from "./generateList";

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
const Container_Cards_easy = document.getElementById(
  "container_cards_easy"
) as HTMLElement;
const Main = document.querySelector("#main") as HTMLElement;

// EVENTS
btn_menu.addEventListener("click", (event) => ActiveMenu(event, clock));
Container_Cards_easy?.addEventListener("click", turnCard);
Container_Cards_hard?.addEventListener("click", turnCard);

window.document.addEventListener("DOMContentLoaded", renderCards);
btn_restart.addEventListener("click", restart);

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
  if (level == "hard") {
    container.id = "container_cards_hard";
  }
}
function turnCard(card: Event) {
  // BUG
  if (
    Corrects &&
    ((card.target as HTMLElement).id == "container_cards_hard" ||
      (card.target as HTMLElement).id == "container_cards_easy")
  )
    return;

  setTimeout(() => {
    //CHECK IF THERE'S THE FLIP CLASS
    if (
      !(card.target as HTMLElement).classList.contains("flipped") &&
      !(card.target as HTMLElement).parentElement!.classList.contains("accept")
    ) {
      if (
        card &&
        card.target instanceof Element &&
        card.target.parentNode instanceof Node
      ) {
        //  ADD THE FLIP CLASS
        (card.target.parentNode as HTMLElement).classList.remove("flipped");

        setTimeout(() => {
          // ADD IN THE LIST_OF_CARDS
          if (
            card &&
            card.target instanceof Element &&
            card.target.parentNode instanceof Node
          ) {
            if (card.target.classList.contains("accept"))
              console.log(card.target);
            Corrects.push({
              name: (card.target!.parentNode as HTMLElement).classList[0],
              id: (card.target!.parentNode as HTMLElement).id,
            });
          }

          //REMOVE THE FLIP CLASS

          if (Corrects.length >= 2) {
            if (Corrects[0].id == Corrects[1].id) {
              Corrects.pop();
              return;
            }
            setTimeout(() => {}, 500);
            //  COMPARE BETWEEN LIST
            const Accept_card: boolean = compareBetween(
              Corrects[0],
              Corrects[1]
            );

            // GET THE ELEMENTS CARDS
            const list_of_cards_hard = Array.from(
              document.getElementsByClassName("card")
            );
            // CHECK IF IT'S OK
            if (Accept_card) {
              // Salve the current cards
              const CardOne = document.getElementsByClassName(
                `${Corrects[0].name}`
              )[0] as HTMLElement;

              const CardSecond = document.getElementsByClassName(
                `${Corrects[1].name}`
              )[1] as HTMLElement;

              // ADD THE WINNER EFFECT
              winnerEffect(
                CardOne.querySelector(".card-front")!,
                CardSecond.querySelector(".card-front")!
              );
              const list_cards_turned = document.querySelectorAll(".accept");
              checkWins(list_cards_turned);

              //  ADD THE CLASS ACCEPT
              CardOne.classList.add("accept");
              CardSecond.classList.add("accept");
            }
            list_of_cards_hard.forEach((element) => {
              let ok: boolean = false;
              // IF IT WAS OK THEN PUT THE CLASS ACCEPT
              if (!element.classList.contains("accept")) {
                element.classList.add("flipped");
              } 
              console.log(ok);

              // Reset the Corrects
              Corrects = [];
            });
          }
        }, 500);
      }
    }
  }, 100);
}

function compareBetween(firstOpt: Compare, secondOpt: Compare): boolean {
  const Step_One = firstOpt.id == secondOpt.id;
  const Step_Two = firstOpt.name == secondOpt.name;
  return !Step_One && Step_Two ? true : false;
}
function checkWins(list_cards_turned) {
  if (list_cards_turned.length > 0) {
    alert("great");
  }
}
function winnerEffect(firstElement: HTMLElement, secondElement: HTMLElement) {
  firstElement.classList.add("cardRight");
  secondElement.classList.add("cardRight");
}

function restart() {
  clock.pauseTimer();
  const Element = `<div id="menu_restart"><button class="btn_restart" id="cancel_restart">Continuar</button><button class="btn_restart"
 id="ok_restart">Reiniciar</button></div>`;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = Element;
  const Root = document.getElementById("root_game") as HTMLAreaElement;
  Root.insertBefore(tempDiv.firstChild!, Root.firstChild);

  const Init_Restart = document.getElementById("ok_restart");
  const cancelButton = document.getElementById("cancel_restart");
  Init_Restart?.addEventListener("click", () => location.reload());
  cancelButton?.addEventListener("click", () => {
    document.getElementById("menu_restart")?.remove();
    clock.start();
  });
}

const efeitos = [
  {
    id: "nave-space-1",
    delay: 2000,
    time: 3000,
    link_img: "../../public/game/nave.png",
  },
  {
    id: "nave-space-2",
    delay: 7000,
    time: 7000,
    link_img: "../../public/game/nave.png",
  },
  {
    id: "alien",
    delay: 13000,
    time: 12000,
    link_img: "../../public/game/alien.png",
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
