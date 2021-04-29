const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        //vai levar para página de cadastro que o Francisco está criando
        //location.href = ""
    }
}

const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        //vai levar para página de login atualizada
        location.href = "login.html"
    }
}