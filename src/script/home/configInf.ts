export default function configInf(e: Event) {
  const element = e.target as HTMLElement;

  element.classList.remove("config_effect_Up");
  element.classList.add("config_effect_In");

  const main = document.querySelector("main") as HTMLElement;

  const Element = `
      <div id="bloco_config" class="config_Enter_In">
          <div id="header_config">
              <h1 id="logo_config">PlanetsCard</h1>
              <button class="close-button btn_close_config" aria-label="Close"></button>
            </div>
            <div id="body_config">
                    <ul>
                        <li><a href="#">Conta</a></li>
                        <li><a href="#">Perfil</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </div>
      </div>

  `;
  const div = document.createElement("div");

  div.id = "container_config";

  div.innerHTML = Element;

  main.insertAdjacentElement("beforebegin", div);

  const bloco = div.querySelector("#bloco_config") as HTMLElement;
  const btn_close_config = document.querySelector(
    ".btn_close_config"
  ) as HTMLElement;

  // bloco.classList.add("config_Enter_In");
  // EVENT
  btn_close_config.addEventListener("click", () => {
    bloco.classList.remove("config_Enter_In");
    bloco.classList.add("config_Enter_Out");
    element.classList.remove("config_effect_In");
    element.classList.add("config_effect_Up");

    setTimeout(() => div.remove(), 900);
  });
}

function createElement() {}
