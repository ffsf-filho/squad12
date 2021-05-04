//faz a validação do usuário e redireciona para página princial, caso não seja validado irá mostrar uma mensagem de erro
function login(nomeDoUsuario = "") {
    const userName = document.getElementById('userAdress');
    const userPassWord = document.getElementById('userPass');

    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
        .then(response => {return response.json()})
        .then(data => {
            for(var i =0; i < data.length; i++){
                if(nomeDoUsuario.length == 0){
                    if(data[i].Usuario == userName.value && data[i].Senha == userPassWord.value){
                        postUsers(data[i].Usuario, data[i].Id, data[i].personagem)
                        location.href="user-page.html"
                        break
                    } else {
                        let wrongData = document.getElementById('messageError')
                        wrongData.style.display = 'none';
                    }
                } else {
                    if(data[i].Usuario == nomeDoUsuario){
                        postUsers(data[i].Usuario, data[i].Id, data[i].personagem)
                        location.href="user-page.html"
                        break
                    }                    
                }
            }
        }
    )    
}

//Faz a verificação na base para ver se o usuário existe
//Se não existir será cadastrado
//Se existir será informado uma mensagem
function loginCadastro(){
    const userFullName = document.getElementById('userName');
    const userName = document.getElementById('userAdress');
    const userPassWord = document.getElementById('userPass');
    let personagem = ""
    const avatarRadio = document.getElementsByName("avatar")

    avatarRadio.forEach(function(valor){
        if(valor.checked){
            personagem = valor.value
        }
    })

    const newUser = {
        "Nome": userFullName.value,
        "Usuario": userName.value,
        "Senha": userPassWord.value,
        "personagem": personagem
    }

    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
        .then(response => {return response.json()})
        .then(data => {
            let ok = true
            for(var i =0; i < data.length; i++){
                if(data[i].Usuario == userName.value){
                    ok = false
                    let wrongData = document.getElementById('messageError')
                    wrongData.style.display = 'none';                
                    break
                } 
            }

            if(ok){
                fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(newUser)
                })
                .then(response => {
                    if(response.ok){
                        login(userName.value)
                    }
                })
            }
        }
    )    
}

//faz a gravação do usuário no localstorage
function postUsers(nomeUsuario, idUsuario, nomeAvatar){
    let personAvatar = ""
    if(nomeAvatar != null){
        personAvatar = nomeAvatar
    }

    let camaraRoll = [{
        "Users": nomeUsuario,
        "Id": idUsuario,
        "personagem": personAvatar
    }]
    localStorage.setItem("@camaraRoll-Users", JSON.stringify(camaraRoll))
}

const goToLogin = () => {
    let login = document.getElementById('login');

    if (login.onclick) {
        //vai levar para página de login
        location.href = "login.html"
    }
}

const goToRegister = () => {
    let register = document.getElementById('register');

    if (register.onclick) {
        //vai levar para página de cadastro de login
        location.href = "login-cadastro.html"
    }
}