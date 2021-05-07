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

// Remove o item do localstorage quando o usuário faz log-out e volta para página inicial
function sair() { 
  localStorage.removeItem("@camaraRoll-Users");
  location.href="index.html"
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

//troca a imagem do avatar
if(personagem != ""){
  imgUrlAvatar += personagem
  let imgDivAvatar = document.getElementById("imgAvatar")
  imgDivAvatar.style.backgroundImage = `url(${imgUrlAvatar})`
}

//Adiciona o vídeo na tela
function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = filme;
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
};

fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos")
  .then(response => { return response.json()})
  .then(jsonBody => { 
    jsonBody.forEach(function(valorAtual, indice) {
      var filmePagina = jsonBody[indice].Pagina
      let filmeUrl = jsonBody[indice].url
      var filmeId = jsonBody[indice].Id
      var filmeNome = jsonBody[indice].Nome
      var filmeIdUsuario = jsonBody[indice].IdUsuario
      filmeUrl = filmeUrl.replace("youtu.be/", "www.youtube.com/embed/");
      filmeUrl = filmeUrl.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
  
      if(filmeIdUsuario == id && filmePagina == "estudo"){
        var campoDataList = document.querySelector("#historico")
        campoDataList.innerHTML = campoDataList.innerHTML + `<option value="${filmeNome}" ></option>`
        resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filmeUrl} 
        title='YouTube video player' frameborder='0' 
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
        </iframe><p class='title'>${filmeNome}</p><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button>`
        listarFilmesNaTela(resultado)
      }
    })
  }
)
              
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

//Adicionar um novo vídeo na tela de vídeos de Estudo
function adicionarVideoEstudo(){
  var inputNomeVideoEstudo = document.querySelector("#inputNomeVideoEstudo")
  var selectCategoriaVideoEstudo = document.querySelector("#selectCategoriaVideoEstudo")
  var inputUrlVideoEstudo = document.querySelector("#inputUrlVideoEstudo")
  var wrongData = document.querySelector("#messageError")
  var wrongDataNome = document.querySelector("#messageErrorNome")
  var wrongDataCategoria = document.querySelector("#messageErrorCategoria")
  var wrongDataUrl = document.querySelector("#messageErrorUrl")
    
        if (inputNomeVideoEstudo.value != "" && selectCategoriaVideoEstudo.value != 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") || inputUrlVideoEstudo.value.includes("youtube.com/"))){
         
          fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
          .then(response => { return response.json()})
          .then(jsonBody => { 
            jsonBody.forEach(function(valorAtual, indice) {
              var videoCategoria = jsonBody[indice].Categoria
              var videoIdUsuario = jsonBody[indice].IdUsuario
              var categoriaId = jsonBody[indice].Id
            
              var dadosVideoEstudo = {
                "Nome": inputNomeVideoEstudo.value,
                "url": inputUrlVideoEstudo.value,
                "IdUsuario": id,
                "IdCategoria": categoriaId,
                "Pagina": "estudo",
              }
              if(selectCategoriaVideoEstudo.value == videoCategoria && videoIdUsuario == id){
                fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
                  method: "POST", 
                  headers:{
                    "Content-type": "application/json"  
                  },
                  body: JSON.stringify(dadosVideoEstudo),
                })
                .then(response => {if (response.ok) abreModalInserirNovo()})
              } 
            }
            )
          }
          )
        }
       
        else if (inputNomeVideoEstudo.value == "" && selectCategoriaVideoEstudo.value == 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") == false && inputUrlVideoEstudo.value.includes("youtube.com/") == false)){
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";

          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoEstudo.focus() 
        } 
        else if (inputNomeVideoEstudo.value == "" && selectCategoriaVideoEstudo.value != 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") || inputUrlVideoEstudo.value.includes("youtube.com/"))){
          console.log("erro")
          
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongDataNome.innerText = "Preencha com um nome válido"
          wrongData.style.display = "block"
          inputNomeVideoEstudo.focus()   

        } 
        else if (inputNomeVideoEstudo.value != "" && selectCategoriaVideoEstudo.value == 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") || inputUrlVideoEstudo.value.includes("youtube.com/"))){
          
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
    
          wrongDataCategoria.innerText = "Selecione uma categoria"
          wrongData.style.display = "block"
          selectCategoriaVideoEstudo.focus()   
        } 
        else if (inputNomeVideoEstudo.value != "" && selectCategoriaVideoEstudo.value != 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") == false && inputUrlVideoEstudo.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";

          wrongDataUrl.innerText = "Insira uma URL válida"
          wrongData.style.display = "block"
          inputUrlVideoEstudo.focus()   
          }
        else if (inputNomeVideoEstudo.value != "" && selectCategoriaVideoEstudo.value == 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") == false && inputUrlVideoEstudo.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoEstudo.focus()  
          }

          
        else if (inputNomeVideoEstudo.value == "" && selectCategoriaVideoEstudo.value != 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") == false && inputUrlVideoEstudo.value.includes("youtube.com/") == false)){

          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoEstudo.focus()  
          }
        else if (inputNomeVideoEstudo.value == "" && selectCategoriaVideoEstudo.value == 0 && (inputUrlVideoEstudo.value.includes("youtu.be/") || inputUrlVideoEstudo.value.includes("youtube.com/"))){
        
          wrongData.innerText = "";
          wrongDataNome.innerText = "";
          wrongDataCategoria.innerText = "";
          wrongDataUrl.innerText = "";
  
          wrongData.innerText = "Verifique se todos os campos obrigatórios estão preenchidos corretamente."
          wrongData.style.display = "block"
          inputNomeVideoEstudo.focus()   
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
      <button type="button" class="modalBox__botao sucess" onClick="videoEstudo()">Não</button>
      <button type="button" class="modalBox__botaoDeleta sucess" onClick="criarVideoEstudo()">Sim</button>
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

/*Modal de falha na inserção de vídeos*/
function abreModalFalha(){
  //cria o modal
  const getModal = 
  `<div class="modal" id="modalFalha">
    <div class="modalBox failure" id="modalBoxIdFalha">
      <h5 class="modalBox__titulo">Algo deu errado ... </h5>
      <p class="modalBox__descricao">Deseja tentar novamente?</p>
      <button type="button" class="modalBox__botao failure" onClick="videoEstudo()">Não</button>
      <button type="button" class="modalBox__botaoDeleta failure" onClick="criarVideoEstudo()">Sim</button>
    </div>
  </div>`
  
  //pega a div do modalInserir no html
  const modalHtml = document.getElementById("modalHtml")
  
  //insere e tira do html
  modalHtml.innerHTML = modalHtml.innerHTML + getModal
  modalHtml.addEventListener("click", function(evento) {
    if (evento.target.id == "modalFalha" || evento.target.className == "modalBox__botao") {
      modalHtml.innerHTML = ""
    }
  })
}

//Pesquisar filmes já cadastrados
function btnPesquisar(){
  var listaFilmes = document.querySelector('#listaFilmes');
  listaFilmes.innerHTML = ""

  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos")
    .then(response => {return response.json()})
    .then(jsonBody => {
      const campoPesquisaFilme = document.querySelector("#pesquisaFilme");
      const filmePesquisado = campoPesquisaFilme.value;
        
      function removerAcentosEspaco(str) {
        return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
      }

      jsonBody.forEach(function(valorAtual, indice) {
        const valorAtualNome = valorAtual.Nome
        let resultadoPesquisa;   

        if(removerAcentosEspaco(valorAtualNome.toUpperCase()).includes(removerAcentosEspaco(filmePesquisado.toUpperCase()))){ 
          var filmePagina = jsonBody[indice].Pagina
          var filmeIdUsuario = jsonBody[indice].IdUsuario
          var filmeNome = jsonBody[indice].Nome                      
          var filme = jsonBody[indice].url
          filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
          filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
          filmeId = jsonBody[indice].Id

          if(filmeIdUsuario == id && filmePagina == "estudo"){
            resultadoPesquisa = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            <p class='title'>${filmeNome}</p><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button></div>` 
            listarFilmesNaTela(resultadoPesquisa);  
          }
        }
      })
    }
 )
}

