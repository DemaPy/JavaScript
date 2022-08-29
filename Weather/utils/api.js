



export const api = {
    async getCity(city) {
        return await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
            .then(r => r.json())
            .then(data => data)
            .catch(e => alert(`Some error occur ${e}`))
    },
    async getHourly(latitude, longitude) {
        return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,snowfall,windspeed_10m`)
            .then(r => r.json())
            .then(data => data)
            .catch(e => alert(`Some error occur ${e}`))
    },
    async getCurrent(latitude, longitude) {
        return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then(r => r.json())
            .then(data => data)
            .catch(e => alert(`Some error occur ${e}`))
    },
    async getDaily(latitude, longitude, timezone) {
        return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${timezone}`)
            .then(r => r.json())
            .then(data => data)
            .catch(e => alert(`Some error occur ${e}`))
    },
}

