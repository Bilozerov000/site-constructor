export function row (content, styles = ''){
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col (content){
    return `<div class="col-sm">${content}</div>`
}

export function image (url, altValue){
    return `<img src="${url}" alt="${altValue}" />`
}

export function toCSS (styles = {}){
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}


