import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSucces(cb) {
    if(!loadHtmlSuccessCallbacks.includes(cb)) {
        loadHtmlSuccessCallbacks.push(cb)
    }
}

function loadIncludes (parent) {
    if(!parent) parent = 'body'
    $(parent).find('[include]').each(function(i, e) {
        const url = $(e).attr('include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('include')

                loadHtmlSuccessCallbacks.forEach(cb => cb(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()