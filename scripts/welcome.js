const camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados no localstorage
let objCamaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

//Se existir o objeto e ele não estiver vazio, redirecionamos para a página de usuário 
if(objCamaraRoll!= null){
    location.href="user-page.html" 
}

//Redireciona para a página de cadastro
const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        location.href = "login-cadastro.html"
    }
}

//Redireciona para a página de login
const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        location.href = "login.html"
    }
}