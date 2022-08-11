import { data } from './data/model.js'
import { selectors } from './utils.js/selectors.js'
import { getLocalStorage, checkId, date } from './utils.js/utils.js'
const colspan = '2'


export function shopNow(link){
    return`
    <tr>
        <td colspan="${colspan}" style="font-family: 'Open Sans', sans-serif; text-align:center; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
        <a style="color:#242222;" href="${link}"><p style="font-size: 20px; color:#242222; text-align:center!important; line-height: 1.3; margin: 0!important; margin: 0; text-decoration: underline;">${getLocalStorage("CallToAction")}</p></a>
        </td>
    </tr>
    ` 
}

export function watchNow(){
    return`
    <tr>
        <td colspan="${colspan}" style="font-family: 'Open Sans', sans-serif; text-align:center; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
            <a style="color:#242222;" href=https://www.youtube.com/watch?v=J2LeoTLHVjk?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${checkId(data.links[0])}>
                <p style="font-size: 20px; color:#242222; text-align:center!important; line-height: 1.3; margin: 0!important; margin: 0; text-decoration: underline;">${getLocalStorage("CallToAction")}</p>
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
            <a href="${link}"><img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num}.jpg alt="" style="display: block;" width="100%" border="0" /></a>
        </td>
    </tr>
    `
}

export function spaceBtwText(num) {
    return`
    <tr>
        <td colspan="${colspan}">
            <img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num}.jpg alt="" style="display: block;" width="100%" border="0" />
        </td>
    </tr>
    `
}

export function soonEnding(link,campaign1,campaign2, num1, num2) {
    return `
    <tr>
        <td colspan="${colspan}">
            <img src=https://beliani.info/newsletter/2022/soonend${getLocalStorage("country") == 'chfr' ? 'Chfr' : getLocalStorage("country") == 'chde' ? 'Chde' : getLocalStorage("country").charAt(0).toUpperCase()+getLocalStorage("country").charAt(1)}.jpg alt="" style="display:block" width="100%" border="0" />
        </td>
    </tr>
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${getLocalStorage("country").length == 4 ? getLocalStorage("country").slice(0,2) : getLocalStorage("country") == 'uk' ? 'co.uk': getLocalStorage("country")}/content/${campaign1}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num1}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${getLocalStorage("country").length == 4 ? getLocalStorage("country").slice(0,2) : getLocalStorage("country") == 'uk' ? 'co.uk': getLocalStorage("country")}/content/${campaign2}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num2}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    `
}

export function lpLink(link,campaign, num) {
    return `
    <tr>
        <td colspan="${colspan}">
            <a href="https://www.beliani.${getLocalStorage("country").length == 4 ? getLocalStorage("country").slice(0,2) : getLocalStorage("country") == 'uk' ? 'co.uk': getLocalStorage("country")}/content/${campaign}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link)}>
                <img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num}.jpg alt="" style="display:block" width="100%" border="0" />
            </a>
        </td>
    </tr>
    `
}

export function box(link1, link2, link3 ,link4, num1, num2, num3, num4) {
    return `
    <tr>
        <td><a href="${link1}"><img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num1}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
        <td><a href="${link2}"><img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num2}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
    </tr>
    <tr>
        <td><a href="${link3}"><img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num3}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
        <td><a href="${link4}"><img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num4}.jpg alt="" style="display:block" width="100%" border="0" /></a></td>
    </tr>
    `
}

export function youTube(num, yt) {
    return `
    <tr>
        <td colspan="${colspan}">
            <a href="${yt}">
                <img src=https://beliani.info/newsletter/2022/${date}${getLocalStorage("country")}_${num}.jpg alt="" style="display: block;" width="100%" border="0">
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