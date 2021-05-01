const camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados
let objCamaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

if(objCamaraRoll!= null){
    //Se existir o objeto e ele não estiver vazio redirecionamos para a página de usuário 
    location.href="user-page.html" 
}

const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        //vai levar para página de cadastro de login
        location.href = "login-cadastro.html"
    }
}

const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        //vai levar para página de login
        location.href = "login.html"
    }
}