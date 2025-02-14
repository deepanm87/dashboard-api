const userName = document.getElementById("user-name")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => 
        {
            console.log(data)
            document.body.style.backgroundImage = `url(${data.urls.full})`
            userName.textContent = `By: ${data.user.name}`
        })