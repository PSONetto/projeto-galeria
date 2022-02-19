import $ from 'jquery'

import { onLoadHtmlSucces } from './includes'

onLoadHtmlSucces(function() {
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url: '/imgs/imgs.json',
        success : function(data) {
            data.forEach(element => {
                console.log(element.name)
                let cityName = element.city
                let imgName = element.name
                let path = `imgs/${element.name}.jpg`
                $('.img-box')
                    .append(`<div class"col-12 col-md-6 col-lg-3"></div>`)
                    .append(`<img src="${path}" alt="${imgName}" class="img-fluid mb-4" city="${cityName}">`)
            })
        } 
    })
})
