import { getTokenFromCookie, updateUserCookie } from "../cookies";
// https://i.pinimg.com/736x/fa/ea/13/faea13e1a020927cdc98f5e1d43f76ea.jpg
export async function renderProfileFull(prop:boolean = true){


    const token = getTokenFromCookie();

  try {  
    const result = await fetch('http://localhost/PLC/Back/api/Routes/Profile/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await result.json();
    
    console.log(data);


    const user = {
      id: data.nick || 'null',
      nome: data.name || 'null',
      total_xp: data.xp,
      level: data.level, 
      email: data.email,
      progress: data.progress,
      imagem: data.photo || 'null',
      sign: data.sign || false,
      cod: token || ''
    };

        console.log("passou aqui");
        
     updateUserCookie(user)







    const element = user.sign
    ? `
    
        <div id="container_perfil_full">
            <div id="row_perfil_full_one">

                <div class="colmn_inf_perfil_full">

                    <div id="container_img_perfil_full">
                        <img src="${user.imagem}" alt="">
                      
                        <div tabindex="0" class="plusButton">
                        <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <g mask="url(#mask0_21_345)">
                            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                            </g>
                        </svg>
                        </div>
                    </div>
                    <div id="container_inf_perfil_full">
                        <h3>${user.nome}</h3>
                        <span id="level_perfil_full">Level: ${user.level}</span>
                        <span id="xp_perfil_full">XP: ${user.total_xp}</span>
                    </div>

                </div>

                <div id="column_logo_perfil_full">
                    <h1 id="logo_perfil">PlanetsCard</h1>
                </div>
                <div id="column_close-perfil_full">
                    <button id="close-button-perfil-full" class="close-button"></button>
                </div>
            </div>
            <div id="row_perfil_full_two">
                <div class="colmn_inf_perfil_full">
                    <div id="container_more_inf_perfil_full">
                        <ul>
                            <li><h4>ID: <span>${user.id}</span></h4> 
                                                                <div class="centralize">
                                <div>
                                    <button id="btn_copy">Copiar
                                    <span><svg viewBox="0 0 467 512.22" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" fill="#0E418F" height="12" width="12"><path d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z" fill-rule="nonzero"></path></svg> </span>
                                    <span>Copied</span>
                                    </button>
                                <div>
                            
                                
                            </li>


                            <li><h4>Email:<span> ${ user.email}</span></h4><span class="editar_inf_perfil_full"> Edit  <svg class="svg_edit" viewBox="0 0 512 512">
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg></span></li>
                            <li><h4>Tell: <span>???????????</span></h4><span class="editar_inf_perfil_full"> Edit  <svg class="svg_edit" viewBox="0 0 512 512">
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg></span></li>
                        </ul>
                    </div>
                </div>
                <div id="column_art_perfil_full">

                    <!-- start -->
          
                      <div data-js="astro" class="astronaut">
                        <div class="head"></div>
                        <div class="arm arm-left"></div>
                        <div class="arm arm-right"></div>
                        <div class="body">
                          <div class="panel"></div>
                        </div>
                        <div class="leg leg-left"></div>
                        <div class="leg leg-right"></div>
                        <div class="schoolbag"></div>
                      </div>
                    <!-- end -->

                </div>
            </div>
        </div>
 
    ` : '';

    if(element == '') {
        alert("Faça login!")
        return;
    };

    const section = document.createElement("section") as HTMLElement;
    section.id = "sec_perfil_full"
    const header = document.getElementById("header") as HTMLElement;
    section.innerHTML = element;
    prop ? document.querySelector("#container_config ")?.remove() : document.querySelector("#container_perfil")?.remove() 
    header.insertAdjacentElement("afterend", section);

    document.querySelector("#close-button-perfil-full")?.addEventListener("click",closeProfileFull)

    const btn_open_img = document.querySelector(".plusButton") as HTMLAnchorElement;
    btn_open_img.addEventListener("click", chooseImg)

    function closeProfileFull(){
        section?.remove()
    }

    function chooseImg(){
       const element = `
      
           
            <div id="column_first_choose_img" style="width: 50%; background-color: rgb(22, 21, 21); height: auto; padding: 10px;">
                <img src="${user.imagem}" alt="" style="width: 95%; height: 100%; border-radius: 5px;">
            </div>
            <div id="column_second_choose_img" style="width: 50%; height: auto; display: flex; flex-direction: column; justify-content: space-around; align-items: center; ">
                <input type="file" id="file-upload" style="display: none;">
                <span for="file-upload" class="upload-button" style="padding-top: 50px;">Escolher arquivo
                    <label for="file-upload" class="Btn">
                        <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                        <span class="icon2"></span>
                        <span class="tooltip">Download</span>
                    </label>    
                </span>
            

                <div style="display: flex; width: 100%; justify-content: center; gap: 20px;">
                    <button id="btn_cl">
                        <span class="button_top" style="background-color: red;"> Cancelar
                        </span>
                    </button>
                    <button id="btn_cf">
                        <span class="button_top"> Confirma
                        </span>
                    </button>
                </div>
            </div>
            <button id="close-button-perfil-full" class="close-button" style="position: absolute; margin-right: -570px; color:red;"></button>
       
       `
       const containerPerfilFull = document.createElement('section');
       containerPerfilFull.id = "container_choose_img";
       containerPerfilFull.innerHTML = element;
       
       const containerPerfilFullParent = document.getElementById('container_perfil_full')!;
       const containerPerfilFullParentParent = containerPerfilFullParent.parentNode!;
       containerPerfilFullParentParent.insertBefore(containerPerfilFull, containerPerfilFullParent);
       
        

        let selectedFile:File;
            
        document.getElementById('file-upload')?.addEventListener('change', function(event) {
            const inputElement = ((event.target)as HTMLInputElement);
            if (inputElement.files && inputElement.files.length > 0) {
                selectedFile = inputElement.files[0];
            }
           if (selectedFile) {
           const reader = new FileReader();
           reader.onload = function(e: ProgressEvent<FileReader>) {
            if (window.innerWidth >= 600) {
                const imgContainer = document.getElementById('column_first_choose_img') as HTMLElement;
                imgContainer.innerHTML = ''; // Limpa a imagem anterior
                const img = document.createElement('img') as HTMLImageElement;
                img.src = (e.target as FileReader).result as string;
                console.log(img.src);
                
                img.style.width = '95%';
                img.style.height = '100%';
                img.style.borderRadius = '5px';
                imgContainer.appendChild(img);
            } else {
                const imgContainerMobile = document.getElementById('container_choose_img') as HTMLElement;
                imgContainerMobile.style.backgroundImage = `url(${(e.target as FileReader).result})`;
                imgContainerMobile.style.backgroundSize = 'cover';
                imgContainerMobile.style.backgroundPosition = 'center';
            }
        };
        
           reader.readAsDataURL(selectedFile);
   }
});
   
       document.getElementById('btn_cl')?.addEventListener('click', ()=>{
               document.getElementById("container_choose_img")?.remove()
       })
       document.getElementById('close-button-perfil-full')?.addEventListener('click', ()=>{
               document.getElementById("container_choose_img")?.remove()
       })


   
       document.getElementById('btn_cf')?.addEventListener('click', async function() {
            const fileSelected = document.getElementById('file-upload') as HTMLInputElement;
            if(fileSelected.files){

                const reader = new FileReader();
                reader.readAsDataURL(fileSelected.files[0]);
                reader.onload = async () => {
                    const photoBase64 = reader.result?.toString().split(',')[1];
                    
                    
              
                try {
                    const response = await fetch('http://localhost/PLC/Back/api/Routes/Profile/updateProfileFull', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${getTokenFromCookie()}`,
                        },
                        body: JSON.stringify({"photo":`${photoBase64}`})
                    });

                    if (response.ok) {
                        const result = await response.json();
                        console.log('Image uploaded successfully:', result);
                    } else {
                        console.error('Failed to upload image');
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
                }  
            }
            
            
       })
    
    }


}catch{
    console.log("erro ao carregar o perfil");
    
}


}