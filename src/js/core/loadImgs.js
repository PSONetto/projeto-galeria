import $ from 'jquery'

import { onLoadHtmlSucces } from './includes'

let barrier = false

onLoadHtmlSucces(function() {
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url: '/imgs/imgs.json',
        success : function(data) {
            if (barrier == false) {
                data.forEach(element => {
                    console.log(element.name)
                    let cityName = element.city
                    let imgName = element.name
                    let path = `imgs/${element.name}.jpg`
                    let divClass = 'col'
                    $('.img-box')
                        .append(`<div class="${divClass}"><img src="${path}" alt="${imgName}" class="img-fluid shadow bg-body rounded mb-4" style="height: 225px; width: 100%;" city="${cityName}"></div>`)
                })
                barrier = true
            } 
        } 
    })
})
