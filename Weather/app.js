import { element } from "./utils/element.js";
import {api} from './utils/api.js'
import {isValid} from './utils/isValid.js'
import { render } from "./utils/render.js";
import { storage } from "./utils/storage.js";
const {setClick, getElement, getElements} = element
const {set,get} = storage
const {inputCity} = isValid
let response



setClick(getElement("#getInputBtn"), async () => {
    const input = inputCity(getElement("#getInput").value)
    if (input) {
        try {
            response = await api.getCity(input)
            if (response.results) {
                render.renderModal(getElement("#modalSearch"), response.results)
                getElement("#modalSearch").classList.add("modalActive")
            } else {
                alert('Something went wrong.')
                getElement("#getInput").value = ''
            }
        }
        catch (e) {
            console.error(`Some error has occur ${e}`)
        }

    }
})

setClick(getElement("#modalSearch"), async (event) => {
    const {name, latitude, longitude, timezone} = event.target.dataset

    let responseCurrent = await api.getCurrent(latitude, longitude)
    let responseHouly = await api.getHourly(latitude, longitude)
    let responseDaily = await api.getDaily(latitude, longitude, timezone)
    if (responseHouly && responseDaily && responseCurrent) {
        console.log(responseHouly)

        render.renderCurrent(responseCurrent)
        render.renderHourly(getElement("#dataHourly"), responseHouly)
        render.renderDaily(getElement("#dataDaily"), responseDaily)

        getElement("#modalSearch").classList.remove("modalActive")
        getElement("#cityHourly").textContent = name
        getElement("#timezoneHourly").textContent = timezone
        getElement("#cityCurr").textContent = name
        getElement("#weatherHourly").classList.add("activeCard")
        getElement("#currentId").classList.add("activeCard")
        getElement("#getInput").value = ''
    } else {
        alert('Something went wrong.')
    }
})