//Apaga vídeos da tela
function btnDeletaVideo(id){
  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
    method: "DELETE", 
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "Id": id
    }),
  })
  .then(response => {if (response.ok) setTimeout(document.location.reload(true), 1000)})
};

//Filtra os vídeos da página pelas subcategorias
function filtrarCategoria(){  
  var resultado;
  var listaFilmes = document.querySelector('#listaFilmes');
  listaFilmes.innerHTML = ""

  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos")
    .then(response => {return response.json()})
    .then(jsonBody => {
      var campoFiltrarCategoria = document.querySelector('#filtroCategoriaEstudo');
      var filtroAplicado = campoFiltrarCategoria.value;

      if(filtroAplicado == "Sem filtro"){     
        jsonBody.forEach(function(valorAtual, indice) {
          var filmePagina = jsonBody[indice].Pagina
          let filmeUrl = jsonBody[indice].url
          var filmeId = jsonBody[indice].Id
          var filmeNome = jsonBody[indice].Nome
          var filmeIdUsuario = jsonBody[indice].IdUsuario
          var filmeIdCategoria = jsonBody[indice].IdCategoria
          filmeUrl = filmeUrl.replace("youtu.be/", "www.youtube.com/embed/");
          filmeUrl = filmeUrl.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
        
          if(filmeIdUsuario == id && filmePagina == "estudo"){
            resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filmeUrl} 
            title='YouTube video player' frameborder='0' 
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
            </iframe><p class='title'>${filmeNome}</p><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button>`
            listarFilmesNaTela(resultado)
          }
        })
      }
      else {
        fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
          .then(response => { return response.json()})
          .then(jsonBodyCategoria => { 
            jsonBodyCategoria.forEach(function(valorAtual, indice) {
              var videoCategoria = jsonBodyCategoria[indice].Categoria
              var videoIdUsuario = jsonBodyCategoria[indice].IdUsuario
              var categoriaId = jsonBodyCategoria[indice].Id   

              if(filtroAplicado == videoCategoria && videoIdUsuario == id){
                jsonBody.forEach(function(valorAtual, indice) {
                  const valorAtualCategoria = valorAtual.IdCategoria
                  let resultadoFiltro;
            
                  if(valorAtualCategoria == categoriaId){
                    var filmePagina = jsonBody[indice].Pagina
                    var filmeIdUsuario = jsonBody[indice].IdUsuario
                    var filmeNome = jsonBody[indice].Nome                      
                    var filme = jsonBody[indice].url
                    filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
                    filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
                    filmeId = jsonBody[indice].Id
                    filmeCategoria = jsonBody[indice].Categoria
  
                    if(filmeIdUsuario == id && filmePagina == "estudo"){
                      resultadoFiltro = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                      <p class='title'>${filmeNome}</p><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button></div>` 
                      listarFilmesNaTela(resultadoFiltro);
                    }       
                  }
                })
              }              
            })
          }
        )
      }
    }
  )
}

