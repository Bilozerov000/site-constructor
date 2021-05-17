import image from "./assets/image.png"
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/blocks";


export const model = [
    new TitleBlock('Title of your website', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        alt: 'image',
        styles: {
            'content-align': 'center'
        }
    }),
    new TextBlock('This application was developed on pure javascript using such instruments as:', {
        styles: {
            'font-weight': 'bold',
            background: 'linear-gradient(to left, #f2994a, #f2c94c)'
        }
    }),
    new ColumnsBlock( ['Parcel', 'Bootstrap'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            'font-style': 'italic',
            padding: '2rem',
            color: '#fff'
        }
    })
]
