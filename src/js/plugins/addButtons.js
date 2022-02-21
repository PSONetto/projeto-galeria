import $ from 'jquery'

import { onLoadHtmlSucces } from '../core/includes'
import { citySet } from '../core/loadImgs'

// Formatação dos nomes das cidades.
function formatName(string) {
    if (string == 'nyc') {
        return 'New York'
    } else if (string == 'stpetersburg') {
        return 'St. Petersburg'
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

$.fn.addButtons = function (text) {
    this.append($('<button>')
        .attr('type', 'button')
        .addClass('btn btn-outline-dark m-1').text(text))
    return this
}

onLoadHtmlSucces(function () {
    console.log(citySet)
    for (let element of citySet) {
        let cityName = formatName(element)
        $('#city-buttons').addButtons(cityName)
    }
})