//Redireciona para página de vídeos de estudo
function videoEstudo() {
  location.href="page-videos-estudo.html"
}

//Redireciona para página de cadastro de vídeos de estudo
function criarVideoEstudo(){
  location.href="cadastro-video-estudo.html"
}

//Adiciona na página de vídeos a funcionalidade de quando apertar a tecla "Enter" no teclado aciona o botão localizar
document.addEventListener("keypress", function (event) {
  if (event.key == "Enter"){
    const btn = document.querySelector("#btnPesquisar")
    btn.click()
  }
})

//Adiciona na página de cadastrar vídeos a funcionalidade de quando apertar a tecla "Enter" no teclado aciona o botão adicionar
document.addEventListener("keypress", function (event) {
  if (event.key == "Enter"){
    const btn = document.querySelector("#btnAdicionarVideoEstudo")
    btn.click()
  }
})

      

//Adicionar nova categoria na pagina de cadastro
function adicionarCategoria() {
  let input = document.getElementById("addOption")
  let select = document.getElementById("selectCategoriaVideoEstudo")

  let newOption = document.createElement("option")
  newOption.value = input.value
  newOption.text = input.value

  select.add(newOption)
  input.value = ""

  var cadastraCategoria = {
    "IdUsuario": id,
    "Categoria": newOption.value,
  }

  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias", {
    method: "POST", 
    headers:{
      "Content-type": "application/json"  
    },
    body: JSON.stringify(cadastraCategoria),
  })
}
    
//Lista a categoria na pagina de cadastro
fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
  .then(response => { return response.json()})
  .then(jsonBody => { 
    jsonBody.forEach(function(valorAtual, indice) {
      var videoCategoria = jsonBody[indice].Categoria
      var videoIdUsuario = jsonBody[indice].IdUsuario

      if(videoIdUsuario == id) {
        var novaCategoria = document.querySelector("#selectCategoriaVideoEstudo")
        novaCategoria.innerHTML = novaCategoria.innerHTML + `<option value="${videoCategoria}" >${videoCategoria}</option>`
      }
    })
  }
)

//Lista a categoria na pagina de videos
fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_categorias/categorias")
  .then(response => { return response.json()})
  .then(jsonBody => { 
    jsonBody.forEach(function(valorAtual, indice) {
      var videoCategoria = jsonBody[indice].Categoria
      var videoIdUsuario = jsonBody[indice].IdUsuario

      if(videoIdUsuario == id) {
        var categoriaPageVideos = document.querySelector("#filtroCategoriaEstudo")
        categoriaPageVideos.innerHTML = categoriaPageVideos.innerHTML + `<option value="${videoCategoria}" >${videoCategoria}</option>`
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