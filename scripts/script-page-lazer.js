let usuario = ""
let id
let personagem = ""
let imgUrlAvatar ="images/"

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
        personagem = camaraRoll[i].personagem
    }
}

//modal para deslogar 

//modal para sair da página 

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



function sair() { 
  localStorage.removeItem("@camaraRoll-Users");// Remove o item
  location.href="index.html"
}

console.log("Usuario: " + usuario + " | id: " + id);


//inclui o Nick do usuário
let nickName = document.getElementById("nick")
nickName.innerHTML = `<p id="${id}" class="userStatus__text___label" > Nick: ${usuario}</p>`

//troca a imagem do avatar
if(personagem != ""){
    imgUrlAvatar += personagem
    let imgDivAvatar = document.getElementById("imgAvatar")
    imgDivAvatar.style.backgroundImage = `url(${imgUrlAvatar})`
}


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
  
    if(filmeIdUsuario == id && filmePagina == "lazer"){
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

          if(filmeIdUsuario == id && filmePagina == "lazer"){
          resultadoPesquisa = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
          <div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button></div>` 
          listarFilmesNaTela(resultadoPesquisa);
          
        } }}
        )})
}


//link para página de videos de lazer
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




function filtrarCategoria(){
    
  var resultado;
  var listaFilmes = document.querySelector('#listaFilmes');
  listaFilmes.innerHTML = ""

  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos").then(
  response => {
    return response.json();
  }).then(jsonBody => {

    var campoFiltrarCategoria = document.querySelector('#filtroCategoriaLazer');
    var filtroAplicado = campoFiltrarCategoria.value;

    if(filtroAplicado == "Sem filtro"){     

          jsonBody.forEach(function(valorAtual, indice) {
          
          var filmePagina = jsonBody[indice].Pagina
          let filmeUrl = jsonBody[indice].url
          var filmeId = jsonBody[indice].Id
          var filmeNome = jsonBody[indice].Nome
          var filmeIdUsuario = jsonBody[indice].IdUsuario
      
          filmeUrl = filmeUrl.replace("youtu.be/", "www.youtube.com/embed/");
          filmeUrl = filmeUrl.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
        
          if(filmeIdUsuario == id && filmePagina == "lazer"){
      
          resultado = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filmeUrl} 
          title='YouTube video player' frameborder='0' 
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
          </iframe><div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button>`
      
          listarFilmesNaTela(resultado)}})}

    else {
  
          jsonBody.forEach(function(valorAtual, indice) {

            const valorAtualCategoria = valorAtual.Categoria
            let resultadoFiltro;
          
            if(valorAtualCategoria.includes(filtroAplicado)){
          
              var filmePagina = jsonBody[indice].Pagina
              var filmeIdUsuario = jsonBody[indice].IdUsuario                      
              var filme = jsonBody[indice].url
              filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
              filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
              filmeId = jsonBody[indice].Id
              filmeCategoria = jsonBody[indice].Categoria

              if(filmeIdUsuario == id && filmePagina == "lazer"){
              resultadoFiltro = `<div id='cartao' class='cartao'><iframe width='280' height='157' src=${filme} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
              <div><button type='button' id='btnDeletaVideo' onClick="abreModal(${filmeId})">Excluir vídeo</button></div>` 
              listarFilmesNaTela(resultadoFiltro);
          
            }}}
        )}})
 }
