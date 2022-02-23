import $ from 'jquery'
import { ajaxManager } from './ajaxManager'

export let citySet = new Set
export let imgJSON = []

const url = '/imgs/imgs.json'

$(function () {
    ajaxManager.run()
    // Requisição ajax para ler o json de imgs.
    $.ajax({
        url,
        success: function (data) {
            imgJSON = [...data]
            imgJSON.forEach(element => {
                citySet.add(element.city)
            })
        }
    })
})
