import baseDate from "../valoresteste";
import User from "../usertest";

if (User) {
  localStorage.setItem("Logado", JSON.stringify(User));
} else {
  localStorage.setItem("Logado", "");
}
const Logado = JSON.parse(localStorage.getItem("Logado")!);

export function HandlePerfil(event: Event): void {
  const div = document.createElement("div");

  const Element_perfil = `
  <div id="container_perfil">
  <div id="bloco_perfil">
  <div id="row_first">
  <div class="user_perfil">
  <img src="https://source.unsplash.com/random" alt="" class="user_img">
  <div class="user_inf">
  <div class="user_name_perfil">carlos</div>
              <div class="level_perfil">
              <span class="number">lv. 10</span>
                <div class="progress-container">
                  <div class="progress-bar">
                  <div class="progress"></div>
                  </div>
                  </div>
                  </div>
                  </div>
          </div>
          <div id="logo_and_close">
            <h1 id="logo_perfil">PlanetsCard</h1>
            <button class="close-button" aria-label="Close"></button>
          </div>
          </div>
        <div id="row_second">
          <!-- Adicione a tabela à segunda linha -->
        </div>
        </div>
    </div>
    `;

  div.innerHTML = Element_perfil;

  const Main = document.querySelector("main");

  Main?.insertAdjacentElement("afterbegin", div);

  const rowSecond = div.querySelector("#row_second");

  const table = generateTable();

  rowSecond?.appendChild(table);

  const Container_perfil = document.querySelector(
    "#container_perfil"
  ) as HTMLElement;
  const Btn_close = document.querySelector(".close-button") as HTMLElement;

  Btn_close.addEventListener("click", () => div.remove());

  Container_perfil.addEventListener("click", (e) => {
    const out = document.querySelector("#bloco_perfil");
    if ((e.target as HTMLDivElement).contains(out)) div.remove();
  });
}

function generateTable() {
  const table = document.createElement("table") as HTMLTableElement;
  const thead = document.createElement("thead") as HTMLTableSectionElement;
  const tbody = document.createElement("tbody") as HTMLTableSectionElement;

  const tr_head = document.createElement("tr") as HTMLTableRowElement;
  Object.keys(baseDate[0]).forEach((x) => {
    tr_head.innerHTML += `<th>${x}</th>`;
  });
  thead.append(tr_head);

  baseDate.forEach((x) => {
    const tr_body = document.createElement("tr") as HTMLTableRowElement;
    tr_body.innerHTML = `
          <td><span>${x.Dificuldade}</span></td>
          <td><span>${x.Data}</span></td>
          <td><span>${x.Tempo}</span></td>
          <td><span>${x.Xp}</span></td>`;
    tbody.append(tr_body);
  });

  table.append(thead);
  table.append(tbody);

  return table;
}
export function generateUser() {
  const Element =
    Logado?.nome != ""
      ? ` 
    <img src="https://source.unsplash.com/random" alt="" class="user_img">
    <div class="user_inf">
        <div class="user_name_perfil">${User.nome}</div>
        <div class="level_perfil">
            <span class="number">lv. ${User.level}</span>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
            </div>
        </div>
    </div>
`
      : `
    <a href='#' id='link_conta'>
<img class="custom-icon" src="https://cdn-icons-png.flaticon.com/128/2521/2521826.png" alt="">
<div class="custom-text">
    Criar conta
</div></a>
`;

  const div = document.createElement("div") as HTMLElement;
  Logado ? div.classList.add("user") : div.classList.add("custom-container");
  div.innerHTML = Element;

  const header = document.getElementById("header") as HTMLElement;
  header.insertAdjacentElement("afterbegin", div);

  if (Logado) {
    const perfil = document.querySelector(".user") as HTMLElement;
    const progress = document.querySelector(".progress") as HTMLElement;

    progress.style.width = `${CalculeXp(1000, User.total_xp)}%`;

    // EVENTS
    perfil.addEventListener("click", HandlePerfil);
  } else {
  }
}

function CalculeXp(total: number, total_xp: number): number {
  let porcentagem: number = total / total_xp;
  const porcentagemEmPercentual: number = (porcentagem / 100) * 100;
  porcentagem = Math.min(porcentagem, 100);
  console.log(porcentagemEmPercentual);

  return porcentagemEmPercentual;
}
