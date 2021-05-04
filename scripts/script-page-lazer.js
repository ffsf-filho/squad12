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

console.log("Usuario: " + usuario + " | id: " + id);



function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = filme;
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  };


var resultado;

fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos").then(
  response => {
    return response.json();
  }).then(jsonBody => {
    jsonBody.forEach(function(valorAtual, indice) {
    
    var filmePagina = jsonBody[indice].Pagina
    let filmeUrl = jsonBody[indice].url
    var filmeId = jsonBody[indice].Id
    var filmeNome = jsonBody[indice].Nome
    var filmeIdUsuario = jsonBody[indice].IdUsuario

    filmeUrl = filmeUrl.replace("youtu.be/", "www.youtube.com/embed/");
    filmeUrl = filmeUrl.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
  
    if(filmeIdUsuario == id & filmePagina == "lazer"){
var campoDataList = document.querySelector("#historico")
campoDataList.innerHTML = campoDataList.innerHTML + `<option value="${filmeNome}" ></option>`

    resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filmeUrl} 
    title='YouTube video player' frameborder='0' 
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
    </iframe><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button>`

    listarFilmesNaTela(resultado)}})})
     
     
    
function abreModal(filmeId){
  //cria o modal
  const getModal = 
  `<div class="modal" id="modal">
    <div class="modalBox" id="modalBoxId">
      <h5 class="modalBox__titulo">Deletando...</h5>
      <p class="modalBox__descricao">Tem certeza que quer deletar esse vídeo?</p>
      <button type="button" class="modalBox__botao">Não</button>
      <button type="button" class="modalBox__botaoDeleta" onClick="btnDeletaVideo(${filmeId})">Deletar</button>
    </div>
  </div>`
  
  //pega a div modal no html
  const modalHtml = document.getElementById("modalHtml")
  
  //insere e tira do html
  modalHtml.innerHTML = modalHtml.innerHTML + getModal
  modalHtml.addEventListener("click", function(evento) {
    if (evento.target.id == "modal" || evento.target.className == "modalBox__botao") {
      modalHtml.innerHTML = ""
    }
  })
}

//link para página de videos de lazer
function videoLazer() {
  location.href="page-videos-lazer.html"
}

//mensagem de erro no cadastro de videos
function exibeAlerta() {
  const exibeAlerta = document.getElementById("videoError")
  exibeAlerta.style.display = "inline"
}

//link para página de videos de estudo

// function videoEstudo() {
//   location.href="page-videos-estudo.html"
// }



  function btnPesquisar(){
        var listaFilmes = document.querySelector('#listaFilmes');
        listaFilmes.innerHTML = ""

        fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos").then(
        response => {
          return response.json();
        }).then(jsonBody => {
          // console.log(jsonBody)
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
          var filme = jsonBody[indice].url
          filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
          filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
          filmeId = jsonBody[indice].Id

          if(filmeIdUsuario == id & filmePagina == "lazer"){
          resultadoPesquisa = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
          <div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button></div>` 
          listarFilmesNaTela(resultadoPesquisa);
          
        } }}
        )})
}



// function criarVideoEstudo(){
//   location.href="cadastro-video-estudo.html"
// }

function criarVideoLazer(){
  location.href="cadastro-video-lazer.html"
}





function adicionarVideoLazer(){

  var inputNomeVideoLazer = document.querySelector("#inputNomeVideoLazer")

  var selectCategoriaVideoLazer = document.querySelector("#selectCategoriaVideoLazer")
  
  var inputUrlVideoLazer = document.querySelector("#inputUrlVideoLazer")

  console.log(id)
  var dadosVideoLazer = {
    "Nome": inputNomeVideoLazer.value,
    "Categoria": selectCategoriaVideoLazer.value,
    "url": inputUrlVideoLazer.value,
    "IdUsuario": id,
    "Pagina": "lazer",
    }
  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
    method: "POST", 
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(dadosVideoLazer),
  }).then(response => {if (response.ok){console.log(response.status)} 
  console.log(dadosVideoLazer)
  
})};



// function adicionarVideoEstudo(){

//   var inputNomeVideoEstudo = document.querySelector("#inputNomeVideoEstudo")

//   var selectCategoriaVideoEstudo = document.querySelector("#selectCategoriaVideoEstudo")
  
//   var inputUrlVideoEstudo = document.querySelector("#inputUrlVideoEstudo")

//   console.log(id)

//   var dadosVideoEstudo = {
//     "Nome": inputNomeVideoEstudo.value,
//     "Categoria": selectCategoriaVideoEstudo.value,
//     "url": inputUrlVideoEstudo.value,
//     "IdUsuario": id,
//     "Pagina": "estudo",
//     }
//   fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
//     method: "POST", 
//     headers:{
//       "Content-type": "application/json"  
//     },
//     body: JSON.stringify(dadosVideoEstudo),
//   }).then(response => {if (response.ok){console.log(response.status)} 
//   console.log(dadosVideoEstudo)
  
// })};



function btnDeletaVideo(id){

  console.log(id, "true")
  
  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
    method: "DELETE", 
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "Id": id
    }),
  }).then(response => {if (response.ok){console.log(response.status)}
  setTimeout(document.location.reload(true), 1000)})
};