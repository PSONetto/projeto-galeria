import $ from 'jquery'

import { onLoadHtmlSucces } from '../core/includes'

function changeColorIn() {
    $(this).removeClass('text-white').addClass('text-info')
}

function changeColorOut() {
    $(this).removeClass('text-info').addClass('text-white')
}

$.fn.hoverEmphasis = function(handlerIn, handlerOut) {
    this.on('mouseenter', handlerIn).on('mouseleave', handlerOut)
}

onLoadHtmlSucces(function() {
    $('a.hover-emphasis').hoverEmphasis(changeColorIn, changeColorOut)
})