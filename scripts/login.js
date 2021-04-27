function login() {
    let userName = document.getElementById('userAdress');
    let userPassWord = document.getElementById('userPass');

    let nameForUser = 'Squad-12';
    let passwordForUser = 123450;

    if (userName.value == nameForUser && Number(userPassWord.value) == passwordForUser) {
        location.href="user-page.html"
    } else {
        let wrongData = document.getElementById('messageError')
        wrongData.style.display = 'inline';
    }
}

//código para a página de perfil do usuário
document.getElementById('study').onclick = function timeToStudy () {
    location.href="index.html"
}

document.getElementById('fun').onclick = function timeToPlay() {
    location.href="index.html"
}