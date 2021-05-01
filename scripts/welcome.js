let camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados
camaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

console.log(camaraRoll)

if(camaraRoll== null){
    //Caso não haja conteúdo, iniciamos um vetor vazio
    camaraRoll = [];
    //localStorage.setItem("@camaraRoll-Users", JSON.stringify(camaraRoll))//inicializa o storage
} else {
    //Se existir o objeto e ele não estiver vazio redirecionamos para a  página de usuário 
    location.href="user-page.html" 
}

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