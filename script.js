const userName = document.getElementById("user-name")
const cryptoTop = document.getElementById("top-crypto")
const crypto = document.getElementById("crypto")
const time = document.getElementById("time")
const weather = document.getElementById("weather")


try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    userName.textContent = `By: ${data.user.name}`
        

} catch (err) {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1539678786826-79e8b51b457a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NDg2MDF8&ixlib=rb-4.0.3&q=80&w=1080)"
        userName.textContent = `By: Dodi Achmad`
    }


try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    if (!res.ok) {
        throw Error("Something went wrong")
    }
    const data = await res.json()
    cryptoTop.innerHTML = `
            <img src="${data.image.small}" class="img-bitcoin" />
            <span>${data.name}</span>
        `
    crypto.innerHTML += `
        <p>🎯: $${data.market_data.current_price.cad}</p>  
        <p>👆: $${data.market_data.high_24h.cad}</p>  
        <p>👇: $${data.market_data.low_24h.cad}</p>
    `
} catch (err) {
    console.log(err)
}

function getCurrentTime() {
    const timeNow = new Date()
    const currentTime = timeNow.toLocaleTimeString("en-us", {timeStyle: "short"})
    time.textContent = currentTime
}

setInterval(getCurrentTime, 1000)

try {
    navigator.geolocation.getCurrentPosition(async position => {
    const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    if(!res.ok) {
        throw Error("Weather data not available")
        }
    const data = await res.json()
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weather.innerHTML = `
        <img src=${iconURL} />
        <p class="weather-temp">${Math.round(data.main.temp)}</p>
        <p class="weather-city">${data.name}</p>
    `})
} catch (err) {
    console.log(err)
}

    



        
            
            
                
            
