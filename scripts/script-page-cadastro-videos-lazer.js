let usuario = ""
let id
var resultado;
let personagem = ""
let imgUrlAvatar ="images/"

let camaraRoll = localStorage.getItem("@camaraRoll-Users");// Recupera os dados armazenados no localstorage
camaraRoll = JSON.parse(camaraRoll); // Converte string para objeto

//Se nenhum usuário estiver logado, vai para página inicial. Senão, pega os dados e vai para página do usuário 
if(camaraRoll== null){
  location.href="index.html" 
} 
else {
  for(var i in camaraRoll){
    usuario = camaraRoll[i].Users
    id = camaraRoll[i].Id
    personagem = camaraRoll[i].personagem
  }
}

//inclui o Nick do usuário
let nickName = document.getElementById("nick")
nickName.innerHTML = `<p id="${id}" class="userStatus__text___label" > Nick: ${usuario}</p>`

/*modal para sair/deslogar */
function abreModalSair(){
  //cria o modal
  const getModal = 
  `<div class="modal" id="modalSair">
    <div class="modalBox" id="modalBoxIdSair">
      <h5 class="modalBox__titulo">Saindo...</h5>
      <p class="modalBox__descricao">Tem certeza que deseja ir embora?</p>
      <button type="button" class="modalBox__botao">Não</button>
      <button type="button" class="modalBox__botaoDeleta" onClick="sair()">Sair</button>
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
  localStorage.removeItem("@camaraRoll-Users");// Remove o item
  location.href="index.html"
}

//troca a imagem do avatar
if(personagem != ""){
  imgUrlAvatar += personagem
  let imgDivAvatar = document.getElementById("imgAvatar")
  imgDivAvatar.style.backgroundImage = `url(${imgUrlAvatar})`
}

function abreModal(filmeId){
  //Cria o modal
  const getModal = 
  `<div class="modal" id="modal">
    <div class="modalBox" id="modalBoxId">
      <h5 class="modalBox__titulo">Deletando...</h5>
      <p class="modalBox__descricao">Tem certeza que quer deletar esse vídeo?</p>
      <button type="button" class="modalBox__botao">Não</button>
      <button type="button" class="modalBox__botaoDeleta" onClick="btnDeletaVideo(${filmeId})">Deletar</button>
    </div>
  </div>`
  
  //Pega a div modal no html
  const modalHtml = document.getElementById("modalHtml")
  
  //Insere e tira do html
  modalHtml.innerHTML = modalHtml.innerHTML + getModal
  modalHtml.addEventListener("click", function(evento) {
    if (evento.target.id == "modal" || evento.target.className == "modalBox__botao") {
      modalHtml.innerHTML = ""
    }
  })
}

//Adicionar um novo vídeo na tela de vídeos de Lazer
function adicionarVideoLazer(){
  var inputNomeVideoLazer = document.querySelector("#inputNomeVideoLazer")
  var selectCategoriaVideoLazer = document.querySelector("#selectCategoriaVideoLazer")
  var inputUrlVideoLazer = document.querySelector("#inputUrlVideoLazer")
  var wrongData = document.querySelector("#messageError")
  var wrongDataNome = document.querySelector("#messageErrorNome")
  var wrongDataCategoria = document.querySelector("#messageErrorCategoria")
  var wrongDataUrl = document.querySelector("#messageErrorUrl")
    
        if (inputNomeVideoLazer.value != "" && selectCategoriaVideoLazer.value != 0 && (inputUrlVideoLazer.value.includes("youtu.be/") || inputUrlVideoLazer.value.includes("youtube.com/"))){
         
          fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
          .then(response => { return response.json()})
          .then(jsonBody => { 
            jsonBody.forEach(function(valorAtual, indice) {
              var videoCategoria = jsonBody[indice].Categoria
              var videoIdUsuario = jsonBody[indice].IdUsuario
              var categoriaId = jsonBody[indice].Id
            
              var dadosVideoLazer = {
                "Nome": inputNomeVideoLazer.value,
                "url": inputUrlVideoLazer.value,
                "IdUsuario": id,
                "IdCategoria": categoriaId,
                "Pagina": "lazer",
              }
              if(selectCategoriaVideoLazer.value == videoCategoria && videoIdUsuario == id){
                fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
                  method: "POST", 
                  headers:{
                    "Content-type": "application/json"  
                  },
                  body: JSON.stringify(dadosVideoLazer),
                })
                .then(response => {if (response.ok) abreModalInserirNovo()})
              } 
            }
            )
          }
          )
        }
       
        else if (inputNomeVideoLazer.value == "" && selectCategoriaVideoLazer.value == 0 && (inputUrlVideoLazer.value.includes("youtu.be/") == false && inputUrlVideoLazer.value.includes("youtube.com/") == false)){
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";

          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoLazer.focus() 
        } 
        else if (inputNomeVideoLazer.value == "" && selectCategoriaVideoLazer.value != 0 && (inputUrlVideoLazer.value.includes("youtu.be/") || inputUrlVideoLazer.value.includes("youtube.com/"))){
          console.log("erro")
          
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongDataNome.innerText = "Preencha com um nome válido"
          wrongData.style.display = "block"
          inputNomeVideoLazer.focus()   

        } 
        else if (inputNomeVideoLazer.value != "" && selectCategoriaVideoLazer.value == 0 && (inputUrlVideoLazer.value.includes("youtu.be/") || inputUrlVideoLazer.value.includes("youtube.com/"))){
          
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
    
          wrongDataCategoria.innerText = "Selecione uma categoria"
          wrongData.style.display = "block"
          selectCategoriaVideoLazer.focus()   
        } 
        else if (inputNomeVideoLazer.value != "" && selectCategoriaVideoLazer.value != 0 && (inputUrlVideoLazer.value.includes("youtu.be/") == false && inputUrlVideoLazer.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";

          wrongDataUrl.innerText = "Insira uma URL válida"
          wrongData.style.display = "block"
          inputUrlVideoLazer.focus()   
          }
        else if (inputNomeVideoLazer.value != "" && selectCategoriaVideoLazer.value == 0 && (inputUrlVideoLazer.value.includes("youtu.be/") == false && inputUrlVideoLazer.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoLazer.focus()  
          }

          
        else if (inputNomeVideoLazer.value == "" && selectCategoriaVideoLazer.value != 0 && (inputUrlVideoLazer.value.includes("youtu.be/") == false && inputUrlVideoLazer.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoLazer.focus()  
          }
        else if (inputNomeVideoLazer.value == "" && selectCategoriaVideoLazer.value == 0 && (inputUrlVideoLazer.value.includes("youtu.be/") || inputUrlVideoLazer.value.includes("youtube.com/"))){
        
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoLazer.focus()   
        } 
}  



/*Modal de inserção vídeos bem sucedida*/
function abreModalInserirNovo(){
  //cria o modal
  const getModal = 
  `<div class="modal" id="modalInserirNovo">
    <div class="modalBox sucess" id="modalBoxIdInserirNovo">
      <h5 class="modalBox__titulo">Vídeo Inserido</h5>
      <p class="modalBox__descricao">Deseja inserir outro vídeo?</p>
      <button type="button" class="modalBox__botao sucess" onClick="videoLazer()">Não</button>
      <button type="button" class="modalBox__botaoDeleta sucess" onClick="criarVideoLazer()">Sim</button>
    </div>
  </div>`
  
  //pega a div do modalInserir no html
  const modalHtml = document.getElementById("modalHtml")
  
  //insere e tira do html
  modalHtml.innerHTML = modalHtml.innerHTML + getModal
  modalHtml.addEventListener("click", function(evento) {
    if (evento.target.id == "modalInserirNovo" || evento.target.className == "modalBox__botao") {
      modalHtml.innerHTML = ""
    }
  })
}


//Redireciona para página de vídeos de lazer
function videoLazer() {
  location.href="page-videos-lazer.html"
}


//Adiciona na página de cadastrar vídeos a funcionalidade de quando apertar a tecla "Enter" no teclado aciona o botão adicionar
document.addEventListener("keypress", function (event) {
  if (event.key == "Enter"){
    const btn = document.querySelector("#btnAdicionarVideoLazer")
    btn.click()
  }
})



//Adicionar nova categoria na pagina de cadastro
function adicionarCategoria() {
  let input = document.getElementById("addOption")
  let select = document.getElementById("selectCategoriaVideoLazer")
  let newOption = document.createElement("option")


      if(input.value != "") {

      newOption.value = input.value
      newOption.text = input.value

      select.add(newOption)
      input.value = ""

      var cadastraCategoria = {
        "IdUsuario": id,
        "Categoria": newOption.value,
        "Pagina": "lazer"
      }

      fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias", {
        method: "POST", 
        headers:{
          "Content-type": "application/json"  
        },
        body: JSON.stringify(cadastraCategoria),
      })}
}
    
//Lista a categoria na pagina de cadastro
fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
  .then(response => { return response.json()})
  .then(jsonBody => { 
    jsonBody.forEach(function(valorAtual, indice) {
      var videoCategoria = jsonBody[indice].Categoria
      var videoIdUsuario = jsonBody[indice].IdUsuario
      var categoriaPagina = jsonBody[indice].Pagina

      if(videoIdUsuario == id && categoriaPagina == "lazer") {
        var novaCategoria = document.querySelector("#selectCategoriaVideoLazer")
        novaCategoria.innerHTML = novaCategoria.innerHTML + `<option value="${videoCategoria}" >${videoCategoria}</option>`
      }
    })
  }
)


let imgUrlAvatarMobile ="images/"
//Inclui o Nick do usuário no mobile
let nickNameMobile = document.getElementById("nickMobile")
nickNameMobile.innerHTML = `<p id="${id}" class="userStatus__text___label" > Nick: ${usuario}</p>`

//Troca a imagem do avatar no mobile
if(personagem != ""){
    imgUrlAvatarMobile += personagem
    let imgDivAvatarMobile = document.getElementById("imgAvatarMobile")
    imgDivAvatarMobile.style.backgroundImage = `url(${imgUrlAvatar})`
}



//Abre menu slide
const menuSlide = document.querySelector(".menuMobile_box")
const btnMenu = document.querySelector("#btnMenu")
const menuDropD = document.querySelector(".dropdown-menu")
const menuFechar = document.querySelector(".menuMobile_fechar")

btnMenu.addEventListener("click", function() {
  menuSlide.classList.add("menuMobile_open")

  if( $(window).width() < 768){
    menuDropD.style.display = "none"
}   
})

//Fecha menu slide
menuFechar.addEventListener("click", function() {
  menuSlide.classList.remove("menuMobile_open")
})