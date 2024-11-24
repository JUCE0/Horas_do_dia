function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = 19
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/BomDia.png'
        document.body.style.background = '#4c3837'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'imagens/BoaTarde.png'
        document.body.style.background = '#b7bc9a'
    } else {
        //Boa noite!
        img.src = 'imagens/BoaNoite.png'
        document.body.style.background = '#182949'
    }
}