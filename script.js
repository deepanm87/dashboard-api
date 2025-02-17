const userName = document.getElementById("user-name")
const crypto = document.getElementById("top-crypto")
const currencies = document.getElementById("currencies")
const time = document.getElementById("time")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => 
        {
            document.body.style.backgroundImage = `url(${data.urls.full})`
            userName.textContent = `By: ${data.user.name}`
        })
    .catch(err => {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1539678786826-79e8b51b457a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NDg2MDF8&ixlib=rb-4.0.3&q=80&w=1080)"
    })


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        crypto.innerHTML = `
            <img src="${data.image.small}" class="img-bitcoin" />
            <span>${data.name}</span>
        `
        currencies.innerHTML = `
            <p>🎯: $${data.market_data.current_price.cad}</p>  
            <p>👆: $${data.market_data.high_24h.cad}</p>  
            <p>👇: $${data.market_data.low_24h.cad}</p>
        `
    })
    .catch((e) => {
        console.log(e)
    })

function getCurrentTime() {
    const timeNow = new Date()
    const currentTime = timeNow.toLocaleTimeString("en-us", {timeStyle: "short"})
    time.textContent = currentTime
}

setInterval(getCurrentTime, 1000)