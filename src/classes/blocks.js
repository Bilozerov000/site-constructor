import {col, image, row, toCSS} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('method toHTML() has to be realised')
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), toCSS(styles))
    }
}

export class TextBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML(){
        const {tag = 'p', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), toCSS(styles))
    }
}

export class ColumnsBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML(){
        const cols = this.value.map(col).join('')
        return row(cols, toCSS(this.options.styles))
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {alt} = this.options
        return row(image(this.value, alt), toCSS(this.options.styles))
    }
}
