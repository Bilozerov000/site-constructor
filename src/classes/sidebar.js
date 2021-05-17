import {block} from "../sidebarTemplate";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template(){
        return [block('title'), block('image'), block('text'), block('columns')].join('')
    }

    add(event){
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const options = event.target.options.value
        const styles = event.target.styles.value

        function defineType(type){
            let newBlock

            if (type === 'title'){
                newBlock = new TitleBlock(value, {'tag': options, styles})
            } else if (type === 'image'){
                newBlock = new ImageBlock(value, {'alt': options, styles})
            } else if (type === 'text'){
                newBlock = new TextBlock(value, {'tag': options, styles})
            } else if (type === 'columns'){
                newBlock = new ColumnsBlock([value], {styles})
            }

            return newBlock
        }

        this.update(defineType(type))
    }
}

