import {getTokenFromCookie} from './../cookies'


const campo_email = document.getElementById("campo_email") as HTMLInputElement;
const campo_password = document.getElementById("campo_password") as HTMLInputElement;
const text_error_email = document.getElementById("text_error_email") as HTMLElement;
const text_error_password = document.getElementById("text_error_password") as HTMLElement;
const formLogin = document.getElementById("form") as HTMLButtonElement;

// FUNCTIONS
function showErro(input: HTMLInputElement | HTMLSelectElement, message: string) {
  input.style.borderColor ='red'
  const label = document.querySelector(`#label${input.id}`) as HTMLLabelElement;
  const errorSpan = label.querySelector('.error-message');
  if (!errorSpan) {
      const span = document.createElement('span');
      span.classList.add('error-message');
      span.style.color = '#a92f2f';
      span.textContent = message;
      label.appendChild(span);
  } else {
      errorSpan.textContent = message;
  }
}





async function loginUser(email: string, password: string) {
  try {
    const cod = getTokenFromCookie();
    const response = await fetch('http://localhost/PLC/Back/api/Routes/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${cod}`
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar o login. Código de status: ' + response.status);
    }

    const data = await response.json();

    console.log(data);

    if(!data.status){
      showErro(campo_email, data.msg);
      showErro(campo_password, data.msg);
    }else{
      const userCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('User='))
      ?.split('=')[1];

      if (userCookie) {
        const user = JSON.parse(decodeURIComponent(userCookie));   
        user.cod = data.token;
        user.sign = true
        const updatedUserCookie = `User=${JSON.stringify(user)}; max-age=1000; path=/`;
        document.cookie = updatedUserCookie;


        location.href = 'http://127.0.0.1:5500/Front/'
      }

    }



    
  } catch (error) {
    console.error('Erro ao realizar o login:', error);
    alert('Erro ao realizar o login. Por favor, tente novamente.'); 
  }
}


// EVENTS
formLogin.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const campo_email = document.getElementById("campo_email") as HTMLInputElement;
  const campo_password = document.getElementById("campo_password") as HTMLInputElement;

  const email = campo_email.value.trim();
  const password = campo_password.value.trim();

 
  if (!email) {
    showErro(campo_email, 'Campo obrigatório.');
    return;
  }

  // Enviar requisição de login
  loginUser(email, password);
});


// EVENTS
campo_email.addEventListener('focus', (e:Event) => {
  campo_email.style.borderColor = 'rgb(51, 100, 200)';
  const errorSpan = document.getElementById('error_email') as HTMLSpanElement;
  const idlb = '#label' +( e.target! as HTMLElement).id;

  if (errorSpan) {
    const label = document.querySelector(idlb)
    label?.querySelector('.error-message')?.remove()
  }
});

campo_password.addEventListener('focus', (e:Event) => {
  campo_password.style.borderColor = 'rgb(51, 100, 200)';
  const errorSpan = document.getElementById('error_password') as HTMLSpanElement;
  const idlb = '#label' +( e.target! as HTMLElement).id;

  if (errorSpan) {
    const label = document.querySelector(idlb)
    label?.querySelector('.error-message')?.remove()
  }
});
