const planets: string[] = [
  "Mercúrio",
  "Terra",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno",
  "Plutão",
  "Ceres",
  "Éris",
  "Sol",
  "Haumea",
  "Makemake",
  "Gonggong",
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno",
  "Plutão",
  "Ceres",
  "Éris",
  "Haumea",
  "Makemake",
  "Gonggong",
  "Sol",
];
let Corrects: string[] = [];
const Card = document.getElementsByClassName("card") as HTMLCollection;
const Container_Cards = document.getElementById(
  "container_cards"
) as HTMLElement;

// EVENTS
Container_Cards.addEventListener("click", turnCard);
window.document.addEventListener("DOMContentLoaded", renderCards);

// console.log(planets);

class CardClass {
  name: string;

  constructor(name_class: string) {
    this.name = name_class;
  }

  public createCard() {
    return `
      <div class="${this.name} card flipped ">
        <div class="card-front"></div>
        <div class="card-back"></div>
      </div>
    `;
  }
}

function renderCards() {
  setTimeout(() => {
    planets.map((name) => {
      const model_card = new CardClass(name);
      const card = model_card.createCard();
      Container_Cards.innerHTML += card;
      // console.log(new_card);
    });
  }, 1000);
}

function turnCard(card: Event) {
  //CHECK IF THERE'S THE FLIP CLASS
  if (!(card.target as HTMLElement).classList.contains("flipped")) {
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
          Corrects.push((card.target!.parentNode as HTMLElement).classList[0]);
        }

        //REMOVE THE FLIP CLASS

        if (Corrects.length >= 2) {
          //  COMPARE BETWEEN LIST
          const Accept_card: boolean = compareBetween(Corrects[0], Corrects[1]);
          // GET THE ELEMENTS CARDS
          const list_of_cards = Array.from(
            document.getElementsByClassName("card")
          );
          list_of_cards.forEach((element) => {
            // CHECK IF IT'S OK
            if (Accept_card) {
              (
                document.getElementsByClassName(
                  `${Corrects[0]}`
                )[0] as HTMLElement
              ).classList.add("accept");
              (
                document.getElementsByClassName(
                  `${Corrects[0]}`
                )[1] as HTMLElement
              ).classList.add("accept");
            }
            // IF IT WAS OK THEN PUT THE CLASS ACCEPT
            if (!element.classList.contains("accept")) {
              element.classList.add("flipped");
            }
          });

          // Reset the Corrects
          Corrects = [];
        }
      }, 500);
    }
  }
}

function compareBetween(firstOpt: string, secondOpt: string): boolean {
  return firstOpt === secondOpt;
}
