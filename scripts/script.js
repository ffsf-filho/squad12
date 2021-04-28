// var filmes = [
//   {nome:"Star Wars: Episode IV - A New Hope",ano:1977,genero:"Action,Adventure,Fantasy",urlSite:"https://www.youtube.com/embed/vZ734NWnAHA",urlImg:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"}, 
//   {nome:"Toy Story",ano:1995,genero:"Comedy,Drama",urlSite:"https://www.youtube.com/embed/4KPTXpQehio",urlImg:"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, 
//   {nome:"Interstellar",ano:2014,genero:"Adventure,Drama,Sci-fi",urlSite:"https://www.youtube.com/embed/zSWdZVtXT7E",urlImg:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"Dead Poets Society",ano:1989,genero:"Comedy,Drama",urlSite:"https://www.youtube.com/embed/ye4KFyWu2do",urlImg:"https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"Good Will Hunting",ano:1997,genero:"Drama,Romance",urlSite:"https://www.youtube.com/embed/PaZVjZEFkRs",urlImg:"https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"Monsters, Inc.",ano:2001,genero:"Animation,Adventure,Comedy",urlSite:"https://www.youtube.com/embed/CGbgaHoapFM",urlImg:"https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"The Dark Knight",ano:2008,genero:"Action,Crime,Drama",urlSite:"https://www.youtube.com/embed/EXeTwQWrcwY",urlImg:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"The Godfather",ano:1972,genero:"Crime,Drama",urlSite:"https://www.youtube.com/embed/sY1S34973zA",urlImg:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"},
//   {nome:"Zack Snyder's Justice League",ano:2021,genero:"Action,Adventure,Fantasy",urlSite:"https://www.youtube.com/embed/vM-Bja2Gy04",urlImg:"https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"Death Note",ano:2017,genero:"Action,Crime,Drama",urlSite:"https://www.youtube.com/embed/R0BaQa0VNKk",urlImg:"https://m.media-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"The irishman",ano:2019,genero:"Biography,Crime,Drama",urlSite:"https://www.youtube.com/embed/WHXxVmeGQUc",urlImg:"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UY268_CR0,0,182,268_AL_.jpg"},
//   {nome:"The Bone Collector",ano:1999,genero:"Crime,Drama,mystery",urlSite:"https://www.youtube.com/embed/w4z4Xsp-bos",urlImg:"https://m.media-amazon.com/images/M/MV5BOWQxN2ZmNDMtMzA2Ny00ZDJhLTlkNTgtMWMyZjljY2QzMzNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"The Green Mile",ano:1999,genero:"Crime,Drama,Fantasy",urlSite:"https://www.youtube.com/embed/Ki4haFrqSrw", urlImg:"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"The Matrix",ano:1999,genero:"Action,Sci-fi",urlSite:"https://www.youtube.com/embed/vKQi3bBA1y8",urlImg:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
//   {nome:"Hansel & Gretel: Witch Hunters",ano:2013,genero:"Action,fantasy,Horror",urlSite:"https://www.youtube.com/embed/9246msCh7x4",urlImg:"https://m.media-amazon.com/images/M/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"}
//  ];
// for (var i = 0; i < filmes.length; i++){
// adicionarFilme(filmes[i].urlSite);
// // };

// function adicionarFilme(filme){
// var campoFilmeFavorito = document.querySelector('#filme');
// var filmeFavorito = ""
// var listaFilmes = document.querySelector('#listaFilmes');
// var texto = listaFilmes.innerHTML;

// if(filme.length > 0){
// filmeFavorito = filme;
// } else{
// filmeFavorito = campoFilmeFavorito.value;  
// };

// filmeFavorito = filmeFavorito.replace("youtu.be/", "www.youtube.com/embed/");
// filmeFavorito = filmeFavorito.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
// if(texto.includes(filmeFavorito) == false){
// if(filmeFavorito.startsWith('https://www.youtube.com/embed/')){
// var filmeCartao = "<div id='cartao' class='cartao'><iframe width='280' height='157' src='";
// filmeCartao = filmeCartao + filmeFavorito;
// filmeCartao = filmeCartao + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
// listarFilmesNaTela(filmeCartao);
// } else {
// alert("Endereço invalido !!\n" + filmeFavorito);
// };
// } else {
// alert("O Filme:\n" + filmeFavorito + "\nJá esta Listado.")
// }

// campoFilmeFavorito.value = "";
// };

function listarFilmesNaTela(filme){
var listaFilmes = document.querySelector('#listaFilmes');
var elementoFilme = filme;
listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
};


// function btnPesquisar (){
//   fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_videos/videos").then(
//   response => {
//     return response.json();
//   }).then(jsonBody => {
//     console.log(jsonBody[jsonBody.indexOf(document.querySelector("#pesquisaFilme").value)].url;
//     filme = filme.replace("youtu.be/", "www.youtube.com/embed/");
//     filme = filme.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
    
//     var resultado = "<div id='cartao' class='cartao'><iframe width='280' height='157' src='" + filme + "title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>" 
//     listarFilmesNaTela(resultado);
//     console.log(filme)
//   })
// }  

function btnPesquisar (){
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