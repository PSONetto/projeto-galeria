import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

// handlerIn
function changeColorIn() {
    $(this).removeClass('text-white').addClass('text-info')
}

// handlerOut
function changeColorOut() {
    $(this).removeClass('text-info').addClass('text-white')
}

// Basicamente o método hover refeito.
$.fn.hoverEmphasis = function(handlerIn, handlerOut) {
    this.on('mouseenter', handlerIn).on('mouseleave', handlerOut)
}

function addHoverEmphasis() {
    $('a.hover-emphasis').hoverEmphasis(changeColorIn, changeColorOut)
}

onLoadHtmlSuccess(addHoverEmphasis)