function timeToStudy () {
    location.href="page-videos-estudo.html"
}

function timeToPlay () {
    location.href="page-videos-lazer.html"
}


//modal sair
const sairHtml = document.getElementById("sair")
sairHtml.addEventListener("click", sair)

function sair() {
    const modal = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Saindo...</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Deseja realmente sair?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                    <button onclick='sair(${location.href='login.html'})' type="button">Sair</button>
                </div>
            </div>
        </div>
    </div>
    `

    sairHtml.insertAdjacentElement('beforebegin', modal)
}

