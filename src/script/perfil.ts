export default function HandlePerfil(event: Event): void {
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
            <table>
              <thead>
                <tr>
                  <th>Dificuldade</th>
                  <th>Data</th>
                  <th>Tempo</th>
                  <th>Xp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span>facil</span></td>
                  <td><span>12/12/2022</span></td>
                  <td><span>120 s</span></td>
                  <td><span class="xp">100</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

  div.innerHTML = Element_perfil;

  const Main = document.querySelector("main");

  Main?.insertAdjacentElement("afterbegin", div);
  
  const Container_perfil = document.querySelector("#container_perfil") as HTMLElement
  const Btn_close = document.querySelector(".close-button") as HTMLElement;

  Btn_close.addEventListener("click", () => div.remove());

  Container_perfil.addEventListener('click',(e)=> {
    const out = document.querySelector('#bloco_perfil')
    if((e.target as HTMLDivElement).contains(out)) div.remove()
  }) 

}
