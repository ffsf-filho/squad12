function login() {
    let userName = document.getElementById('userAdress');
    let userPassWord = document.getElementById('userPass');

    let nameForUser = 'Squad-12';
    let passwordForUser = 123450;

    if (userName.value == nameForUser && Number(userPassWord.value) == passwordForUser) {
        location.href="index.html"
    } else {
        let wrongData = document.getElementById('messageError')
        wrongData.style.display = 'inline';
    }
}