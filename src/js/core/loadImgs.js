import $ from 'jquery'

import { onLoadHtmlSucces } from './includes'

// Impede que as imagens sejam carregadas mais de uma vez
let barrier = false

onLoadHtmlSucces(function() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/imgs/imgs.json',
        success: function(data) {
            if (barrier == false) {
                data.forEach(element => {
                    const cityName = element.city
                    const imgName = element.name
                    const path = `imgs/${element.name}.jpg`

                    const divClass = 'class="col"'
                    const imgSrc = `src="${path}"`
                    const imgAlt = `alt="${imgName}"`
                    const imgClass = 'class="img-fluid img-thumbnail shadow mb-4 hover-emphasis"'
                    const imgStyle = 'style="height: 225px; width: 100%;"'
                    const imgCity = `city="${cityName}"`

                    $('#album')
                        .append(`<div ${divClass}><img ${imgSrc} ${imgAlt} ${imgClass} ${imgStyle} ${imgCity}></div>`)
                })
                barrier = true
            } 
        } 
    })
})
