let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')

let mapa = window.document.querySelector('#mapa')

let okNome = false
let okEmail = false
let okAssunto = false

nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'



function validarNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        okNome = false
    }
    else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        okNome = true
    }

}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        okEmail = false
    }
    else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        okEmail = true
    }


}

function validarAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 10) {
        txtAssunto.innerHTML = 'Digite até 10 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        okAssunto = false
    }
    else {
        txtAssunto.style.display = 'none'
        okAssunto = true
    }


}

function enviar() {
    if (okNome == true && okEmail == true && okAssunto == true) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o formulário corretamente.')
    }
}


function zoomMapa() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}