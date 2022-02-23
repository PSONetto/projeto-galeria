import $ from 'jquery'

// Array de callbacks.
const loadHtmlSuccessCallbacks = []

// Adiciona uma callback ao array quando carrega uma página html com sucesso.
export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// Carrega páginas html ajax.
function loadIncludes (parent) {
    // Seta o body como default parent.
    if(!parent) parent = 'body'

    $(parent).find('[include]').each(function(i, e) {
        // Atribui o path para o html contido no atributo include à constante url.
        const url = $(e).attr('include')

        // Requisição ajax pelo jQuery.
        $.ajax({
            url,
            success(data) {
                // Atribui o html recebido pela requisição ajax ao elemento iterado.
                $(e).html(data)
                $(e).removeAttr('include')

                $(document).on('html', (loadHtmlSuccessCallbacks.forEach(callback => callback(data))))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()