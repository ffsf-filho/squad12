//faz a validação do usuário e redireciona para página princial, caso não seja validado irá mostrar uma mensagem de erro
function login(nomeDoUsuario = "") {
    let userName = document.getElementById('userAdress');
    let userPassWord = document.getElementById('userPass');

    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
        .then(response => {return response.json()})
        .then(data => {
            for(var i =0; i < data.length; i++){
                if(nomeDoUsuario.length == 0){
                    if(data[i].Usuario == userName.value && data[i].Senha == userPassWord.value){
                        location.href=`user-page.html?user=${userName.value + "," + data[i].Id}`
                        break
                    } else {
                        let wrongData = document.getElementById('messageError')
                        wrongData.style.display = 'inline';
                    }
                } else {
                    if(data[i].Usuario == nomeDoUsuario){
                        location.href=`user-page.html?user=${data[i].Usuario + "," + data[i].Id}`
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
    let userFullName = document.getElementById('userName');
    let userName = document.getElementById('userAdress');
    let userPassWord = document.getElementById('userPass');
    
    const newUser = {
        "Nome": userFullName.value,
        "Usuario": userName.value,
        "Senha": userPassWord.value  
    }

    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
        .then(response => {return response.json()})
        .then(data => {
            let ok = true
            for(var i =0; i < data.length; i++){
                if(data[i].Usuario == userName.value){
                    ok = false
                    let wrongData = document.getElementById('messageError')
                    wrongData.style.display = 'inline';                
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

//código para a página de perfil do usuário
/* document.getElementById('study').onClick = function timeToStudy () {
    location.href="index.html"
}

document.getElementById('fun').onClick = function timeToPlay() {
    location.href="index.html"
} */