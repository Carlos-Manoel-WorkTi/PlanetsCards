import clock from "./clock";
import win from "./win";
import life from "./lifes";

type Compare = {
  name: string;
  id: string;
};

let Corrects: Compare[] = [];

function compareBetween(firstOpt: Compare, secondOpt: Compare): boolean {
  const Step_One = firstOpt.id == secondOpt.id;
  const Step_Two = firstOpt.name == secondOpt.name;
  return !Step_One && Step_Two ? true : false;
}

function winnerEffect(firstElement: HTMLElement, secondElement: HTMLElement) {
  firstElement.classList.add("cardRight");
  secondElement.classList.add("cardRight");
}

export default function turnCard(card: Event) {
  // BUG
  if (
    Corrects &&
    ((card.target as HTMLElement).id == "container_cards_hard" ||
      (card.target as HTMLElement).id == "container_cards_easy")
  )
    return;

  setTimeout(() => {
    if(!clock.isOn()) clock.start();
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
            if (card.target.classList.contains("accept")) return;

            Corrects.push({
              name: (card.target!.parentNode as HTMLElement).classList[0],
              id: (card.target!.parentNode as HTMLElement).id,
            });
          }

          //REMOVE THE FLIP CLASS

          if (Corrects.length == 2) {
            if (Corrects[0].id == Corrects[1].id) {
              Corrects.pop();
              return;
            }

            //  COMPARE BETWEEN LIST
            const Accept_card: boolean = compareBetween(
              Corrects[0],
              Corrects[1]
            );

            // GET THE ELEMENTS CARDS
            const list_of_cards = Array.from(
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

              //  ADD THE CLASS ACCEPT
              CardOne.classList.add("accept");
              CardSecond.classList.add("accept");
            } else {
              life.SubLife();
            }

            list_of_cards.forEach((element) => {
              // IF IT WAS OK THEN PUT THE CLASS ACCEPT
              if (!element.classList.contains("accept")) {
                element.classList.add("flipped");
              }

              // RESET THE CORRECTS
              Corrects = [];
            });
            const allCardsCorrect = list_of_cards.every((element) =>
              element.classList.contains("accept")
            );
            //CHECK IF LOST
            if (life.CurrentLives <= 0) {
              win(true, clock);
            }
            // IF THE PLAYER TO WIN
            if (allCardsCorrect) {
              win(allCardsCorrect, clock);
            }
          }
        }, 400);
      }
    }
  }, 100);
}
