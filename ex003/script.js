function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.Value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Cruança
                img.setAttribute('src', 'imagem/menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/homemjv.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/homemad.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/homemid.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Cruança
                img.setAttribute('src', 'imagem/menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/mulherjv.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/mulherad.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/mulherid.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}