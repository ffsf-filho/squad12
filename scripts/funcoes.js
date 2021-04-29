function validaUsuario(){
  const userNome = document.getElementById("userAdress").value;
  const userSenha = document.getElementById("userPass").value;

  fetch("https://personal-9ucqet77.outsystemscloud.com/Squad12App/rest/api_usuarios/usuarios", {method: "GET"})
    .then(response => {return response.json()})
     .then(data => {
        console.log(data)
        console.log(data.length)

        for(var i =0; i < data.length; i++)
          {
            console.log(data[i].Senha + " |" + data[i].Usuario);
            if(data[i].Usuario == userNome && data[i].Senha == userSenha){
              location.href="user-page.html"
              console.log("funcionou")
              break
            } else {
              let wrongData = document.getElementById('messageError')
              wrongData.style.display = 'inline';
              console.log("veio pro else")
            }
          }
        }
      )}


