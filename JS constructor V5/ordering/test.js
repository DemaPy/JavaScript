








const obj = {
    ordering: [ 'Header',
                'Items',
                'Paragraph',
                'Category',
                'Title'
            ],
    elements: {
        Header: [
            {
                "type": "img",
                "data": {
                    "link": "https://www.beliani.ch/content/lp22-09-05/",
                    "url": "https://beliani.info/newsletter/2022/220905chde_01.jpg"
                },
                "options": {
                    "colspan": "2"
                }
            },
            {
                "type": "img",
                "data": {
                    "link": "https://www.beliani.ch/content/lp22-09-05/",
                    "url": "https://beliani.info/newsletter/2022/220905gif.gif"
                },
                "options": {
                    "colspan": "2"
                }
            },
        ],
        Items: [
            {
                "type": "img",
                "data": [
                    {
                        "link": "https://www.beliani.ch/regenschutz-fur-gartenmobel-hellblau-230-x-225-x-65-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_14.jpg"
                    },
                    {
                        "link": "https://www.beliani.de/regenschutz-fur-gartenmobel-320-x-120-x-90-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_15.jpg"
                    }
                ],
                "options": {
                    "column": "2"
                }
            },
            {
                "type": "img",
                "data": [
                    {
                        "link": "https://www.beliani.de/regenschutz-fur-gartenmobel-275-x-230-x-70-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_16.jpg"
                    },
                    {
                        "link": "https://www.beliani.de/regenschutz-fur-gartenmobel-205-x-70-x-35-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_17.jpg"
                    }
                ],
                "options": {
                    "column": "2"
                }
            },
            {
                "type": "img",
                "data": [
                    {
                        "link": "https://www.beliani.de/regenschutz-fur-sonnenschirme-210-x-45-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_18.jpg"
                    },
                    {
                        "link": "https://www.beliani.de/regenschutz-fur-gartenmobel-250-x-165-x-65-cm.html",
                        "url": "https://beliani.info/newsletter/2022/220905chde_19.jpg"
                    }
                ],
                "options": {
                    "column": "2"
                }
            },
        ],
        Paragraph:    {
            "type": "text",
            "data": {
                "text": "Jetzt, wo sich das Saisonende nähert, kannst du die fröhlichen Sommerfarben dazu nutzen, um das natürliche Licht in dein Zuhause zu bringen und lange Abende im Garten zu geniessen."
            },
            "options": {
                "fontSize": "18px",
                "colspan": "2"
            }
        },
        Title:     {
            "type": "text",
            "data": {
                "text": "Outdoor-Oase"
            },
            "options": {
                "fontSize": "30px",
                "colspan": "2"
            }
        },
        Category: [
            {
                "type": "img",
                "data": {
                    "link": "https://www.beliani.de/gartenmoebel/gartenaccessoires/",
                    "url": "https://beliani.info/newsletter/2022/220905de_37.jpg",
                    "alt": ""
                },
                "options": {
                    "colspan": "2"
                }
            },
            {
                "type": "img",
                "data": [
                    {
                        "name": "VITTORIA XL",
                        "link": "https://www.beliani.ch/gartenmobel-set-rattan-braun-grau-vittoria-xl.html",
                        "url": "https://beliani.info/newsletter/2022/220905de_38.jpg",
                        "alt": ""
                    },
                    {
                        "name": "JAVA",
                        "link": "https://www.beliani.ch/gartenstuhl-akazienholz-hellbraun-2er-set-auflagen-cremeweiss-java.html",
                        "url": "https://beliani.info/newsletter/2022/220905de_39.jpg",
                        "alt": ""
                    }
                ],
                "options": {
                    "column": "2"
                }
            },
            {
                "type": "img",
                "data": [
                    {
                        "name": "VITTORIA XL",
                        "link": "https://www.beliani.ch/gartenmobel-set-rattan-braun-grau-vittoria-xl.html",
                        "url": "https://beliani.info/newsletter/2022/220905de_40.jpg",
                        "alt": ""
                    },
                    {
                        "name": "JAVA",
                        "link": "https://www.beliani.ch/gartenstuhl-akazienholz-hellbraun-2er-set-auflagen-cremeweiss-java.html",
                        "url": "https://beliani.info/newsletter/2022/220905de_41.jpg",
                        "alt": ""
                    }
                ],
                "options": {
                    "column": "2"
                }
            },
            {
                "type": "img",
                "data": {
                    "url": "https://beliani.info/newsletter/2022/220905de_32.jpg",
                    "alt": ""
                },
                "options": {
                    "colspan": "2"
                }
            },
            {
                "type": "text",
                "data": {
                    "link": "https://www.beliani.ch/gartenmobel/",
                    "text": "Jetzt shoppen"
                },
                "options": {
                    "fontSize": "18px",
                    "colspan": "2"
                }
            },
        ]
    }
}

