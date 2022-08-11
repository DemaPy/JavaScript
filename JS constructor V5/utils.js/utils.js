import { selectors, countries, CallToAction } from "./selectors.js"
import { newsletterGen } from "../app.js"
import { data, CTA } from '../data/model.js'

export let date = getLocalStorage("date")
export const campaign = JSON.parse(getLocalStorage("campaigns"))
selectors.btnCTA.disabled = getLocalStorage("country") == null ? true : false
const text = data.text
const link = data.links


export function setLocalStorage(k, v) {
    localStorage.setItem(k, v)
}

export function getLocalStorage(k) {
    return localStorage.getItem(k)
}

export function clearLocalStorage() {
    return localStorage.clear()
}

export function checkId(id) {
    return JSON.stringify(id).substring(JSON.stringify(id).length-6)
}

selectors.clearLocalStorage.addEventListener('click', () => {
    clearLocalStorage()
    window.location.reload()
})



for (const key in countries) {
    countries[key].addEventListener('click', () => {
        // setLocalStorage("Shop Now",CTA[key].shopNow)
        setLocalStorage("country",key.toLowerCase())
        setCTA()
        window.location.reload()
    })
}

function setCTA() {
    if (getLocalStorage("idCTA") == undefined) {
        setLocalStorage("idCTA", "shopNow")
        setLocalStorage("CallToAction",CTA[getLocalStorage("country").toUpperCase()][getLocalStorage("idCTA")])
    }
    setLocalStorage("CallToAction",CTA[getLocalStorage("country").toUpperCase()][getLocalStorage("idCTA")])
}

for (const key in CallToAction) {
    CallToAction[key].addEventListener('click', () => {
        setLocalStorage("idCTA", key)
        setLocalStorage("CallToAction",CTA[getLocalStorage("country").toUpperCase()][getLocalStorage("idCTA")])
        window.location.reload()
    })
}



selectors.imgName.innerHTML = getLocalStorage("date") == null ? '<span style="color: #e84848">Set Img Name</span>' : `Name: ${getLocalStorage("date").toUpperCase()}`
selectors.country.innerHTML = getLocalStorage("country") == null ? '<span style="color: #e84848">Set Country</span>' : `Country: ${getLocalStorage("country").toUpperCase()}`
selectors.showCTA.innerHTML = getLocalStorage("CallToAction") == null ? '<span style="color: #e84848">Set CTA</span>' : `CTA: ${getLocalStorage("CallToAction")}`

function clear(e) {
    return (e.target.links.value = '', e.target.text.value = '')
}

selectors.setLPCampaings.onclick = () => {
    let landingPage,firstBanner,secondBanner
    let empty =''
    if (selectors.landingPageLink.value.trim() == empty || selectors.firstBanner.value.trim() == empty || selectors.secondBanner.value.trim() == empty ) {
        alert("Value should be greater than 0.")
    } else {
        landingPage = selectors.landingPageLink.value.trim()
        firstBanner = selectors.firstBanner.value.trim()
        secondBanner = selectors.secondBanner.value.trim()
        const campaigns = {
            landingPage,
            firstBanner,
            secondBanner
        }
        setLocalStorage('campaigns', JSON.stringify(campaigns))
    }
    selectors.landingPageLink.value = ''
    selectors.firstBanner.value = ''
    selectors.secondBanner.value = ''
}

selectors.setDateBtn.addEventListener('click', () => {
    selectors.ImgDate.value.trim() == "" ? alert("Value should be greater than 0.") : date = selectors.ImgDate.value.trim()
    setLocalStorage('date', date)
    window.location.reload()
    selectors.ImgDate.value = ''
})

function isValid(link) {
    let l = link.includes('.co.uk') ? 'uk' : link.slice(20,22)
    console.log(l,getLocalStorage("country"))
    return l
}

const makeTemplate = (event) => {
    event.preventDefault()
    let empty = ''
    let l,t
    if (event.target.links.value.trim() == empty || event.target.text.value.trim() == empty) {
        alert("Value should be greater than 0.")
        clear(event)
    } else {
        l = event.target.links.value.replace(/ /g, '').split(';')
        if (isValid(l[0]) == 'ch') {
            t = event.target.text.value
    
            t.split(';').map(item => text.push(item))
            l.map(item =>  link.push(item))
            newsletterGen()
            clear(event)
            link.length = ''
            text.length = ''
        } else {
            if (isValid(l[0]) == getLocalStorage("country")) {
                t = event.target.text.value
    
                t.split(';').map(item => text.push(item))
                l.map(item =>  link.push(item))
                newsletterGen()
                clear(event)
                link.length = ''
                text.length = ''
            } else {
                alert("Country that you select doesn't correspond to link.")
                clear(event)
            }
        }


    }
}
selectors.sidebar.addEventListener('submit', makeTemplate)
