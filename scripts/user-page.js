//Inicialização das variáveis
let usuario = ""
let id
let personagem = ""
let imgUrlAvatar ="images/"

const camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados no localstorage
let objCamaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

//Se nenhum usuário estiver logado, vai para página inicial. Senão, pega os dados e vai para página do usuário 
if(objCamaraRoll== null){
    location.href="index.html" 
} 
else {
    for(var i in objCamaraRoll){
        usuario = objCamaraRoll[i].Users
        id = objCamaraRoll[i].Id
        personagem = objCamaraRoll[i].personagem
    }
}

/*modal para sair/deslogar */
function abreModalSair(){
  //cria o modal
  const getModal = 
  `<div class="modal" id="modalSair">
    <div class="modalBox" id="modalBoxIdSair">
      <h5 class="modalBox__titulo">Saindo...</h5>
      <p class="modalBox__descricao">Tem certeza que deseja ir embora?</p>
      <button type="button" class="modalBox__botao">Não</button>
      <button type="button" class="modalBox__botaoSair" onClick="sair()">Sair</button>
    </div>
  </div>`
  
  //pega a div do modalSair no html
  const modalHtml = document.getElementById("modalHtml")
    
  //insere e tira do html
  modalHtml.innerHTML = modalHtml.innerHTML + getModal
  modalHtml.addEventListener("click", function(evento) {
    if (evento.target.id == "modalSair" || evento.target.className == "modalBox__botao") {
      modalHtml.innerHTML = ""
    }
  })
}

// Remove o item do localstorage quando o usuário faz log-out e volta para página inicial
function sair() { 
    localStorage.removeItem("@camaraRoll-Users");
    location.href="index.html"
}

//Redireciona para página de vídeos de estudo
function timeToStudy() {
    location.href="page-videos-estudo.html"
}

//Redireciona para página de vídeos de lazer
function timeToPlay () {
    location.href="page-videos-lazer.html"
}

//Inclui o Nick do usuário
let nickName = document.getElementById("nick")
nickName.innerHTML = `<p id="${id}" class="userStatus__text___label" > Nick: ${usuario}</p>`

//Troca a imagem do avatar
if(personagem != ""){
    imgUrlAvatar += personagem
    let imgDivAvatar = document.getElementById("imgAvatar")
    imgDivAvatar.style.backgroundImage = `url(${imgUrlAvatar})`
}

//Abre menu slide
const menuSlide = document.querySelector(".menuMobile_box")
const btnMenu = document.querySelector("#btnMenu")
const menuDropD = document.querySelector(".dropdown-menu")
const menuFechar = document.querySelector(".menuMobile_fechar")

btnMenu.addEventListener("click", function() {
  menuSlide.classList.add("menuMobile_open")
  menuDropD.style.display = "none"
})

//Fecha menu slide
menuFechar.addEventListener("click", function() {
  menuSlide.classList.remove("menuMobile_open")
})