import generateTable from "../history";
import { getTokenFromCookie, updateUserCookie } from "../cookies";
import { renderProfileFull } from "./perfilFull";

window.addEventListener('DOMContentLoaded',async ()=>{
  const token = getTokenFromCookie();

  try {  
    const result = await fetch('http://localhost/PLC/Back/api/Routes/Profile/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await result.json();
    
  
    
    
    const user = {
      id: data.nick || 'null',
      nome: data.name || 'null',
      total_xp: data.xp,
      level: data.level, 
      progress: data.progress,
      imagem: data.photo || 'null',
      sign: data.sign || false,
      cod: token || ''
    };

      
     updateUserCookie(user)
    

    const Element = user.sign
      ? ` 
      <img src="${user.imagem}"  alt="" class="user_img">
      <div class="user_inf">
          <div class="user_name_perfil">${user.nome}</div>
          <div class="level_perfil">
              <span class="number">lv. ${user.level}</span>
              
                  <progress class="progress-bar" id="barra-progresso" value="${user.progress}" max="100"></progress>
          
          </div>
      </div>
  `
          : `
          <a href="http://127.0.0.1:5500/Front/login.html" id='link_conta'>
      <img class="custom-icon" src="https://cdn-icons-png.flaticon.com/128/2521/2521826.png" alt="">
      <div class="custom-text">
          Criar conta
      </div></a>
      `;
      // <div class="progress"></div>
    const div = document.createElement("div") as HTMLElement;
    user.sign
      ? div.classList.add("user")
      : div.classList.add("custom-container");
    div.innerHTML = Element;

    const header = document.getElementById("header") as HTMLElement;
    header.insertAdjacentElement("afterbegin", div);


    document.querySelector('.user')?.addEventListener('click', () => renderHistory(user.imagem,user.nome,user.progress,user.level))



  } catch(error) {
    const Element = `
    <a href='./../../../login' id='link_conta'>
<img class="custom-icon" src="https://cdn-icons-png.flaticon.com/128/2521/2521826.png" alt="">
<div class="custom-text">
    Criar conta
</div></a>
`
    const div = document.createElement("div") as HTMLElement;  
    div.classList.add("custom-container");
    div.innerHTML = Element;
    const header = document.getElementById("header") as HTMLElement;
    header.insertAdjacentElement("afterbegin", div);

    console.error('Error fetching user data:', error);
    throw error; 
  }


}) 


function renderHistory(img:string,name:string,progress:number,level:number){
  const div = document.createElement("div");

  const Element_perfil = `
  <div id="container_perfil">
    <div id="bloco_perfil">
      <div id="row_first">
        <div class="user_perfil">
                <img src="${img}"  alt="" class="user_img">
                <div class="user_inf">
                    <div class="user_name_perfil">${name}
                </div>
                <div class="level_perfil">
                    <span class="number">lv. ${level}</span>

                     <progress class="progress-bar" id="barra-progresso" value="${progress}" max="100"></progress>  
                </div>
                </div>
          <div id="logo_and_close">
                <div id="container_void">
                </div>
              <h1 id="logo_perfil">PlanetsCard</h1>
              <button class="close-button" aria-label="Close"></button>
        </div>
      </div>
      </div>
      <div id="row_second">
        <!-- Adicione a tabela à segunda linha -->
      </div>
    </div>
    `;

    div.innerHTML = Element_perfil;

    const Main = document.querySelector("main");

    Main?.insertAdjacentElement("afterbegin", div);

    Main?.querySelector(".user_inf")?.addEventListener("click",() => {
      renderProfileFull(false)
    })

  const rowSecond = div.querySelector("#row_second");

  
  
  async function addTableToDOM() {
    try {
         const table = await generateTable();
    
          
        if (table) {
          rowSecond?.appendChild(table); 
        }
    } catch (error) {
        console.error("Erro ao adicionar a tabela ao DOM:", error);
    }
    }


  addTableToDOM();

   

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