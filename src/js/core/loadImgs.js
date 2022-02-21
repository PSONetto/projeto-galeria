import $ from 'jquery'

export let citySet = new Set
export let imgJSON = []

// Impede que o JSON seja carregado mais de uma vez.
let barrier = false

const url = '/imgs/imgs.json'

// Requisição ajax para ler o json de imgs.
$.ajax({
    url,
    success: function (data) {
        if (!barrier) {
            imgJSON = [...data]

            imgJSON.forEach(element => {
                citySet.add(element.city)
            })
        }
        console.log('JSON loaded successfully')
        barrier = true
    }
})