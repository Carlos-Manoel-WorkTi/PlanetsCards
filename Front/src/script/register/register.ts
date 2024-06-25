const form = document.getElementById('form') as HTMLFormElement;

// Função para exibir mensagens de erro
function showError(input: HTMLInputElement | HTMLSelectElement, message: string) {
    const label = document.querySelector(`#label${input.id}`) as HTMLLabelElement;
    const errorSpan = label.querySelector('.error-message');
    input.focus()
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

// Função para remover mensagens de erro
function removeError(input: HTMLInputElement) {
    const label = document.querySelector(`#label${input.id}`) as HTMLLabelElement;
    const errorSpan = label.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.textContent = '';
    }
}

function converterParaFormatoPadrao(dataArray) {
    const mesAbreviado = dataArray[0];
    const dia = dataArray[1].replace(',', '');
    const ano = dataArray[2];

    const meses = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
        'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };

    const mesNumerico = meses[mesAbreviado];

    const dataFormatada = `${ano}-${mesNumerico}-${dia}`;

    return dataFormatada;
}


// Adicionar event listeners para os campos do formulário
const inputs = form.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        removeError(input as HTMLInputElement);
    });
    input.addEventListener('change', () => {
        removeError(input as HTMLInputElement);
    });
});

const campo = document.querySelector('#telefone') as HTMLInputElement;

campo.addEventListener('input', (e: Event) => {
    if (e.target) {
        let element = e.target as HTMLInputElement;
        let value = element.value.replace(/\D/g, ''); 
        let formattedValue = '';
        if (value.startsWith('55')) {
            formattedValue = `+${value}`;
        } else {
            if (value.length > 0) {
                formattedValue = `+55${value}`;
            } else {
                formattedValue = '+55';
            }
        }
        formattedValue = formattedValue.replace(/(\d{2})(\d{2})(\d)/, '($1) $2 $3');
        formattedValue = formattedValue.replace(/(\d{5})(\d)/, '$1-$2'); 
        const maxLength = '+55 (99) 99999-9999'.length;
        formattedValue = formattedValue.slice(0, maxLength);

        element.value = formattedValue;
    }
});



// Add event listener for form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Select form elements by their IDs
    const nomeInput = document.querySelector('#nome') as HTMLInputElement;
    const emailInput = document.querySelector('#email') as HTMLInputElement;
    const telefoneInput = document.querySelector('#telefone') as HTMLInputElement;
    const senhaInput = document.querySelector('#senha') as HTMLInputElement;
    const confirmarSenhaInput = document.querySelector('#confirmar_senha') as HTMLInputElement;
    const generoSelect = document.querySelector('#genero') as HTMLSelectElement;
    const termosCheckbox = document.querySelector('#termos') as HTMLInputElement;
    const dataNascimentoInput = document.querySelector('#data_nascimento') as HTMLInputElement;

    
    
    // Reset previous error messages
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => span.textContent = '');

    // Validate form fields
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const senha = senhaInput.value.trim();
    const confirmarSenha = confirmarSenhaInput.value.trim();
    const genero = generoSelect.value;
    const termosChecked = termosCheckbox.checked;
    const dataNascimento = dataNascimentoInput.value.trim() == '' ? '0' : dataNascimentoInput.value.trim();

    // others validates
    const shortName = nome.length > 3
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    
    const confirSenha = senha === confirmarSenha
    
    
    
    // Validate if all fields are filled
    if (!nome) {
        showError(nomeInput, 'Campo obrigatório.');
        return; // Prevent submission if any field is empty
    }

    if (!shortName) {
        showError(nomeInput, 'Muito curto');
        return; // Prevent submission if any field is empty
    }
    
    if (dataNascimento == '0') {
        showError(dataNascimentoInput, 'Invalido!');
        return; // Prevent submission if any field is empty
    }

    const dataFormatada = converterParaFormatoPadrao(dataNascimento.split(' '));
    const dataAcceppt = ((new Date().getFullYear()) - (parseInt(dataFormatada.split('-')[0]))) > 7

    if(!dataAcceppt){
        showError(dataNascimentoInput, 'Minimo 7 anos');
        return; 
    }
    if (!email) {
        showError(emailInput, 'Campo obrigatório.');
        return; // Prevent submission if any field is empty
    }
    if(!isValidEmail){
        showError(emailInput, 'Formato invalido');
        return
    }
    if (!telefone) {
        showError(telefoneInput, 'Campo obrigatório.');
        return; // Prevent submission if any field is empty
    }
    
    if (!senha) {
        showError(senhaInput, 'Campo obrigatório.');
        return; // Prevent submission if any field is empty
    }
    
    if (!confirmarSenha) {
        showError(confirmarSenhaInput, 'Campo obrigatório.');
        return; // Prevent submission if any field is empty
    }
    
    if(!confirSenha){
        showError(confirmarSenhaInput, 'Não confere');
        return;
    }

    if (genero == '') {
        showError(generoSelect, 'Invalido');
        return; // Prevent submission if any field is empty
    }

    if(!termosChecked){
        
        const box = document.querySelector('#textTermos') as HTMLInputElement
        const box2 = document.querySelector('#textTermo') as HTMLInputElement
        const box3 = document.querySelector('#textTerm') as HTMLInputElement

        box.style.color = 'red'
        box2.style.color = 'red'
        box3.style.color = 'red'
        setTimeout(()=>{
            box.style.color = 'white'
            box2.style.color = 'rgb(123, 8, 218)'
            box3.style.color = 'rgb(123, 8, 218)'
        },1200)
       
        return
    }

    

    // Allow submission if all fields are correct

    const data = JSON.stringify({
        "name": nome,
        "email": email,
        "password": senha,
        "idade": dataFormatada,
        "photo": null,
        "tel": telefone,
        "gender": genero
    })
      
 
 
    try{
        const result  = await fetch('http://localhost/PLC/Back/api/Routes/register/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: data
        })
        
        
        if (result.ok) {
            
            const resul = await result.json()
            console.log(resul);
            
            if(resul.status){
                location.href = 'http://127.0.0.1:5500/Front/login.html'
            }else{
                if(resul.email != '')
                    showError(emailInput,'Email já cadastrado')
                    console.log(resul);
                
                
            }
            
            
        } else {
            console.error('Ocorreu um erro durante o registro. Status:', result.status);
        }
    }catch{
        console.log('error');
        
    }
});

