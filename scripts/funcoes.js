var dados = [];
function buscaUsuarios(){
    return fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios")
}

fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios")
  .then(
      response => {return response.json()})
      .then(
        data => (
          //dados.push(data), 
          data.forEach(function (elemento){
            //console.log("Dentro do ForEach: " + elemento.Nome)
            //if(elemento.Nome == "Lucas Souza"){
              //console.log("Dentro do IF: " + elemento.Nome)
            //}
            dados.push(elemento)
        })
          //console.log(data)
          //location.href="user-page.html"
          //status: response.status
        )
      
      /* .then(res => {
        //console.log(res.status, res.data[0].Nome)
        document.write(res.status, 
          res.data[1].Nome)
      }) */
  );
  
  console.log("Fora: " + JSON.stringify(dados))

  for(var i = 0; i < 5; i++){
    console.log(dados[i].Nome)
  }
  dados.forEach(function(itens){
    //console.log(itens.Id + " | " + itens.Nome + " ! " + itens.Senha)
    console.log("ola ")

  })


