const users = "franciscof"
const password = "fco123"

function validaUsuario(){
    fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
      .then(response => {return response.json()})
      .then(data => {
          console.log(data)
          console.log(data.length)
          console.log(users + " == " + password)
          for(var i =0; i < data.length; i++)
          {
            console.log(data[i].Senha + " |" + data[i].Usuario);
            if(data[i].Usuario == users && data[i].Senha == password){
              location.href="user-page.html"
              break
            } else {
              location.href="user-cadastro.html"  
            }
          }
        }
      )
}

validaUsuario()