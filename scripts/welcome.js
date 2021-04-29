const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        location.href = "login-cadastro.html"
    }
}

const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        //vai levar para página de login atualizada
        location.href = "login.html"
    }
}