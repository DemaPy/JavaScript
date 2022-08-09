import { newsletterGen, newsletterGenTest } from "./app.js"
import { data } from './model.js'
import { selectors } from './selectors.js'
export const link = data.links
const text = data.text
const colspan = '2'
let date = getLocalStorage("date")


export function shopNow(link, text){
    return`
    <tr>
        <td colspan="${colspan}" style="font-family: 'Open Sans', sans-serif; text-align:center; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
        <a style="color:#242222;" href="${link}"><p style="font-size: 20px; color:#242222; text-align:center!important; line-height: 1.3; margin: 0!important; margin: 0; text-decoration: underline;">${text}</p></a>
        </td>
    </tr>
    ` 
}

export function watchNow(){
    return`
    <tr>
        <td colspan="${colspan}" style="font-family: 'Open Sans', sans-serif; text-align:center; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
            <a style="color:#242222;" href=https://www.youtube.com/watch?v=J2LeoTLHVjk?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${checkId(data.links[0])}>
                <p style="font-size: 20px; color:#242222; text-align:center!important; line-height: 1.3; margin: 0!important; margin: 0; text-decoration: underline;">${checkWatchNow(link[0])}</p>
            </a>
        </td>
    </tr>
    ` 
}

export function title(text, align, color='#fff') {
    return`
    <tr>
        <td colspan="${colspan}" style="background-color: ${color}; font-family: 'Open Sans', sans-serif; text-align:${align}; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
            <p style="font-size: 30px; color:#242222; text-align:${align}!important; line-height: 1.3; margin: 0!important;">
                ${text}
            </p>
        </td>
    </tr>
    `
}

export function paragraph(text, align, color) {
    return`
    <tr>
        <td colspan="${colspan}" style="background-color: ${color}; font-family: 'Open Sans', sans-serif; text-align:${align}; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
            <p style="font-size: 18px; color:#242222; text-align:${align}!important; line-height: 1.3; margin: 0!important;">
                ${text}
            </p>
        </td>
    </tr>
    `
}

export function categoryImg(link, num) {
    return`
    <tr>
        <td colspan="${colspan}">
            <a href="${link}"><img src=https://beliani.info/newsletter/2022/${date}${checkImage(link)}_${num}.jpg alt="" style="display: block;" width="100%" border="0" /></a>
        </td>
    </tr>
    `
}

export function spaceBtwText(num) {
    return`
    <tr>
        <td colspan="${colspan}">
            <img src=https://beliani.info/newsletter/2022/${date}${checkImage(getAllLocalStorage("links")[0])}_${num}.jpg alt="" style="display: block;" width="100%" border="0" />
        </td>
    </tr>
    `
}

export function soonEnding(link,campaign1,campaign2, num1, num2) {
    return `
    <tr>
        <td colspan="${colspan}">
            <img src=https://beliani.info/newsletter/2022/soonend${checkSoonEnding(link)}.jpg alt="" style="display:block" width="100%" border="0" />
        </td>
    </tr>
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${checkLink(link)}/content/${campaign1}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${checkImage(link)}_${num1}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${checkLink(link)}/content/${campaign2}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${checkImage(link)}_${num2}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    `
}

export function lpLink(link,campaign, num) {
    return `
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${checkLink(link)}/content/${campaign}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${checkImage(link)}_${num}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    `
}

export function box(link1, link2, link3 ,link4, num1, num2, num3, num4) {
    return `
    <tr>
        <td><a href="${link1}"><img src=https://beliani.info/newsletter/2022/${date}${checkImage(link1)}_${num1}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
        <td><a href="${link2}"><img src=https://beliani.info/newsletter/2022/${date}${checkImage(link1)}_${num2}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
    </tr>
    <tr>
        <td><a href="${link3}"><img src=https://beliani.info/newsletter/2022/${date}${checkImage(link1)}_${num3}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
        <td><a href="${link4}"><img src=https://beliani.info/newsletter/2022/${date}${checkImage(link1)}_${num4}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
    </tr>
    `
}

export function youTube(num, yt) {
    return `
    <tr>
        <td colspan="${colspan}">
            <a href="${yt}">
                <img src=https://beliani.info/newsletter/2022/${date}${checkImage(data.links[0])}_${num}.jpg alt="" style="display: block;" width="100%" border="0">
            </a>
        </td>
    </tr>
    `
}

