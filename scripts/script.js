

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
     
     let filmeUrl = jsonBody[indice].url
     let filmeId = jsonBody[indice].Id
     console.log(filmeUrl)
     filmeUrl = filmeUrl.replace("youtu.be/", "www.youtube.com/embed/");
     filmeUrl = filmeUrl.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
  
     resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filmeUrl} 
     title='YouTube video player' frameborder='0' 
     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
     </iframe><div><button type='button' id='btnDeletaVideo' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Excluir vídeo</button>`
          //Modal 
          resultado = resultado + `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Excluir vídeo</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Deseja deletar o vídeo?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                  <button onclick='btnDeletaVideo(${filmeId})' type="button" class="btn btn-primary">Deletar</button>
                </div>
              </div>
            </div>
          </div>   
     </div></div>`   
  
     listarFilmesNaTela(resultado)})})
    
    
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
    jsonBody.forEach(function(valorAtual, indice) {
      if(valorAtual.Nome == filmePesquisado){
     console.log(jsonBody[indice].url)
    
     var filme = jsonBody[indice].url
     filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
     filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
         
     var resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>` 
    listarFilmesNaTela(resultado);

  }}
  )})
}








function criarVideoEstudo(){
  location.href="cadastro-video-estudo.html"
}

function criarVideoLazer(){
  location.href="cadastro-video-lazer.html"
}





function adicionarVideoLazer(){

  var inputNomeVideoLazer = document.querySelector("#inputNomeVideoLazer")

  var selectCategoriaVideoLazer = document.querySelector("#selectCategoriaVideoLazer")
  
  var inputUrlVideoLazer = document.querySelector("#inputUrlVideoLazer")

  var dadosVideoLazer = {
    "Nome": inputNomeVideoLazer.value,
    "Categoria": selectCategoriaVideoLazer.value,
    "url": inputUrlVideoLazer.value
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



function adicionarVideoEstudo(){

  var inputNomeVideoEstudo = document.querySelector("#inputNomeVideoEstudo")

  var selectCategoriaVideoEstudo = document.querySelector("#selectCategoriaVideoEstudo")
  
  var inputUrlVideoEstudo = document.querySelector("#inputUrlVideoEstudo")

  var dadosVideoEstudo = {
    "Nome": inputNomeVideoEstudo.value,
    "Categoria": selectCategoriaVideoEstudo.value,
    "url": inputUrlVideoEstudo.value
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






function btnDeletaVideo(id){
  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos", {
    method: "DELETE", 
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      Id: id
    }),
  }).then(response => {if (response.ok){console.log(response.status)}
  setTimeout(document.location.reload(true), 1000)})
};

