//Inicializa variáveis
let usuario = ""
let id
let avatar = ""
let imgUrlAvatar ="../images/"

//recupera as informações do localStorage
const camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados
let objCamaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

if(objCamaraRoll== null){
    //Se existir o objeto e ele não estiver vazio redirecionamos para a  página de usuário 
    location.href="index.html" 
} else {
    //Pega os dados do usuário
    for(var i in objCamaraRoll){
        usuario = objCamaraRoll[i].Users
        id = objCamaraRoll[i].Id
        avatar = objCamaraRoll[i].Avatar
    }
}

function sair() { 
    localStorage.removeItem("@camaraRoll-Users");// Remove o item
    location.href="index.html"
}

function timeToStudy() {
    location.href="page-videos-estudo.html"
}

function timeToPlay () {
    location.href="page-videos-lazer.html"
}

//inclui o Nick do usuário
let nickName = document.getElementById("nick")
nickName.innerHTML = `<p id="${id}" class="userStatus__text___label" >Nick: ${usuario}</p>`

//troca a imagem do avatar
console.log(avatar)
if(avatar != ""){
    imgUrlAvatar += avatar
    let imgDivAvatar = document.getElementById("imgAvatar")
    imgDivAvatar.style.backgroundImage = `url(${imgUrlAvatar})`
}