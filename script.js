let sliderElement = document.querySelector('#islider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#ipassword');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = ''
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove('hide');
    
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert('Senha copiada!')
    navigator.clipboard.writeText(novaSenha)
    alert('Cole sua senha para não perder ela não será visivel aqui.')
    containerPassword.classList.add('hide')
}