function sort(element1, element2) {
    const el1 = obj.ordering[element1]
    const el2 = obj.ordering[element2]
    obj.ordering[element1] = el2
    obj.ordering[element2] = el1
    document.querySelector('#newsletter').innerHTML = ''
    return update()
}

window.s = sort
function update() {
    obj.ordering.map(item => {
        Array.isArray(obj.elements[item]) ? 
                    obj.elements[item].map(block => block.type === 'img' ? render(img(block)) : render(text(block)))
                : obj.elements[item].type === 'img' ? render(img(obj.elements[item])) : render(text(obj.elements[item]))
    })
}

window.onload = () => update()


function render(html) {
    return document.querySelector('#newsletter').innerHTML += html
}



function img(block) {
    const {colspan, column} = block.options
    const colSpan = colspan ? colspan : '2'

    if (column) {
        let columns = block.data.map(item => {
            return `
                <td>
                    <a href="${item.link}">
                        <img src="${item.url}" alt="" style="display: block;" width="100%" border="0">
                    </a>
                </td>`
        })

        let row = `
                <tr>
                    ${columns.join('')}
                </tr>`
        return row
    } else if (block.data.link && !column) {
        const {link, url} = block.data
        let html = `
            <tr>
                <td colspan="${colSpan}" >
                    <a href="${link}">
                        <img src="${url}" alt="" style="display: block;" width="100%" border="0">
                    </a>
                </td>
            </tr>`
        return html
    } else {
        const {url} = block.data

        let html = `
            <tr>
                <td colspan="${colSpan}" >
                    <img src="${url}" alt="" style="display: block;" width="100%" border="0">
                </td>
            </tr>`
        return html
    }
}

function text(block) {
    const {text} = block.data
    const {colspan, color, background, fontSize, textAlign} = block.options

    const fontColor = color ? color : '#242222'
    const colSpan = colspan ? colspan : '2'
    const backgroundColor = background ? background :'#ffffff'
    const align = textAlign ? textAlign : 'center'
    const font = fontSize ? fontSize : '18px'

    if (block.data.link) {
        const link = block.data.link
        let html = `<tr>
                        <td style="background-color: ${backgroundColor}; font-family: 'Open Sans', sans-serif; text-align: ${align}; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" colspan="${colSpan}" width="610" >
                            <a style="color:${fontColor};" href="${link}">
                                <p style="font-size: ${font}; color:${fontColor}; text-align:${align}!important; line-height: 1.3; margin: 0!important;">${text}</p>
                            </a>
                        </td>
                    </tr>`
        return html
    } else {
        let html = `<tr>
                        <td style="background-color: ${backgroundColor}; font-family: 'Open Sans', sans-serif; text-align: ${align}; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" colspan="${colSpan}" width="610" >
                            <p style="font-size: ${font}; color:${fontColor}; text-align:${align}!important; line-height: 1.3; margin: 0!important;">${text}</p>
                        </td>
                    </tr>`
        return html
    }
}
