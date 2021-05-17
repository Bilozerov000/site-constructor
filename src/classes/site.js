export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    render(blocks = []){
        this.$el.innerHTML = ''
        blocks.forEach(block => this.$el.insertAdjacentHTML('beforeend', block.toHTML()))
    }
}
