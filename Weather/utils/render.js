import { element } from "./element.js"

let celsius

export const render = {
    renderModal: function(to, items) {
        const data = items.map(item => {
            return `<div data-timezone="${item.timezone}" data-name="${item.name}" data-id="${item.id}" data-latitude="${item.latitude}" data-longitude="${item.longitude}" class="item">${item.name} -- ${item.timezone}</div>`
        }).join('')
        return to.innerHTML = `
            ${data}
        `
    },
    renderHourly: function(to, items) {
        const {time, temperature_2m, rain, windspeed_10m} = items.hourly
        celsius = items.hourly_units.temperature_2m

        let img
        switch (windspeed_10m) {
            case 1:
                img = `<img src="https://img.icons8.com/office/80/000000/wind.gif"/>`
            case 2:
                img =`<img src="https://img.icons8.com/office/80/000000/partly-cloudy-day--v1.png"/>`
            case 3:
                img =`<img src="https://img.icons8.com/office/80/000000/clouds.png"/>`
        }

        const times = time.map((t, index) => {
            return `
            <div class="row">
                <h1 class="row__title">${t}</h1>
                <div>
                    <img width="50px" src="/src/wind.gif"/><h1>${windspeed_10m[index]} km/h</h1>
                </div>
                <div>
                    <img id="arrow" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-2.png"/>
                </div>
            </div>
            `
        })

        return to.innerHTML = times.join('')
    },
    renderDaily: function(to, items) {
        const {sunrise, sunset, temperature_2m_max, temperature_2m_min, time, weathercode} = items.daily
        let img
        switch (weathercode) {
            case 1:
                img = `<img src="https://img.icons8.com/office/80/000000/summer.png"/>`
            case 2:
                img =`<img src="https://img.icons8.com/office/80/000000/partly-cloudy-day--v1.png"/>`
            case 3:
                img =`<img src="https://img.icons8.com/office/80/000000/clouds.png"/>`
        }
        const elements = sunrise.map((sunrise, index) => {
            return `
            <div class="vartical_card">
                <div class="vertical__title">${time[index]}</div>
                <div class="temperatureDiv">
                    <div>
                        <p>T. max</p>
                        <div class="vertical__temperature">${temperature_2m_max[index]}</div>
                    </div>
                    <div>
                        <p>T. min</p>
                        <div class="vertical__temperature">${temperature_2m_min[index]}</div>
                    </div>
                </div>
                <div class="vertical__icon"><img src="https://img.icons8.com/office/80/000000/clouds.png"/></div>
                <div class="sun">
                    <div>
                        <p>Sun rise</p>
                        <div class="vertical__sunRise">${sunrise.substring(11)}</div>
                    </div>
                    <div>
                        <p>Sun set</p>
                        <div class="vertical__sunSet">${sunset[index].substring(11)}</div>
                    </div>
                </div>
            </div>
            `
        })

        return to.innerHTML = elements.join('')
    },
    renderCurrent: function(items) {
        const {temperature, time, weathercode, winddirection, windspeed} = items.current_weather

        let img
        switch (weathercode) {
            case 1:
                img = `<img src="https://img.icons8.com/office/80/000000/summer.png"/>`
            case 2:
                img =`<img src="https://img.icons8.com/office/80/000000/partly-cloudy-day--v1.png"/>`
            case 3:
                img =`<img src="https://img.icons8.com/office/80/000000/clouds.png"/>`
        }

        return [
                element.getElement("#temrerature").textContent = `${Math.floor(temperature)} °C`,
                element.getElement("#weatherImg").innerHTML = img,
                element.getElement("#windDirection").textContent = `${winddirection} km/h`,
                element.getElement("#windSpeed").textContent = windspeed,
                element.getElement("#time").textContent = time.substring(11),
        ].join('')
    }
}
