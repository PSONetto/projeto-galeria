import $ from 'jquery'

import { onLoadHtmlSucces } from './includes'

// Impede que o JSON seja carregado mais de uma vez
let barrier = false

function capitalizeFirstLetter(string) {
    if (string == 'nyc') {
        return 'New York'
    } else if (string == 'stpetersburg') {
        return 'St. Petersburg'
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

onLoadHtmlSucces(function() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/imgs/imgs.json',
        success: function(data) {
            let citySet = new Set
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

                    const buttonName = capitalizeFirstLetter(cityName)
                    citySet.add(buttonName)
                    

                    $('#album')
                        .append(`<div ${divClass}><img ${imgSrc} ${imgAlt} ${imgClass} ${imgStyle} ${imgCity}></div>`)

                    
                })
                barrier = true
                console.log(citySet)

                for (let item of citySet.values()) {
                    $('#city-buttons')
                        .append(`<button type="button" class="btn btn-outline-dark m-1">${item}</button>`)
                }
            } 
        } 
    })
})
