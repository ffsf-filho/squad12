function login() {
    let userName = document.getElementById('userAdress');
    let userPassWord = document.getElementById('userPass');

    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
        .then(response => {return response.json()})
        .then(data => {
            for(var i =0; i < data.length; i++){
            if(data[i].Usuario == userName.value && data[i].Senha == userPassWord.value){
                location.href=`user-page.html?user=${userName.value + "," + data[i].Id}`
                break
            } else {
                let wrongData = document.getElementById('messageError')
                wrongData.style.display = 'inline';
            }
        }
        }
    )    
}

//código para a página de perfil do usuário
document.getElementById('study').onclick = function timeToStudy () {
    location.href="index.html"
}

document.getElementById('fun').onclick = function timeToPlay() {
    location.href="index.html"
}