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
                        postUsers(data[i].Usuario, data[i].Id, data[i].Avatar)
                        location.href="user-page.html"
                        break
                    } else {
                        let wrongData = document.getElementById('messageError')
                        wrongData.style.display = 'none';
                    }
                } else {
                    if(data[i].Usuario == nomeDoUsuario){
                        postUsers(data[i].Usuario, data[i].Id, data[i].Avatar)
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
    let avatar = ""
    const avatarRadio = document.getElementsByName("avatar")

    avatarRadio.forEach(function(valor){
        if(valor.checked){
            avatar = valor.value
            //console.log("Avatar: " + valor.value)
        }
    })

    const newUser = {
        "Nome": userFullName.value,
        "Usuario": userName.value,
        "Senha": userPassWord.value,
        "Avatar": avatar
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
    let camaraRoll = [{
        "Users": nomeUsuario,
        "Id": idUsuario,
        "Avatar": nomeAvatar
    }]
    localStorage.setItem("@camaraRoll-Users", JSON.stringify(camaraRoll))
}