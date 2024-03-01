const planets = [
  {
    name: "Mercúrio",
    image: "../../public/game/CardsIMG/mercurio.png",
  },
  {
    name: "Terra",
    image:
      "../../public/game/CardsIMG//terra.png",
  },
  {
    name: "Marte",
    image:
      "../../public/game/CardsIMG/marte.png",
  },
  {
    name: "Júpiter",
    image: "../../public/game/CardsIMG/jpt.png",
  },
  {
    name: "Saturno",
    image:
      "../../public/game/CardsIMG/saturno.png",
  },
  {
    name: "Urano",
    image:
      "../../public/game/CardsIMG/urano.png",
  },
  {
    name: "Netuno",
    image:
      "../../public/game/CardsIMG/netuno.png",
  },
  {
    name: "Plutão",
    image:
      "../../public/game/CardsIMG/",
  },
  {
    name: "Ceres",
    image:
      "../../public/game/CardsIMG/ceres.png",
  },
  {
    name: "Éris",
    image:
      "../../public/game/CardsIMG/eris.png",
  },
  {
    name: "Sol",
    image:
      "../../public/game/CardsIMG/sol.png",
  },
  {
    name: "Haumea",
    image:
      "../../public/game/CardsIMG/haumea.png",
  },
  {
    name: "Makemake",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplanetas.fandom.com%2Fpt-br%2Fwiki%2FMakemake&psig=AOvVaw2BTxbdyOEbtgqJ-lAxOEiU&ust=1709329569819000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCioYHD0YQDFQAAAAAdAAAAABAE",
  },
  {
    name: "Gonggong",
    image: "https://i.ytimg.com/vi/QYkR7r5Xz14/hqdefault.jpg",
  },
  {
    name: "Vênus",
    image:
      "https://uploads.metropoles.com/wp-content/uploads/2021/07/26170510/venus-em-virgem-17876.jpg",
  },
  {
    name: "Mercúrio",
    image: "../../public/game/CardsIMG/mercurio.png",
  },
  {
    name: "Terra",
    image:
      "../../public/game/CardsIMG//terra.png",
  },
  {
    name: "Marte",
    image:
      "../../public/game/CardsIMG/marte.png",
  },
  {
    name: "Júpiter",
    image: "../../public/game/CardsIMG/jpt.png",
  },
  {
    name: "Saturno",
    image:
      "../../public/game/CardsIMG/saturno.png",
  },
  {
    name: "Urano",
    image:
      "../../public/game/CardsIMG/urano.png",
  },
  {
    name: "Netuno",
    image:
      "../../public/game/CardsIMG/netuno.png",
  },
  {
    name: "Plutão",
    image:
      "../../public/game/CardsIMG/",
  },
  {
    name: "Ceres",
    image:
      "../../public/game/CardsIMG/ceres.png",
  },
  {
    name: "Éris",
    image:
      "../../public/game/CardsIMG/eris.png",
  },
  {
    name: "Sol",
    image:
      "../../public/game/CardsIMG/sol.png",
  },
  {
    name: "Haumea",
    image:
      "../../public/game/CardsIMG/haumea.png",
  },
  {
    name: "Makemake",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplanetas.fandom.com%2Fpt-br%2Fwiki%2FMakemake&psig=AOvVaw2BTxbdyOEbtgqJ-lAxOEiU&ust=1709329569819000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCioYHD0YQDFQAAAAAdAAAAABAE",
  },
  {
    name: "Gonggong",
    image: "https://i.ytimg.com/vi/QYkR7r5Xz14/hqdefault.jpg",
  },
  {
    name: "Vênus",
    image:
      "https://uploads.metropoles.com/wp-content/uploads/2021/07/26170510/venus-em-virgem-17876.jpg",
  }
  
];

console.log(planets);

console.log(planets);

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
  link_img: string;

  constructor(name_class: string, img: string) {
    this.name = name_class;
    this.link_img = img;
  }

  public createCard() {
    return `
      <div class="${this.name} card flipped ">
      <div class="card-front" style="background-image: url('${this.link_img}');"></div>
      <div class="card-back"></div>
      </div>
    `;
  }
}

function renderCards() {
  setTimeout(() => {
    planets.map((obj) => {
      const model_card = new CardClass(obj.name, obj.image);
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
