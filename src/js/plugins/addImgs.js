import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'
import { imgJSON } from '../core/loadImgs'

// Cria uma div dentro do target, seta a classe col por padrão.
$.fn.addDiv = function (classes = 'col') {
    this.append($('<div>')
        .addClass(classes))
    return this
}

// Cria uma imagem dentro do target, seta todos os parâmetros.
$.fn.addImg = function (path, classes, alt, city) {
    this.append($('<img>')
        .attr('src', path)
        .addClass(classes)
        .attr('alt', alt)
        .attr('city', city))
    return this
}

function addImgs() {
    imgJSON.forEach(element => {
        const imgSrc = `imgs/${element.name}.jpg`
        const imgClass = 'img-fluid img-thumbnail shadow mb-4'
        const imgName = element.name
        const imgCity = element.city

        $('#album').addDiv()
            .find(':last')
            .addImg(imgSrc, imgClass, imgName, imgCity)
    })
}


onLoadHtmlSuccess(addImgs)