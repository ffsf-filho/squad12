const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        location.href = "user-page.html"
    }
}

const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        location.href = "login.html"
    }
}