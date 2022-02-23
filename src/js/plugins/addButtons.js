import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'
import { citySet } from '../core/loadImgs'

const duration = 500


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

$.fn.addButtons = function (text, buttonId) {
    this.append($('<button>')
        .attr('type', 'button')
        .attr('button-name', buttonId)
        .addClass('btn btn-outline-dark m-1 city-button')
        .text(text))
    return this
}

function addButtonsGroup() {
    
    for (let element of citySet) {
        let cityName = formatName(element)
        $('#city-buttons').addButtons(cityName, element)
    }
}

function filterByCity() {
    $('.city-button').each((i, e) => {
        const city = $(e).attr('button-name')

        $(e).on('click', function () {
            $('.active').removeClass('active')

            $(e).toggleClass('active')

            if ($(e).attr('button-name') == 'All') {
                $('img[city]').each((i, e) => {
                    $(e).parent().fadeIn(duration)
                })
            } else {
                $(`img[city='${city}']`).each((i, e) => {
                    $(e).parent().fadeIn(duration)
                })

                $(`img:not([city="${city}"]`).each((i, e) => {
                    $(e).parent().fadeOut(duration)
                })
            }
        })
    })
}

onLoadHtmlSuccess(function () {
    addButtonsGroup()

    filterByCity()
})