export const newsletter = {
    box, 
    shopNow, 
    title, 
    paragraph, 
    categoryImg, 
    spaceBtwText, 
    soonEnding, 
    lpLink, 
    youTube, 
    watchNow
}


function checkImage(img) {
    return JSON.stringify(img).includes('.co.uk')?'uk':JSON.stringify(img).includes('.ch')? 'chde' :JSON.stringify(img).slice(21,23)
}

function checkLink(link) {
    return JSON.stringify(link).includes('.co.uk')?'co.uk':JSON.stringify(link).slice(21,23)
}

function checkId(id) {
    return JSON.stringify(id).substring(JSON.stringify(id).length-6)
}

function checkShopNow(shopNow) {
    return (
    JSON.stringify(shopNow).includes('.co.uk')?
    'Shop Now'
    :JSON.stringify(shopNow).includes('.pl')?
    'Kup teraz'
    :JSON.stringify(shopNow).includes('.de')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.at')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.ch')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.fr')?
    'Acheter maintenant'
    :JSON.stringify(shopNow).includes('.es')?
    'Compra ahora'
    :JSON.stringify(shopNow).includes('.pt')?
    'Compre já'
    :JSON.stringify(shopNow).includes('.it')?
    'Acquista ora'
    :JSON.stringify(shopNow).includes('.nl')?
    'Koop nu'
    :JSON.stringify(shopNow).includes('.no')?
    'Kjøp nå'
    :JSON.stringify(shopNow).includes('.fi')?
    'Osta nyt'
    :JSON.stringify(shopNow).includes('.dk')?
    'Køb nu'
    :JSON.stringify(shopNow).includes('.se')?
    'Handla nu'
    :JSON.stringify(shopNow).includes('.hu')?
    'Rendelj most'
    :JSON.stringify(shopNow).includes('.sk')?
    'Do obchodu'
    :JSON.stringify(shopNow).includes('.cz')?
    'Do obchodu'
    :'Check your link'
    )
}

function checkSoonEnding(soonEnding) {
    return (
        JSON.stringify(soonEnding).includes('.co.uk')?
        'Uk'
        :JSON.stringify(soonEnding).includes('.pl')?
        'Pl'
        :JSON.stringify(soonEnding).includes('.de')?
        'De'
        :JSON.stringify(soonEnding).includes('.at')?
        'De'
        :JSON.stringify(soonEnding).includes('.ch')?
        'De'
        :JSON.stringify(soonEnding).includes('.fr')?
        'Fr'
        :JSON.stringify(soonEnding).includes('.es')?
        'Es'
        :JSON.stringify(soonEnding).includes('.pt')?
        'Pt'
        :JSON.stringify(soonEnding).includes('.it')?
        'It'
        :JSON.stringify(soonEnding).includes('.nl')?
        'Nl'
        :JSON.stringify(soonEnding).includes('.no')?
        'No'
        :JSON.stringify(soonEnding).includes('.fi')?
        'Fi'
        :JSON.stringify(soonEnding).includes('.dk')?
        'Dk'
        :JSON.stringify(soonEnding).includes('.se')?
        'Se'
        :JSON.stringify(soonEnding).includes('.hu')?
        'Hu'
        :JSON.stringify(soonEnding).includes('.sk')?
        'Sk'
        :JSON.stringify(soonEnding).includes('.cz')?
        'Cz'
        :'Check your link'
    )
}

