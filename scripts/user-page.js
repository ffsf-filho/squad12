let usuario = ""
let id

let camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados
camaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

if(camaraRoll== null){
    //Se existir o objeto e ele não estiver vazio redirecionamos para a  página de usuário 
    location.href="index.html" 
} else {
    //Pega os dados do usuário
    for(var i in camaraRoll){
        usuario = camaraRoll[i].Users
        id = camaraRoll[i].Id
    }
}

function sair() { 
    localStorage.removeItem("@camaraRoll-Users");// Remove o item
    location.href="index.html"
}

function timeToStudy() {
    location.href="page-videos-estudo.html"
}

function timeToPlay() {
    location.href="page-videos-estudo.html"
}