import image from './assets/image.png'
import {TitleBlock, Text, Columns, Img} from './class/block'


export const model = [
    new TitleBlock('HTML Constructor', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #492340)',
            color: '#ccc',
            'text-align': 'center',
            'border-radius': '5px',
            margin: '1rem',

        }
    }),
    new Text('Hello from text', {styles: {'text-align': 'center'}}),
    new Columns([
        'Hello from content 1',
        'Hello from content 2',
        'Hello from content 3',
    ],{styles: {
            'font-size': '24px',
            'text-align': 'center'
        }}),
    new Img(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        }
    })
]

// {type: 'columns', value: 
// [
//     'Hello from content 1',
//     'Hello from content 2',
//     'Hello from content 3',
// ],
// options: {
//     styles: {
//         'font-size': '24px',
//         'text-align': 'center'
//     }
// }},