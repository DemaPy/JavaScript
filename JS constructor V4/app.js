import { newsletter, link } from './functions.js'
import { data } from './model.js'
import { selectors } from './selectors.js'
import { getLocalStorage, getAllLocalStorage } from './functions.js'
import { Table } from './classes.js'
const campaign = data.campaigns
const text = data.text


export function newsletterGen() {
    selectors.newsletter.innerHTML = `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;" cellspacing="0" cellpadding="0" border="0" align="center">
        ${ newsletter.lpLink(link[0],campaign[0], '01') }
        
        ${ newsletter.paragraph(text[0], 'right', '#fefaec') }
        ${ newsletter.spaceBtwText('03') }
        ${ newsletter.paragraph(text[1], 'right', '#fefaec') }
        ${ newsletter.youTube('05', link[9]) }
        ${ newsletter.spaceBtwText('06') }

        ${ newsletter.categoryImg(link[0], '07') }
        ${ newsletter.categoryImg(link[0], '08') }
        ${ newsletter.title(text[2], 'left', '#f9f5f4') }
        ${ newsletter.spaceBtwText('10') }
        ${ newsletter.paragraph(text[3], 'left', '#f9f5f4') }
        ${ newsletter.spaceBtwText('12') }
        ${ newsletter.shopNow(link[0], text[12]) } 
        ${ newsletter.box( link[0], link[1], link[0], link[2], '14', '15','16', '17') }
        ${ newsletter.box( link[3], link[0], link[4], link[0], '18', '19','20', '21') }

        ${ newsletter.title(text[4], 'right') }
        ${ newsletter.spaceBtwText('23') }
        ${ newsletter.paragraph(text[5], 'right') }
        ${ newsletter.box( link[0], link[5], link[0], link[6], '25', '26','27', '28') }

        ${ newsletter.title(text[6], 'left') }
        ${ newsletter.spaceBtwText('30') }
        ${ newsletter.paragraph(text[7], 'left') }
        ${ newsletter.box( link[7], link[0], link[8], link[0], '32', '33','34', '35') }

        ${ newsletter.title(text[8], 'right') }
        ${ newsletter.spaceBtwText('37') }
        ${ newsletter.paragraph(text[9], 'right') }
        ${ newsletter.categoryImg(link[10], '39') }
        ${ newsletter.categoryImg(link[0], '40') }

        ${ newsletter.title(text[10], 'left', '#f9f5f4') }
        ${ newsletter.spaceBtwText('42') }
        ${ newsletter.paragraph(text[11], 'left', '#f9f5f4') }
        ${ newsletter.spaceBtwText('44') }
        ${ newsletter.shopNow(link[0], text[12]) }

        ${ newsletter.soonEnding(link[0], campaign[1], campaign[2], '47', '48') }
    </table>
    `
}

export function newsletterGenTest(...l) {
    const imgNum = l[0]
    const linkNum = l[1]
    const colspan = l[2]
    const table = new Table()
    if (linkNum !== undefined) {
        table.render(newsletter.categoryImg(getAllLocalStorage("links")[linkNum], imgNum))
    } else if (linkNum == undefined) {
        table.render(newsletter.spaceBtwText(imgNum))
    }
    // selectors.newsletter.innerHTML(newsletter.categoryImg(getAllLocalStorage("links")[l], i))
}