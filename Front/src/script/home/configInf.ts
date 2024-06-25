// import doLogout from "../doLogout"
import doLogout from '../logout/logout'
import {renderProfileFull} from '../profile/perfilFull'

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
                        <li><a href="#" id="perfilfull">Perfil</a></li>
                        <li><a href="http://127.0.0.1:5500/Front/login.html">Historico</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="./../../../about.html">Sobre</a></li>
                        <li><a href="#" id="logout">Sair</a></li>
                    </ul>
                </div>
      </div>

  `;

  const element_confir_logout = `        <div id="container_confirm">
  <div id="container_confirm2">
       <h6>Tem certeza que desejar sair da conta?</h6>
       <div id="btns_confirm_logout">    
          <button id="btnyes">SIM</button>
          <button id="btnnot">NÂO</button>
      </div>
  </div>

</div>`
  const div = document.createElement("div");

  div.id = "container_config";

  div.innerHTML = Element;

  main.insertAdjacentElement("beforebegin", div);

  const bloco = div.querySelector("#bloco_config") as HTMLElement;
  const btn_close_config = document.querySelector(
    ".btn_close_config"
  ) as HTMLElement;

  const btn_perfil_full = div.querySelector('#perfilfull') as HTMLElement;
  const btn_sair = div.querySelector('#logout') as HTMLElement;


  btn_perfil_full.addEventListener('click',renderProfileFull);

  btn_sair.addEventListener('click',(e:Event)=>{
    e.preventDefault()
    
    main.insertAdjacentHTML("afterbegin",element_confir_logout)

    
   
    const btn_yes = document.getElementById('btnyes');
    const btn_not = document.getElementById('btnnot');

    btn_yes?.addEventListener('click', () => {
      
        doLogout()
       
    });

    btn_not?.addEventListener('click', () => {
        const container_confirm = document.getElementById('container_confirm');
        if (container_confirm) {
            container_confirm.remove();
        }
    });
  })
  
  // EVENT
  btn_close_config.addEventListener("click", () => {
    bloco.classList.remove("config_Enter_In");
    bloco.classList.add("config_Enter_Out");
    element.classList.remove("config_effect_In");
    element.classList.add("config_effect_Up");

    setTimeout(() => div.remove(), 900);
  });
}