function checkWatchNow(watchNow) {
    return (
        JSON.stringify(watchNow).includes('.co.uk')?
        'Watch Now'
        :JSON.stringify(watchNow).includes('.pl')?
        'Oglądaj'
        :JSON.stringify(watchNow).includes('.de')?
        'Jetzt abspielen'
        :JSON.stringify(watchNow).includes('.at')?
        'Jetzt abspielen'
        :JSON.stringify(watchNow).includes('.ch')?
        'Jetzt abspielen'
        :JSON.stringify(watchNow).includes('.fr')?
        'Voir la vidéo'
        :JSON.stringify(watchNow).includes('.es')?
        'Ver Video'
        :JSON.stringify(watchNow).includes('.pt')?
        'Veja agora'
        :JSON.stringify(watchNow).includes('.it')?
        'Guarda Video'
        :JSON.stringify(watchNow).includes('.nl')?
        'Bekijk nu'
        :JSON.stringify(watchNow).includes('.no')?
        'Se nå'
        :JSON.stringify(watchNow).includes('.fi')?
        'Katso nyt'
        :JSON.stringify(watchNow).includes('.dk')?
        'Se nu'
        :JSON.stringify(watchNow).includes('.se')?
        'Titta nu'
        :JSON.stringify(watchNow).includes('.hu')?
        'Nézd meg'
        :JSON.stringify(watchNow).includes('.sk')?
        'Pozrieť video'
        :JSON.stringify(watchNow).includes('.cz')?
        'Přehrát nyní'
        :'Check your link'
    )
}

function clear(event) {
    return (event.target.links.value = '', event.target.text.value = '')
}


selectors.copyTemplate.addEventListener('click', () => {
    if (selectors.newsletter.innerHTML != '') {
        navigator.clipboard.writeText(selectors.newsletter.outerHTML)
        alert("Newsletter has been copied into clipboard!");
    }
    else {
        alert('There is no Newsletter now to copy!')
    }
})

selectors.deleteTemplate.addEventListener('click', () => {
    if (selectors.newsletter.innerHTML != '') {
        selectors.newsletter.innerHTML = ''
        alert("Newsletter has been deleted!");
    }
    else {
        alert('There is no Newsletter now to delete!')
    }
})

selectors.setLPCampaings.onclick = () => {
    let first = selectors.landingPageLink.value 
    let second = selectors.firstBanner.value
    let third = selectors.secondBanner.value
    data.campaigns.push(first, second, third)
    selectors.landingPageLink.value = ''
    selectors.firstBanner.value = ''
    selectors.secondBanner.value = ''
}

selectors.setDateBtn.addEventListener('click', () => {
    date = selectors.ImgDate.value
    setLocalStorage("date", date)
    // set date to global let date; variable
    selectors.ImgDate.value = ''
})

const makeTemplate = (event) => {
    event.preventDefault()
    const l = event.target.links.value
    const t = event.target.text.value

    if (l=='') {
        alert("Please, insert Links.")
    } else if (t=='') {
        alert("Please, insert Text.")
    } else if (data.campaigns.length == '0') {
        alert("Please, insert campaings.")
    } else if (date == undefined) {
        alert("Please, insert date.")
    } else {
        t.split(';').map(item => text.push(item))
        l.replace(/ /g, '').split(',').map(item => link.push(item))
        newsletterGen()
        clear(event)
        link.length = ''
        text.length = ''
    }
}

selectors.setLinksAndImg.onclick = () => {
    let links = selectors.setLinks.value 
    let text = selectors.setText.value
    const arrText = []
    const arrLinks = []
    text.split(';').map(item => arrText.push(item))
    links.replace(/ /g, '').split(',').map(item => arrLinks.push(item))
    setLocalStorage("links", JSON.stringify(arrLinks))
    setLocalStorage("text", JSON.stringify(arrText))
    selectors.setLinks.value = ''
    selectors.setText.value = ''
}

selectors.setImg.addEventListener('click', () => {
    date = getLocalStorage("date") ?? alert("Local storage for DATE field is empty, please set it.")
    let inpImgNum = selectors.imgNum.value
    let inpImgLink = selectors.imgLink.value
    let imgCol = selectors.imgCol.value
    Array.from(inpImgLink).length == 0 && Array.from(imgCol).length == 0 ? newsletterGenTest(inpImgNum) : newsletterGenTest(inpImgNum,inpImgLink,imgCol)
    selectors.imgNum.value = ''
    selectors.imgLink.value = ''
    selectors.imgCol.value = ''
})

function setLocalStorage(k, v) {
    localStorage.setItem(k, v)
}

export function getAllLocalStorage(v) {
    return JSON.parse(localStorage.getItem(v))
}

export function getLocalStorage(k) {
    return localStorage.getItem(k)
}

function clearLocalStorage(d) {
    localStorage.removeItem(d)
}

selectors.title.addEventListener('click', clearLocalStorage)
selectors.sidebar.addEventListener('submit', makeTemplate)
